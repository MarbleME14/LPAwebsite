-- Create tables for the LPA application

-- Users table (extends Supabase Auth)
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email TEXT NOT NULL UNIQUE,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- LPA Applications table
CREATE TABLE lpa_applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  lpa_type TEXT NOT NULL,
  donor_location TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Donors table
CREATE TABLE donors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lpa_id UUID NOT NULL REFERENCES lpa_applications(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  address TEXT,
  date_of_birth DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE
);

-- Attorneys table
CREATE TABLE attorneys (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lpa_id UUID NOT NULL REFERENCES lpa_applications(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  address TEXT,
  relationship TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE
);

-- Create RLS policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE lpa_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE donors ENABLE ROW LEVEL SECURITY;
ALTER TABLE attorneys ENABLE ROW LEVEL SECURITY;

-- Users can only read/write their own data
CREATE POLICY "Users can read their own data" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own data" ON users
  FOR UPDATE USING (auth.uid() = id);

-- LPA Applications policies
CREATE POLICY "Users can read their own LPA applications" ON lpa_applications
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own LPA applications" ON lpa_applications
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own LPA applications" ON lpa_applications
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own LPA applications" ON lpa_applications
  FOR DELETE USING (auth.uid() = user_id);

-- Donors policies
CREATE POLICY "Users can read donors for their LPA applications" ON donors
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM lpa_applications
      WHERE lpa_applications.id = donors.lpa_id
      AND lpa_applications.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert donors for their LPA applications" ON donors
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM lpa_applications
      WHERE lpa_applications.id = donors.lpa_id
      AND lpa_applications.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update donors for their LPA applications" ON donors
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM lpa_applications
      WHERE lpa_applications.id = donors.lpa_id
      AND lpa_applications.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete donors for their LPA applications" ON donors
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM lpa_applications
      WHERE lpa_applications.id = donors.lpa_id
      AND lpa_applications.user_id = auth.uid()
    )
  );

-- Attorneys policies
CREATE POLICY "Users can read attorneys for their LPA applications" ON attorneys
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM lpa_applications
      WHERE lpa_applications.id = attorneys.lpa_id
      AND lpa_applications.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert attorneys for their LPA applications" ON attorneys
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM lpa_applications
      WHERE lpa_applications.id = attorneys.lpa_id
      AND lpa_applications.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update attorneys for their LPA applications" ON attorneys
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM lpa_applications
      WHERE lpa_applications.id = attorneys.lpa_id
      AND lpa_applications.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete attorneys for their LPA applications" ON attorneys
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM lpa_applications
      WHERE lpa_applications.id = attorneys.lpa_id
      AND lpa_applications.user_id = auth.uid()
    )
  );

