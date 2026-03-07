# EventSphere

EventSphere is a simple event management application built with **Next.js App Router**, **JavaScript**, and **NextAuth.js**.
It includes public and protected pages, a polished responsive UI, Google and credentials login, an event list page, event details page, and protected event management pages.

## Features

- Landing page with 7 sections
- Sticky responsive navbar
- Google and credentials authentication with NextAuth.js
- Redirect to home after login
- Public events page with 6+ event cards
- Event details page
- Protected Add Event page
- Protected Manage Events page
- Clean responsive UI with consistent design

## Demo Credentials

```bash
Email: demo@example.com
Password: 123456

###Setup & Installation

#Clone the repository:

git clone <your-repo-url>
cd nextauth-event-app

#Install dependencies:

npm install

#Create a .env.local file and add:

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_super_secret_key_here
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

#Run the development server:

npm run dev

#Open:

http://localhost:3000
Route Summary

/ → Landing page

/login → Login page

/register → Register page

/events → Event list page

/events/[id] → Event details page

/add-event → Protected add event page

/manage-events → Protected manage events page

/api/auth/[...nextauth] → NextAuth API route

Notes

Protected routes are secured using NextAuth middleware.

Credentials login is for demo purposes.

Register page is UI only unless connected to a database.

Event data is stored in a local file for simplicity.