-- ====================================================================
-- PRAISE CHANGE DIVINE LIFE GOSPEL MINISTRY
-- Complete Supabase PostgreSQL Schema & RLS Security Policies
-- ====================================================================

-- 1. Enable Required Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Create Custom ENUM Types
CREATE TYPE user_role AS ENUM (
  'SUPER_ADMIN',
  'BRANCH_PASTOR',
  'TREASURER',
  'SECRETARY'
);

CREATE TYPE church_branch AS ENUM (
  'Headquarters',
  'Ayegbami Branch',
  'Eposo Branch'
);

CREATE TYPE service_type AS ENUM (
  'Sunday Worship',
  'Tuesday Bible Study',
  'Thursday Solution Hour',
  'Power Night Vigil',
  'Special Program'
);

CREATE TYPE report_status AS ENUM (
  'DRAFT',
  'SUBMITTED',
  'APPROVED',
  'LOCKED'
);

-- ====================================================================
-- 3. USERS / PROFILES TABLE
-- Maps to Supabase Auth (auth.users)
-- ====================================================================
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  role user_role NOT NULL DEFAULT 'BRANCH_PASTOR',
  branch church_branch NOT NULL DEFAULT 'Headquarters',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ====================================================================
-- 4. WEEKLY SERVICE REPORTS TABLE
-- ====================================================================
CREATE TABLE public.weekly_service_reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  date DATE NOT NULL,
  service_type service_type NOT NULL,
  branch church_branch NOT NULL,
  
  -- Attendance Breakdown
  men_attendance INT NOT NULL DEFAULT 0,
  women_attendance INT NOT NULL DEFAULT 0,
  children_attendance INT NOT NULL DEFAULT 0,
  total_attendance INT GENERATED ALWAYS AS (men_attendance + women_attendance + children_attendance) STORED,

  -- Spiritual Impact
  new_converts INT NOT NULL DEFAULT 0,
  decisions_for_christ INT NOT NULL DEFAULT 0,
  holy_spirit_baptism INT NOT NULL DEFAULT 0,
  healings INT NOT NULL DEFAULT 0,

  -- Financial Collections (in Naira)
  general_tithe NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  sunday_offering NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  thanksgiving_offering NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  building_seed NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  evangelism_seed NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  total_collection NUMERIC(12, 2) GENERATED ALWAYS AS (
    general_tithe + sunday_offering + thanksgiving_offering + building_seed + evangelism_seed
  ) STORED,

  -- Sermon & Message Details
  sermon_title TEXT NOT NULL,
  preacher TEXT NOT NULL,
  scripture_reference TEXT NOT NULL,

  -- Metadata
  submitted_by TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ====================================================================
-- 5. MONTHLY FINANCIAL & SPIRITUAL REPORTS TABLE
-- Digitizes physical sheets (media_1787086658548 & media_1787086658655)
-- ====================================================================
CREATE TABLE public.monthly_reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  month VARCHAR(20) NOT NULL,
  year INT NOT NULL,
  branch church_branch NOT NULL,
  pastor_name TEXT NOT NULL,
  treasurer_name TEXT NOT NULL,
  secretary_name TEXT NOT NULL,
  church_address TEXT NOT NULL,
  status report_status NOT NULL DEFAULT 'SUBMITTED',

  -- SPIRITUAL SECTION
  new_converts INT NOT NULL DEFAULT 0,
  decisions_for_christ INT NOT NULL DEFAULT 0,
  water_baptism INT NOT NULL DEFAULT 0,
  holy_spirit_baptism INT NOT NULL DEFAULT 0,
  healings INT NOT NULL DEFAULT 0,
  house_fellowship_centres INT NOT NULL DEFAULT 0,
  children_cadets INT NOT NULL DEFAULT 0,
  teens_junior INT NOT NULL DEFAULT 0,
  teens_senior INT NOT NULL DEFAULT 0,
  youth_challengers INT NOT NULL DEFAULT 0,
  adults_cfm INT NOT NULL DEFAULT 0,
  senior_citizens INT NOT NULL DEFAULT 0,
  previous_month_members INT NOT NULL DEFAULT 0,
  new_members_this_month INT NOT NULL DEFAULT 0,
  withdrawals_transfers INT NOT NULL DEFAULT 0,
  withdrawals_death INT NOT NULL DEFAULT 0,
  withdrawals_dismissed INT NOT NULL DEFAULT 0,
  total_members_after_withdrawals INT NOT NULL DEFAULT 0,
  ordained_ministers INT NOT NULL DEFAULT 0,
  licensed_ministers INT NOT NULL DEFAULT 0,
  exhorters INT NOT NULL DEFAULT 0,
  elders_deacons INT NOT NULL DEFAULT 0,
  elders_deaconesses INT NOT NULL DEFAULT 0,
  avg_pre_sun_sch_prayer INT NOT NULL DEFAULT 0,
  avg_sun_school INT NOT NULL DEFAULT 0,
  avg_sun_worship INT NOT NULL DEFAULT 0,
  avg_house_fellowship INT NOT NULL DEFAULT 0,
  avg_bible_study INT NOT NULL DEFAULT 0,
  avg_prayer_meeting INT NOT NULL DEFAULT 0,

  -- FINANCIAL RECEIPTS
  general_tithe NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  ministers_tithe NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  worship_offerings NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  missionary_offerings NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  midweek_offerings NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  sunday_school_offerings NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  thanksgiving_offerings NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  love_welfare_offerings NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  building_pledges NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  church_pioneering NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  donations NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  seed_faith NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  staff_loan_repayment NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  other_receipts NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  total_receipts NUMERIC(12, 2) NOT NULL DEFAULT 0.00,

  -- FINANCIAL PAYMENTS
  ministers_basic_salary NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  ministers_allowances NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  workers_basic_salary NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  workers_allowances NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  office_refreshments NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  church_pioneering_expenses NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  donations_love_offerings NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  sunday_school_expenses NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  crusade_revival_expenses NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  building_repairs NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  pastors_training NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  stationery_photocopies NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  electricity NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  transportation NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  welfare NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  bank_charges NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  land_acquisition NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  equipment_purchase NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  total_payments NUMERIC(12, 2) NOT NULL DEFAULT 0.00,

  -- CALCULATED BALANCE
  surplus_deficit NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  cash_in_hand_bank NUMERIC(12, 2) NOT NULL DEFAULT 0.00,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT unique_branch_month_year UNIQUE (branch, month, year)
);

