-- FORCE FIX DATABASE
-- Este script vai garantir que tudo esteja criado corretamente.

-- 1. Garante que as tabelas existem
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

-- 2. Adiciona colunas se estiverem faltando (Preventivo)
do $$
begin
  if not exists (select 1 from information_schema.columns where table_name = 'profiles' and column_name = 'current_day') then
    alter table profiles add column current_day integer default 1;
  end if;
  
  if not exists (select 1 from information_schema.columns where table_name = 'daily_progress' and column_name = 'workout_completed') then
    alter table daily_progress add column workout_completed boolean default false;
  end if;
end $$;

-- 3. Reseta Políticas de Segurança (Remove as antigas e cria novas)
alter table profiles enable row level security;
alter table daily_progress enable row level security;

-- Remove políticas antigas (para não dar erro de duplicidade)
drop policy if exists "Users can view own profile" on profiles;
drop policy if exists "Users can update own profile" on profiles;
drop policy if exists "Users can insert own profile" on profiles;
drop policy if exists "Users can view own progress" on daily_progress;
drop policy if exists "Users can insert own progress" on daily_progress;
drop policy if exists "Users can update own progress" on daily_progress;

-- Cria novas políticas
create policy "Users can view own profile" on profiles for select using (auth.uid() = user_id);
create policy "Users can update own profile" on profiles for update using (auth.uid() = user_id);
create policy "Users can insert own profile" on profiles for insert with check (auth.uid() = user_id);

create policy "Users can view own progress" on daily_progress for select using (auth.uid() = user_id);
create policy "Users can insert own progress" on daily_progress for insert with check (auth.uid() = user_id);
create policy "Users can update own progress" on daily_progress for update using (auth.uid() = user_id);

-- 4. Função para auto-criação de perfil
create or replace function public.handle_new_user() 
returns trigger as $$
begin
  insert into public.profiles (user_id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name')
  on conflict (user_id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

-- Trigger
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
