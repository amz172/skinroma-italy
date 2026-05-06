/*
  # Create Appointments Table

  1. New Tables
    - `appointments`
      - `id` (uuid, primary key)
      - `name` (text, patient full name)
      - `phone` (text, contact phone)
      - `email` (text, optional email)
      - `service` (text, selected service)
      - `preferred_date` (date, requested appointment date)
      - `message` (text, optional notes)
      - `status` (text, default 'pending')
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `appointments` table
    - Allow anonymous users to INSERT (public booking form)
    - No SELECT for anonymous users (data privacy)

  3. Notes
    - Appointments submitted via the booking form are stored here
    - Status defaults to 'pending' for clinic staff review
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text DEFAULT '',
  service text NOT NULL,
  preferred_date date,
  message text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an appointment"
  ON appointments
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view appointments"
  ON appointments
  FOR SELECT
  TO authenticated
  USING (true);