-- ====================================================================
-- 6. ROW LEVEL SECURITY (RLS) POLICIES
-- ====================================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.weekly_service_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.monthly_reports ENABLE ROW LEVEL SECURITY;

-- Profiles Policies
CREATE POLICY "Public profiles are readable by authenticated users"
  ON public.profiles FOR SELECT
  TO authenticated USING (true);

-- Weekly Reports Policies
CREATE POLICY "Super Admins can view all weekly reports"
  ON public.weekly_service_reports FOR SELECT
  TO authenticated USING (
    (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'SUPER_ADMIN'
    OR branch = (SELECT branch FROM public.profiles WHERE id = auth.uid())
  );

CREATE POLICY "Branch Pastors can insert weekly reports"
  ON public.weekly_service_reports FOR INSERT
  TO authenticated WITH CHECK (true);

-- Monthly Reports Policies
CREATE POLICY "Users can view monthly reports for their branch or if Super Admin"
  ON public.monthly_reports FOR SELECT
  TO authenticated USING (
    (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'SUPER_ADMIN'
    OR branch = (SELECT branch FROM public.profiles WHERE id = auth.uid())
  );

CREATE POLICY "Users can insert monthly reports"
  ON public.monthly_reports FOR INSERT
  TO authenticated WITH CHECK (true);

CREATE POLICY "Super Admins can update/approve monthly reports"
  ON public.monthly_reports FOR UPDATE
  TO authenticated USING (
    (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'SUPER_ADMIN'
  );

-- ====================================================================
-- 7. PERFORMANCE INDEXES
-- ====================================================================
CREATE INDEX idx_weekly_reports_branch_date ON public.weekly_service_reports (branch, date DESC);
CREATE INDEX idx_monthly_reports_branch_year_month ON public.monthly_reports (branch, year DESC, month);

-- ====================================================================
-- 8. INITIAL DEMO SEED DATA (APRIL 2018 PHYSICAL REPORT SHEET)
-- ====================================================================
INSERT INTO public.monthly_reports (
  month, year, branch, pastor_name, treasurer_name, secretary_name, church_address, status,
  new_converts, decisions_for_christ, water_baptism, holy_spirit_baptism, healings, house_fellowship_centres,
  children_cadets, teens_junior, teens_senior, youth_challengers, adults_cfm, senior_citizens,
  previous_month_members, new_members_this_month, withdrawals_transfers, withdrawals_death, withdrawals_dismissed,
  total_members_after_withdrawals, ordained_ministers, licensed_ministers, exhorters, elders_deacons, elders_deaconesses,
  avg_pre_sun_sch_prayer, avg_sun_school, avg_sun_worship, avg_house_fellowship, avg_bible_study, avg_prayer_meeting,
  general_tithe, ministers_tithe, worship_offerings, missionary_offerings, midweek_offerings, sunday_school_offerings,
  thanksgiving_offerings, love_welfare_offerings, building_pledges, church_pioneering, donations, seed_faith, staff_loan_repayment,
  other_receipts, total_receipts, ministers_basic_salary, ministers_allowances, workers_basic_salary, workers_allowances,
  office_refreshments, church_pioneering_expenses, donations_love_offerings, sunday_school_expenses, crusade_revival_expenses,
  building_repairs, pastors_training, stationery_photocopies, electricity, transportation, welfare, bank_charges, land_acquisition,
  equipment_purchase, total_payments, surplus_deficit, cash_in_hand_bank
) VALUES (
  'April', 2018, 'Ayegbami Branch', 'Onu Genesis', 'Bro Kehinde Asyba', 'Mrs Genesis', 'No 6, Ikara Road - Ode Remo', 'APPROVED',
  5, 5, 2, 1, 1, 1,
  15, 12, 10, 25, 40, 8,
  110, 5, 0, 0, 0,
  115, 1, 1, 2, 3, 4,
  36, 123, 180, 50, 75, 60,
  5650.00, 2300.00, 2465.00, 0.00, 1220.00, 0.00,
  1540.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
  0.00, 9885.00, 5000.00, 0.00, 5000.00, 0.00,
  1000.00, 0.00, 2270.00, 2270.00, 1000.00,
  0.00, 0.00, 1000.00, 1500.00, 500.00, 500.00, 0.00, 0.00,
  0.00, 62700.00, 11925.00, 2040.00
) ON CONFLICT DO NOTHING;
