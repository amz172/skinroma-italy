# AGENTS.md

## Purpose
This file helps AI coding agents understand the current repository, the main frontend architecture, and what to preserve when adding auth and admin features.

## Project overview
- Vite + React + TypeScript + Tailwind CSS frontend.
- Uses React Router (`src/App.tsx`) for navigation.
- Supabase is the backend integration point in `src/lib/supabase.ts`.
- Appointment booking is already implemented in `src/components/BookingForm.tsx` and persists to the `appointments` table.
- No authentication routes or admin pages exist yet.

## Core structure
- `src/App.tsx` — app shell and route definitions.
- `src/pages/` — page-level screens: `Home`, `Services`, `About`, `Contact`.
- `src/components/` — reusable UI components such as `Header`, `Footer`, `WhatsAppButton`, and `BookingForm`.
- `src/lib/supabase.ts` — Supabase client initialization using `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
- `supabase/migrations/20260503204315_create_appointments_table.sql` — existing appointments schema.

## Environment and commands
- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Production build: `npm run build`
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`

## Important conventions
- Keep route names simple and consistent with existing pages.
- Add new pages under `src/pages/` and update `src/App.tsx` routes.
- Preserve the site theme, typography, and Tailwind utility classes.
- Use Supabase client in `src/lib/supabase.ts` for database and auth operations.

## Feature guidance for requested work
The current enhancement requests are:
1. Add an admin panel that shows appointment records to an admin user.
2. Add user password update functionality.
3. Add a page to create/login users with email and password.

Suggested implementation approach:
- Create auth screens in `src/pages/` such as `Login.tsx`, `Signup.tsx`, and `Account.tsx` or `Profile.tsx`.
- Add an admin page like `src/pages/Admin.tsx` and route it under `/admin`.
- Use Supabase Auth flows for signup, sign-in, password recovery, and password update.
- Fetch appointments from `supabase.from('appointments')` in the admin page and present them in a table.
- Keep the new UI aligned with the current visual style and responsive layout.

## Notes for agents
- There is currently no auth state management in the repo.
- Do not add backend server code; use Supabase auth and row-level security from the frontend.
- Avoid introducing unrelated file structure changes.
- If an environment file is needed, use `.env` with the existing Vite environment variable conventions.

## Useful files
- `package.json`
- `src/App.tsx`
- `src/lib/supabase.ts`
- `src/components/BookingForm.tsx`
- `supabase/migrations/20260503204315_create_appointments_table.sql`
