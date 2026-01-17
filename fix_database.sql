-- 1. Create tables if they don't exist
create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users not null,
  full_name text,
  current_day integer default 1,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id)
);

create table if not exists daily_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users not null,
  day_number integer not null,
  workout_completed boolean default false,
  water_goal_completed boolean default false,
  meal_plan_followed boolean default false,
  completed_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, day_number)
);

-- 2. Enable RLS
alter table profiles enable row level security;
alter table daily_progress enable row level security;

-- 3. Policies for Profiles (Drop first to avoid conflicts)
drop policy if exists "Users can view own profile" on profiles;
create policy "Users can view own profile" on profiles
  for select using (auth.uid() = user_id);

drop policy if exists "Users can update own profile" on profiles;
create policy "Users can update own profile" on profiles
  for update using (auth.uid() = user_id);

drop policy if exists "Users can insert own profile" on profiles;
create policy "Users can insert own profile" on profiles
  for insert with check (auth.uid() = user_id);

-- 4. Policies for Daily Progress
drop policy if exists "Users can view own progress" on daily_progress;
create policy "Users can view own progress" on daily_progress
  for select using (auth.uid() = user_id);

drop policy if exists "Users can insert own progress" on daily_progress;
create policy "Users can insert own progress" on daily_progress
  for insert with check (auth.uid() = user_id);

drop policy if exists "Users can update own progress" on daily_progress;
create policy "Users can update own progress" on daily_progress
  for update using (auth.uid() = user_id);

-- 5. Trigger to handle new user creation
create or replace function public.handle_new_user() 
returns trigger as $$
begin
  insert into public.profiles (user_id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

-- Trigger execution
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
