# LPA Online - Database Setup

This project uses Supabase 

```markdown file="README.md"
# LPA Online - Database Setup

This project uses Supabase for authentication and database storage. Follow these steps to set up your database:

## Setup Instructions

1. Create a Supabase account at [supabase.com](https://supabase.com)
2. Create a new project
3. Add the following environment variables to your Vercel project:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
   - `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key (for admin operations)

## Database Schema

The database schema includes the following tables:
- `users`: Extends Supabase Auth with additional user information
- `lpa_applications`: Stores LPA application data
- `donors`: Information about the donors (the person the LPA is for)
- `attorneys`: Information about the attorneys (people who will make decisions)

## Setting Up the Database

1. Go to the SQL Editor in your Supabase dashboard
2. Run the SQL script in `db/schema.sql` to create the necessary tables and policies
3. Verify that the tables have been created correctly

## Authentication

This project uses Supabase Authentication with email/password login. The authentication flow is:
1. User signs up or logs in
2. User is redirected to the dashboard
3. Protected routes check for authentication using middleware

## Development

To run the project locally:

1. Clone the repository
2. Install dependencies with `npm install`
3. Set up environment variables in a `.env.local` file
4. Run the development server with `npm run dev`

