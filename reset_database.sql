-- ⚠️ ATENÇÃO: ESSE SCRIPT VAI DELETAR TUDO E RECOMEÇAR DO ZERO ⚠️
-- Ele apaga as tabelas do aplicativo AuraMusa e cria novas, limpas e corretas.

-- 1. DROP (Apagar) tabelas antigas
-- Apaga as tabelas principais e qualquer vínculo
DROP TABLE IF EXISTS daily_progress CASCADE;
DROP TABLE IF EXISTS profiles CASCADE;

-- (Opcional) Apaga possíveis tabelas antigas de versões anteriores, se existirem
DROP TABLE IF EXISTS workouts CASCADE;
DROP TABLE IF EXISTS tasks CASCADE;
DROP TABLE IF EXISTS users CASCADE; -- Cuidado, a tabela real de usuários fica em auth.users, aqui seria só uma cópia antiga

-- 2. CREATE (Criar) Tabelas Novas (O Jeito Certo)

create table profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users not null,
  full_name text,
  current_day integer default 1,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id)
);

create table daily_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users not null,
  day_number integer not null,
  workout_completed boolean default false,
  water_goal_completed boolean default false,
  meal_plan_followed boolean default false,
  completed_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, day_number)
);

-- 3. Configurar Segurança (RLS)

alter table profiles enable row level security;
alter table daily_progress enable row level security;

-- Políticas para Profiles
create policy "Users can view own profile" on profiles for select using (auth.uid() = user_id);
create policy "Users can update own profile" on profiles for update using (auth.uid() = user_id);
create policy "Users can insert own profile" on profiles for insert with check (auth.uid() = user_id);

-- Políticas para Daily Progress
create policy "Users can view own progress" on daily_progress for select using (auth.uid() = user_id);
create policy "Users can insert own progress" on daily_progress for insert with check (auth.uid() = user_id);
create policy "Users can update own progress" on daily_progress for update using (auth.uid() = user_id);

-- 4. Gatilhos (Automático)

create or replace function public.handle_new_user() 
returns trigger as $$
begin
  insert into public.profiles (user_id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name')
  on conflict (user_id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- FIM! Agora seu banco está novinho em folha. 🚀
