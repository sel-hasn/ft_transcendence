<!--
  GitHub-optimized progress tracker
  - Collapsible week sections
  - Task lists to check off in GitHub UI
  - Small, scannable summary at the top
-->

# 🎯 ft_transcendence — Auth Module Progress Tracker

![progress](https://img.shields.io/badge/progress-0%25-brightgreen)
![weeks](https://img.shields.io/badge/weeks-8-blue)

**Student:** Salah-Eddin • **School:** 1337 (42 Network)  
**Start:** 2025-11-04 • **Target:** 2026-01-04

---

## Table of contents

- [Summary](#summary)
- [Weekly Quick Progress](#weekly-quick-progress)
- [Week details (expand)](#week-details-expand)
- [Final checklist](#final-checklist--module-requirements)
- [Notes & health check](#notes--health-check)

---

## Summary

- Goal: implement Modules — User Management, OAuth 2.0, 2FA + JWT
- Weekly cadence: 5 focused days, 1 light review, 1 rest day
- Use: Fastify + TypeScript + SQLite (better-sqlite3) + Docker

---

## Weekly Quick Progress

| Week | Dates | Focus | Status |
|---|---:|---|---:|
| 1 | Nov 4–10 | JS core + Node basics | - [ ] |
| 2 | Nov 11–17 | TypeScript + Fastify + DB | - [ ] |
| 3 | Nov 18–24 | Auth (bcrypt + JWT) | - [ ] |
| 4 | Nov 25–Dec 1 | Profiles + Avatars | - [ ] |
| 5 | Dec 2–8 | Friends + Match History | - [ ] |
| 6 | Dec 9–15 | OAuth 2.0 | - [ ] |
| 7 | Dec 16–22 | 2FA (TOTP) | - [ ] |
| 8 | Dec 23–29 | Security + Docker + Docs | - [ ] |

> Tip: On GitHub, toggle the checkbox when a week is complete. Use the repository's Issue tracker for blockers.

---

## Week details (expand)

<details>
<summary><strong>Week 1 — JavaScript Core + Node.js (Nov 4–10)</strong></summary>

- Goal: JS fundamentals, async patterns, first Fastify API

**Daily quick-links:**
- Mon: JS basics — variables, types, operators
- Tue: Functions, arrays, objects, loops
- Wed: Node.js modules, fs, npm
- Thu: Async (callbacks, Promises, async/await)
- Fri: First Fastify API (routes, JSON, tests)
- Sat: Light review — refactor & notes
- Sun: Rest

See `WEEK_1_DETAILED_CHECKLIST.md` for the full lecture/task list.  
Progress: `[]` (check items in the detailed file)

</details>

<details>
<summary><strong>Week 2 — TypeScript + Fastify + DB (Nov 11–17)</strong></summary>

- Goal: TypeScript basics, Fastify plugins, SQLite integration

Key deliverable: Fastify + TypeScript starter with `src/plugins/database.ts` and user CRUD routes.

</details>

<details>
<summary><strong>Week 3 — Authentication (Nov 18–24)</strong></summary>

- Goal: bcrypt passwords, JWT issuance, protected routes

</details>

<details>
<summary><strong>Week 4 — Profiles & Avatars (Nov 25–Dec 1)</strong></summary>

- Goal: Profile CRUD, avatar upload via `@fastify/multipart`, serve static avatars

</details>

<details>
<summary><strong>Week 5 — Friends & Match History (Dec 2–8)</strong></summary>

- Goal: Friends table, requests, accept/reject, matches table and endpoints

</details>

<details>
<summary><strong>Week 6 — OAuth 2.0 (Dec 9–15)</strong></summary>

- Goal: GitHub OAuth using `@fastify/oauth2`, link accounts, issue JWTs

</details>

<details>
<summary><strong>Week 7 — 2FA (Dec 16–22)</strong></summary>

- Goal: TOTP (otplib), QR generation, verify on login

</details>

<details>
<summary><strong>Week 8 — Security, Docker & Docs (Dec 23–29)</strong></summary>

- Goal: Helmet, rate-limiting, Dockerfiles, docker-compose, README/API.md

</details>

---

## Final checklist / Module requirements

- [ ] Secure user registration & login (bcrypt)
- [ ] Unique display names + profile CRUD
- [ ] Avatar upload + default avatar
- [ ] Friends system + online status
- [ ] Match history (1v1, dates, results)
- [ ] OAuth 2.0 remote login (GitHub or other)
- [ ] JWT-based auth + protected endpoints
- [ ] Two-Factor Authentication (TOTP)
- [ ] Dockerized services + docs

---

## Notes & Health check

- Weekly working limit: 5–6 hours/day — keep Saturdays light and Sundays off.  
- Keep a weekly short summary in `WEEK_1_SUMMARY.md` after Week 1.

**Health quick-check:**
- [ ] Keeping to 5–6 hours/day
- [ ] Saturday light day used for consolidation
- [ ] Sunday full rest day

---

_Update this file when a week is complete. For the full daily checklist, open `WEEK_1_DETAILED_CHECKLIST.md`._

**Last updated:** 2025-11-04
# 🎯 ft_transcendence Auth Module - 8-Week Progress Tracker

**Student:** Salah-Eddin  
**School:** 1337 (42 Network)  
**Start Date:** November 4, 2025  
**Target Completion:** January 4, 2026  
**Modules:** User Management, OAuth 2.0, 2FA + JWT  

---

## 📊 Overall Progress

- [ ] Week 1 - JavaScript Core + Node.js Foundations (0/7 days)
- [ ] Week 2 - TypeScript + Fastify + Database Setup (0/7 days)
- [ ] Week 3 - Authentication (Register + Login + JWT) (0/7 days)
- [ ] Week 4 - User Profiles + Avatar Upload (0/7 days)
- [ ] Week 5 - Friends System + Match History (0/7 days)
- [ ] Week 6 - OAuth 2.0 Remote Authentication (0/7 days)
- [ ] Week 7 - Two-Factor Authentication (2FA) (0/7 days)
- [ ] Week 8 - Security + Docker + Documentation (0/7 days)

**Total Progress:** 0% (0/56 work days completed)

---

## 📅 WEEK 1 - JavaScript Core + Node.js Foundations

**Dates:** Nov 4 - Nov 10, 2025  
**Goal:** Master JS syntax + understand Node.js runtime  
**Status:** 🔴 Not Started

### Monday - JavaScript Basics
**Date:** Nov 4, 2025  
**Status:** ⬜ Not Started | ⏳ In Progress | ✅ Completed  
**Focus:** Variables, data types, operators, conditionals

#### Tasks:
- [ ] Watch Jonas JS Course Section 2 (Videos 6-22)
  - [ ] Video 6: Values and Variables
  - [ ] Video 7: Data Types
  - [ ] Video 8: let, const, var
  - [ ] Video 9: Basic Operators
  - [ ] Video 10: Operator Precedence
  - [ ] Video 11: Strings and Template Literals
  - [ ] Videos 12-16: If/Else, Type Conversion
  - [ ] Videos 17-22: Truthy/Falsy, Equality, Boolean Logic
- [ ] Code-along with video exercises
- [ ] Build practice project: Temperature Converter
- [ ] Build practice project: BMI Calculator
- [ ] Complete 5-6 coding challenges from section

**Time Spent:** ___ hours  
**Notes:**
```
(Add your observations, struggles, breakthroughs here)
```

---

### Tuesday - Functions, Arrays, Objects
**Date:** Nov 5, 2025  
**Status:** ⬜ Not Started | ⏳ In Progress | ✅ Completed  
**Focus:** Functions, array methods, object manipulation

#### Tasks:
- [ ] Watch Jonas JS Course Section 3 (Videos 23-45)
  - [ ] Videos 23-27: Functions (declarations, expressions, arrow)
  - [ ] Videos 28-32: Arrays (push, pop, shift, unshift, indexOf, includes)
  - [ ] Videos 33-37: Objects (creation, dot/bracket notation, methods)
  - [ ] Videos 38-45: Loops (for, while, for...of, continue, break)
- [ ] Code-along with all examples
- [ ] Build "Friend List Manager" mini-project
  - [ ] Create array of friend objects
  - [ ] Add friend (push)
  - [ ] Remove friend (splice)
  - [ ] Find friend by name (find)
  - [ ] List all friends (forEach/map)
- [ ] Complete section coding challenges

**Time Spent:** ___ hours  
**Notes:**
```
(Add your observations, struggles, breakthroughs here)
```

---

### Wednesday - Node.js Introduction
**Date:** Nov 6, 2025  
**Status:** ⬜ Not Started | ⏳ In Progress | ✅ Completed  
**Focus:** Understand Node.js runtime, modules, npm

#### Tasks:
- [ ] Watch Jonas Node Course Section 1: Welcome & Setup
- [ ] Watch Jonas Node Course Section 2: Introduction to Node.js & NPM
  - [ ] What is Node.js and Why Use It
  - [ ] Running JavaScript Outside the Browser
  - [ ] Using Modules: require and module.exports
  - [ ] Introduction to NPM
  - [ ] Types of Packages and Installs
  - [ ] Package Versioning and Updating
  - [ ] Setting Up Prettier in VS Code
- [ ] Read Fastify Docs: [Introduction](https://fastify.dev/docs/latest/)
- [ ] Practice with Node.js:
  - [ ] Create `node-basics/` folder
  - [ ] Run `npm init -y`
  - [ ] Create `index.js` with console.log
  - [ ] Experiment with `fs.readFileSync()`
  - [ ] Experiment with `fs.writeFileSync()`
  - [ ] Create your own module with `module.exports`
  - [ ] Import and use your module with `require()`

**Time Spent:** ___ hours  
**Notes:**
```
(Add your observations, struggles, breakthroughs here)
```

---

### Thursday - Asynchronous JavaScript
**Date:** Nov 7, 2025  
**Status:** ⬜ Not Started | ⏳ In Progress | ✅ Completed  
**Focus:** Callbacks → Promises → Async/Await

#### Tasks:
- [ ] Watch Jonas Node Course Section 3: Asynchronous JavaScript
  - [ ] The Problem with Synchronous Code
  - [ ] Asynchronous JavaScript: Callbacks
  - [ ] From Callback Hell to Promises
  - [ ] Building Promises
  - [ ] Consuming Promises with .then()
  - [ ] Handling Errors with .catch()
  - [ ] Running Promises in Parallel (Promise.all)
  - [ ] Async/Await
  - [ ] Error Handling with try/catch
- [ ] Read MDN: [Promises Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [ ] Practice exercises:
  - [ ] Rewrite Wednesday's file reading with callbacks
  - [ ] Convert callbacks to Promises
  - [ ] Convert Promises to async/await
  - [ ] Create a function that reads 3 files sequentially
  - [ ] Create a function that reads 3 files in parallel (Promise.all)
  - [ ] Add proper error handling to all async code

**Time Spent:** ___ hours  
**Notes:**
```
(Add your observations, struggles, breakthroughs here)
```

---

### Friday - First API with Fastify
**Date:** Nov 8, 2025  
**Status:** ⬜ Not Started | ⏳ In Progress | ✅ Completed  
**Focus:** Build a simple REST API

#### Tasks:
- [ ] Read Fastify Docs:
  - [ ] [Getting Started](https://fastify.dev/docs/latest/Guides/Getting-Started/)
  - [ ] [Routes](https://fastify.dev/docs/latest/Reference/Routes/)
  - [ ] [Request](https://fastify.dev/docs/latest/Reference/Request/)
  - [ ] [Reply](https://fastify.dev/docs/latest/Reference/Reply/)
- [ ] Setup project:
  - [ ] Create `my-first-api/` folder
  - [ ] Run `npm init -y`
  - [ ] Install Fastify: `npm install fastify`
  - [ ] Create `server.js`
- [ ] Implement routes:
  - [ ] GET `/` - Return welcome message
  - [ ] GET `/api/hello` - Return JSON object
  - [ ] GET `/api/user/:id` - Return user with dynamic ID
  - [ ] POST `/api/users` - Accept JSON body and echo it back
  - [ ] GET `/api/users` - Return array of mock users
- [ ] Testing:
  - [ ] Test with browser (GET routes)
  - [ ] Test with curl (all routes)
  - [ ] Test with Thunder Client VS Code extension
  - [ ] Test error handling (invalid routes)
- [ ] Add logging with Fastify's built-in logger

**Time Spent:** ___ hours  
**Notes:**
```
(Add your observations, struggles, breakthroughs here)
```

**Code Checkpoint:**
```javascript
// Paste your final server.js here for reference
```

---

### Saturday (Light Review Day)
**Date:** Nov 9, 2025  
**Status:** ⬜ Not Started | ⏳ In Progress | ✅ Completed  
**Focus:** Consolidate learning, fix bugs, review notes

#### Tasks:
- [ ] Review Week 1 Notes
  - [ ] What were the 3 hardest concepts?
  - [ ] What needs more practice?
- [ ] Redo 2-3 async exercises from Thursday
- [ ] Read Fastify Docs: [Plugins Guide](https://fastify.dev/docs/latest/Reference/Plugins/)
- [ ] Improve Friday's API:
  - [ ] Add better error handling
  - [ ] Add input validation (check if ID is a number)
  - [ ] Organize routes into separate functions
- [ ] Write "Week 1 Summary":
  - [ ] 3 key learnings
  - [ ] 3 challenges faced
  - [ ] Questions for next week
- [ ] Prepare questions for study group or forum

**Time Spent:** ___ hours  
**Week 1 Summary:**
```
Key Learnings:
1. 
2. 
3. 

Challenges:
1. 
2. 
3. 

Questions for Next Week:
1. 
2. 
3. 
```

---

### Sunday - REST DAY 🌴
**Date:** Nov 10, 2025  
**Status:** ✅ Mandatory Rest  

**Rules:**
- ❌ No coding
- ❌ No watching tutorials
- ✅ Rest, hobbies, friends, sports
- ✅ Mental recovery

**Reflection (optional):**
```
How do you feel about Week 1?
Are you on track with the 5-6 hours/day limit?
```

---

## 📈 Week 1 Metrics

**Total Hours Planned:** 25-30 hours (5-6 hours × 5 days + 2-3 hours Saturday)  
**Total Hours Actual:** ___ hours  

**Completion Rate:**
- Monday: ⬜ 0% | 🟨 50% | ✅ 100%
- Tuesday: ⬜ 0% | 🟨 50% | ✅ 100%
- Wednesday: ⬜ 0% | 🟨 50% | ✅ 100%
- Thursday: ⬜ 0% | 🟨 50% | ✅ 100%
- Friday: ⬜ 0% | 🟨 50% | ✅ 100%
- Saturday: ⬜ 0% | 🟨 50% | ✅ 100%

**Overall Week 1:** ⬜ Not Started | 🟨 In Progress | ✅ Completed

**Energy Level:** 😴 Low | 😐 Medium | 🔥 High  
**Confidence Level:** 😰 Low | 😐 Medium | 😎 High

**Week 1 Achievements:**
- [ ] Understand JavaScript fundamentals
- [ ] Comfortable with async/await
- [ ] Built first Fastify API
- [ ] Tested API with curl/Thunder Client
- [ ] Ready for TypeScript and databases

---

## 📅 WEEK 2 - TypeScript + Fastify + Database Setup

**Dates:** Nov 11 - Nov 17, 2025  
**Goal:** Convert to TypeScript + Learn Fastify + Setup SQLite  
**Status:** 🔴 Not Started

### Monday - TypeScript Basics
**Date:** Nov 11, 2025  
**Status:** ⬜ Not Started | ⏳ In Progress | ✅ Completed

#### Tasks:
- [ ] Watch: [TypeScript Crash Course - Traversy Media](https://www.youtube.com/watch?v=BCg4U1FzODs) (1 hour)
- [ ] Read: [TypeScript Handbook - Basics](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
- [ ] Install TypeScript: `npm install -D typescript @types/node ts-node`
- [ ] Run: `npx tsc --init`
- [ ] Learn concepts:
  - [ ] Basic types (string, number, boolean, array)
  - [ ] Interfaces vs Types
  - [ ] Function typing
  - [ ] Optional properties
  - [ ] Union types
  - [ ] Generics basics
- [ ] Practice:
  - [ ] Convert 3 JS functions to TypeScript
  - [ ] Create interface for User object
  - [ ] Type a function that returns a Promise

**Time Spent:** ___ hours  
**Notes:**
```

```

---

### Tuesday - Fastify Plugins & Project Structure
**Date:** Nov 12, 2025  
**Status:** ⬜ Not Started | ⏳ In Progress | ✅ Completed

#### Tasks:
- [ ] Read Fastify Docs: [Plugins](https://fastify.dev/docs/latest/Reference/Plugins/)
- [ ] Read Fastify Docs: [Server Methods](https://fastify.dev/docs/latest/Reference/Server/)
- [ ] Create project structure:
  ```
  src/
    ├── app.ts          # Fastify instance + plugin loading
    ├── server.ts       # Start server
    ├── routes/
    │   └── users.ts    # User routes
    └── plugins/
        └── db.ts       # Database plugin (tomorrow)
  ```
- [ ] Refactor Friday's code into this structure
- [ ] Install: `npm install fastify-plugin`
- [ ] Create user routes as a plugin
- [ ] Test that everything still works

**Time Spent:** ___ hours  
**Notes:**
```

```

---

### Wednesday - SQLite Setup + Schema
**Date:** Nov 13, 2025  
**Status:** ⬜ Not Started | ⏳ In Progress | ✅ Completed

#### Tasks:
- [ ] Watch Jonas Node Course Section 8 (MongoDB concepts - understand DB theory)
- [ ] Read: [better-sqlite3 Documentation](https://github.com/WiseLibs/better-sqlite3/blob/master/docs/api.md)
- [ ] Install: `npm install better-sqlite3 @types/better-sqlite3`
- [ ] Create `src/db/schema.sql`:
  - [ ] Design users table (id, username, email, password, display_name, avatar, created_at)
- [ ] Create database file: `data/app.db`
- [ ] Write raw SQL queries:
  - [ ] INSERT new user
  - [ ] SELECT user by ID
  - [ ] SELECT user by email
  - [ ] UPDATE user
  - [ ] DELETE user
- [ ] Test queries in Node.js script

**Time Spent:** ___ hours  
**Notes:**
```

```

---

### Thursday - DB + Fastify Integration
**Date:** Nov 14, 2025  
**Status:** ⬜ Not Started | ⏳ In Progress | ✅ Completed

#### Tasks:
- [ ] Create `src/plugins/database.ts`
- [ ] Initialize SQLite in plugin
- [ ] Decorate Fastify instance with db
- [ ] Add TypeScript types for db
- [ ] Connect routes to database:
  - [ ] POST `/api/users` - Insert into DB
  - [ ] GET `/api/users/:id` - Fetch from DB
  - [ ] PUT `/api/users/:id` - Update in DB
  - [ ] DELETE `/api/users/:id` - Delete from DB
- [ ] Test all CRUD operations with Thunder Client
- [ ] Add error handling for DB errors

**Time Spent:** ___ hours  
**Notes:**
```

```

---

### Friday - Validation + Cleanup
**Date:** Nov 15, 2025  
**Status:** ⬜ Not Started | ⏳ In Progress | ✅ Completed

#### Tasks:
- [ ] Install: `npm install @fastify/type-provider-typebox @sinclair/typebox`
- [ ] Read: [TypeBox Documentation](https://github.com/sinclairzx81/typebox)
- [ ] Add schema validation:
  - [ ] Validate POST body (username, email required)
  - [ ] Validate email format
  - [ ] Validate ID is a number
- [ ] Test with invalid data
- [ ] Organize project structure:
  - [ ] Move types to `src/types/`
  - [ ] Move schemas to `src/schemas/`
  - [ ] Add README.md
- [ ] Test all endpoints end-to-end

**Time Spent:** ___ hours  
**Notes:**
```

```

---

### Saturday (Light Review)
**Date:** Nov 16, 2025  
**Status:** ⬜ Not Started | ⏳ In Progress | ✅ Completed

#### Tasks:
- [ ] Review all Week 2 code
- [ ] Refactor for consistency
- [ ] Add comments to complex parts
- [ ] Test edge cases:
  - [ ] Duplicate username
  - [ ] Missing required fields
  - [ ] Invalid data types
- [ ] Document API in README:
  - [ ] List all endpoints
  - [ ] Show example requests
  - [ ] Show example responses
- [ ] Commit to git (if using version control)

**Time Spent:** ___ hours  
**Week 2 Summary:**
```
Key Learnings:
1. 
2. 
3. 

Challenges:
1. 
2. 
3. 
```

---

### Sunday - REST DAY 🌴
**Date:** Nov 17, 2025  
**Status:** ✅ Mandatory Rest

---

## 📈 Week 2 Metrics

**Total Hours Actual:** ___ hours  
**Overall Week 2:** ⬜ Not Started | 🟨 In Progress | ✅ Completed  
**Energy Level:** 😴 Low | 😐 Medium | 🔥 High  
**Confidence Level:** 😰 Low | 😐 Medium | 😎 High

---

## 📅 WEEK 3 - Authentication (Register + Login + JWT)

**Dates:** Nov 18 - Nov 24, 2025  
**Status:** 🔴 Not Started

### Daily Tasks Template

#### Monday - Password Hashing (Nov 18)
- [ ] Watch Jonas Node Course Section 10 (Authentication - bcrypt part)
- [ ] Install bcrypt: `npm install bcrypt @types/bcrypt`
- [ ] Implement `/api/auth/register` route
- [ ] Hash passwords before saving to DB
- [ ] Test registration flow

#### Tuesday - JWT Theory (Nov 19)
- [ ] Watch Jonas Node Course Section 10 (JWT part)
- [ ] Read: [JWT.io Introduction](https://jwt.io/introduction)
- [ ] Understand token structure
- [ ] Learn when to use JWT vs sessions

#### Wednesday - JWT Implementation (Nov 20)
- [ ] Install: `npm install @fastify/jwt`
- [ ] Configure @fastify/jwt plugin
- [ ] Create `/api/auth/login` route
- [ ] Compare password with bcrypt
- [ ] Issue JWT on successful login
- [ ] Test token generation

#### Thursday - Protected Routes (Nov 21)
- [ ] Create authentication hook/decorator
- [ ] Protect `/api/users/profile` route
- [ ] Test without token (should fail)
- [ ] Test with token (should succeed)
- [ ] Handle expired tokens

#### Friday - Validation & Error Handling (Nov 22)
- [ ] Add schema validation for register/login
- [ ] Validate email format
- [ ] Validate password strength (min 8 chars)
- [ ] Return proper HTTP status codes
- [ ] Test all error scenarios

#### Saturday - Review (Nov 23)
- [ ] Install: `npm install @fastify/rate-limit`
- [ ] Add rate limiting to auth routes
- [ ] Test complete auth flow
- [ ] Document auth endpoints
- [ ] Security checklist review

#### Sunday - REST (Nov 24)
- ✅ Mandatory rest day

**Week 3 Status:** ⬜ Not Started | 🟨 In Progress | ✅ Completed

---

## 📅 WEEK 4 - User Profiles + Avatar Upload

**Dates:** Nov 25 - Dec 1, 2025  
**Status:** 🔴 Not Started

### Tasks Overview
- [ ] Monday: Profile GET & PUT endpoints
- [ ] Tuesday: File upload theory
- [ ] Wednesday: Avatar upload implementation
- [ ] Thursday: Avatar management (delete, serve static)
- [ ] Friday: User stats (wins/losses)
- [ ] Saturday: Testing & polish
- [ ] Sunday: REST

**Week 4 Status:** ⬜ Not Started | 🟨 In Progress | ✅ Completed

---

## 📅 WEEK 5 - Friends System + Match History

**Dates:** Dec 2 - Dec 8, 2025  
**Status:** 🔴 Not Started

### Tasks Overview
- [ ] Monday: Friends DB design
- [ ] Tuesday: Friend requests
- [ ] Wednesday: Accept/reject friends
- [ ] Thursday: Friends list + online status
- [ ] Friday: Match history DB
- [ ] Saturday: Match history API
- [ ] Sunday: REST

**Week 5 Status:** ⬜ Not Started | 🟨 In Progress | ✅ Completed

---

## 📅 WEEK 6 - OAuth 2.0 Remote Authentication

**Dates:** Dec 9 - Dec 15, 2025  
**Status:** 🔴 Not Started

### Tasks Overview
- [ ] Monday: OAuth 2.0 theory
- [ ] Tuesday: GitHub OAuth setup
- [ ] Wednesday: OAuth initiation route
- [ ] Thursday: OAuth callback handler
- [ ] Friday: Link OAuth to DB + issue JWT
- [ ] Saturday: Error handling & testing
- [ ] Sunday: REST

**Week 6 Status:** ⬜ Not Started | 🟨 In Progress | ✅ Completed

---

## 📅 WEEK 7 - Two-Factor Authentication (2FA)

**Dates:** Dec 16 - Dec 22, 2025  
**Status:** 🔴 Not Started

### Tasks Overview
- [ ] Monday: 2FA theory (TOTP)
- [ ] Tuesday: 2FA setup endpoint (QR code)
- [ ] Wednesday: 2FA verification
- [ ] Thursday: Update login flow
- [ ] Friday: 2FA disable + backup codes
- [ ] Saturday: Testing & edge cases
- [ ] Sunday: REST

**Week 7 Status:** ⬜ Not Started | 🟨 In Progress | ✅ Completed

---

## 📅 WEEK 8 - Security + Docker + Documentation

**Dates:** Dec 23 - Dec 29, 2025  
**Status:** 🔴 Not Started

### Tasks Overview
- [ ] Monday: Security hardening (Helmet, sanitization)
- [ ] Tuesday: HTTPS + environment variables
- [ ] Wednesday: Dockerfile creation
- [ ] Thursday: Docker Compose setup
- [ ] Friday: API documentation
- [ ] Saturday: Final testing & polish
- [ ] Sunday: CELEBRATE! 🎉

**Week 8 Status:** ⬜ Not Started | 🟨 In Progress | ✅ Completed

---

## 🎯 Final Checklist - Module Requirements

### Module 1: User Management ✅
- [ ] Secure user registration
- [ ] Secure user login
- [ ] Unique display names for tournaments
- [ ] Update user information
- [ ] Avatar upload (with default)
- [ ] Add friends functionality
- [ ] View friends' online status
- [ ] User profile stats (wins/losses)
- [ ] Match history (1v1 games, dates, details)
- [ ] Match history accessible to logged-in users

### Module 2: Remote Authentication (OAuth 2.0) ✅
- [ ] OAuth 2.0 implementation
- [ ] GitHub OAuth integration (or other provider)
- [ ] Secure sign-in flow
- [ ] OAuth credentials properly obtained
- [ ] User-friendly login/authorization flows
- [ ] Secure token exchange
- [ ] Best practices & security standards followed

### Module 3: 2FA + JWT ✅
- [ ] Two-Factor Authentication (2FA) implemented
- [ ] Secondary verification method (TOTP)
- [ ] JWT for authentication
- [ ] JWT for authorization
- [ ] User-friendly 2FA setup process
- [ ] Secure JWT issuance
- [ ] Secure JWT validation
- [ ] Protection against unauthorized access

---

## 📊 Time Tracking Summary

| Week | Planned Hours | Actual Hours | Status |
|------|---------------|--------------|--------|
| 1    | 25-30         | ___          | ⬜     |
| 2    | 25-30         | ___          | ⬜     |
| 3    | 25-30         | ___          | ⬜     |
| 4    | 25-30         | ___          | ⬜     |
| 5    | 25-30         | ___          | ⬜     |
| 6    | 25-30         | ___          | ⬜     |
| 7    | 25-30         | ___          | ⬜     |
| 8    | 25-30         | ___          | ⬜     |
| **Total** | **200-240** | **___** | **___%** |

---

## 🚦 Health Check

**Are you maintaining work-life balance?**
- [ ] Sticking to 5-6 hours/day max
- [ ] Taking Saturday as light review day
- [ ] Fully resting on Sundays
- [ ] Getting enough sleep
- [ ] Exercising regularly
- [ ] Socializing with friends

**Energy Level Trend:**
- Week 1: ___
- Week 2: ___
- Week 3: ___
- Week 4: ___
- Week 5: ___
- Week 6: ___
- Week 7: ___
- Week 8: ___

---

## 📝 Notes & Reflections

### Breakthroughs
```
(Record your "aha!" moments here)
```

### Struggles
```
(What's been difficult? What needs more practice?)
```

### Resources That Helped
```
(Articles, videos, docs that were particularly useful)
```

### Questions for Team/Mentor
```
(Track questions to ask during team meetings)
```

---

## 🎯 Project Completion Criteria

- [ ] All 3 modules fully implemented
- [ ] Code is clean and well-organized
- [ ] API is fully documented
- [ ] All endpoints tested and working
- [ ] Security best practices applied
- [ ] Dockerized and ready for deployment
- [ ] Can explain every design decision in defense
- [ ] Ready for team integration

---

**Last Updated:** November 4, 2025  
**Current Week:** Week 1  
**Days Until Deadline:** 56 work days

---

## 💪 Motivational Reminders

1. **Progress over perfection** - It's okay if Week 1 takes a bit longer
2. **Rest is productive** - Your brain consolidates learning during rest
3. **Ask for help** - 42 community is your resource
4. **You've done harder** - You survived minishell, philosophers, and C++ modules
5. **Web dev is different, not harder** - Just a new domain to master

**You got this! 🚀**
