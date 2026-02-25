PROJECT: Campus Rent/Sell Web App
TARGET: LIVE DEPLOYMENT ON DAY 25
STATUS: AUTH COMPLETED (frontend + backend)

RULES:
- No extra features
- No realtime sockets
- Keep chat simple
- Deploy first, Docker last
- Focus only on MVP

======================================
PHASE 1 — USER SYSTEM
Days 1–3
======================================
Backend:
- GET /users/me
- PUT /users/update

Frontend:
- Profile page
- Fetch logged user after login
- Edit profile form

GOAL:
User logs in → profile loads → update works.

======================================
PHASE 2 — ITEM CORE SYSTEM
Days 4–8 (MOST IMPORTANT)Co
======================================
Backend:
- Item model
- POST /items
- GET /items
- GET /items/:id
- PUT /items/:id
- DELETE /items/:id
- Owner-only edit/delete protection

Item fields:
title
price
type (rent/sell)
category
description
image
owner

Frontend:
- Add item page
- My items page
- Item details page
- Edit/delete buttons

GOAL:
User can add → edit → delete → view items.

======================================
PHASE 3 — SEARCH + FILTER
Days 9–10
======================================
Backend:
- /items?search=laptop
- /items?type=rent
- /items?category=books

Frontend:
- Search bar
- Category filter
- Rent/Sell toggle

GOAL:
User can browse items easily.

======================================
PHASE 4 — MAIN LANDING DASHBOARD
Days 11–12
======================================
Create main page after login.

Show:
- Search bar
- Latest items
- Add item button
- Profile shortcut
- My items shortcut

This becomes control center.

======================================
PHASE 5 — SIMPLE CHAT SYSTEM
Days 13–15
======================================
Keep basic (NO realtime sockets).

Backend model:
conversationId
sender
receiver
itemId
message

Routes:
POST /messages
GET  /messages/:conversationId

Frontend:
- Chat button on item detail
- Open conversation page
- Send message
- Show messages

GOAL:
User can contact seller.

======================================
PHASE 6 — IMAGE UPLOAD
Days 16–17
======================================
Use Cloudinary.

Flow:
Upload image → get URL → save in item

Show image:
- item card
- item detail page

GOAL:
Items look real.

======================================
PHASE 7 — UI POLISH
Days 18–20
======================================
Add:
- Loading spinners
- Toast messages
- Error UI
- Empty states
- Better spacing

GOAL:
Portfolio-ready UI.

======================================
PHASE 8 — DEPLOY (NORMAL FIRST)
Days 21–23
======================================
Backend:
- Deploy on Render or Railway

Frontend:
- Deploy on Vercel

Fix:
- Env variables
- CORS
- API URL
- Test login + items + chat

GOAL:
App live and usable.

======================================
PHASE 9 — DOCKER (LAST 2 DAYS)
Days 24–25
======================================

Day 24:
- Backend Dockerfile
- Frontend Dockerfile
- docker-compose.yml
- Test locally with docker compose up

Day 25:
- Fix ports/env issues
- Test full container setup
- Push Docker setup to GitHub

GOAL:
Dockerized full stack.

======================================
FINAL BUILD ORDER
======================================
Auth ✅
↓
User profile
↓
Item CRUD
↓
Item details
↓
Search/filter
↓
Dashboard
↓
Chat
↓
Image upload
↓
UI polish
↓
Deploy
↓
Docker

======================================
DAILY WORK TARGET
======================================
Minimum: 3–4 hrs/day
Ideal: 5–6 hrs/day

======================================
WHAT TO START TODAY
======================================
Build USER PROFILE SYSTEM:
- /users/me route
- Profile page
- Fetch user after login

Do NOT jump to items yet.
