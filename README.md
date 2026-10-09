# devlinks — Link-sharing App

A responsive link-sharing app built with React and TypeScript, based on the [Frontend Mentor link-sharing app challenge](https://www.frontendmentor.io/challenges/linksharing-app-Fbt7yweGsT). Users create an account, add links to their developer profiles, fill in their personal details, and get a shareable profile page.

## Features

- **Authentication.** Users can register and log in. Each form validates its fields and shows an error message next to the field that failed.
- **Protected routes.** The editor pages are only available to a logged-in user. Anyone else is sent back to the login page.
- **Link management**
  - Add, edit and remove links.
  - Choose from 14 platforms in a custom dropdown.
  - Each URL is checked against the selected platform. For example, a GitHub link must point to `github.com`.
- **Profile details.** Users can upload a profile picture and set their first name, last name and a public email.
- **Live phone preview.** A phone mockup shows changes as the user types.
- **Preview page.**
  - Only opens once the profile and at least one link are saved.
  - Each link opens the user's profile on that platform.
  - "Share Link" copies the page URL to the clipboard.
- **Persistence.** Accounts, the logged-in session and profile pictures (stored as data URLs) are saved in `localStorage`, so they survive a page refresh.
- **Responsive design.** Layouts for mobile (375px), tablet (768px) and desktop (1440px), built mobile-first.

## Tech Stack

| Area        | Tools                                                                          |
| ----------- | ------------------------------------------------------------------------------ |
| Framework   | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build tool  | [Vite](https://vite.dev/)                                                      |
| Styling     | [Tailwind CSS v4](https://tailwindcss.com/)                                    |
| Routing     | [React Router](https://reactrouter.com/)                                       |
| Forms       | [React Hook Form](https://react-hook-form.com/) (incl. `useFieldArray`)        |
| Validation  | [Yup](https://github.com/jquense/yup)                                          |
| State       | React Context + `localStorage`                                                 |
| Code style  | ESLint                                                                         |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- npm

### Installation

```bash
git clone https://github.com/DemetreBerdzenadze7/link-sharing-app.git
cd link-sharing-app
npm install
npm run dev
```

The app runs at [http://localhost:5173](http://localhost:5173).

### Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the development server             |
| `npm run build`   | Type-check and build for production      |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Run ESLint                               |

## Project Structure

```
src/
├── components/     # Reusable UI components (forms, link card, phone preview, toast…)
├── constants/      # Platform list and regular expressions
├── context/        # Account context: accounts, session, links and profile data
├── layout/         # Shared layout for the editor pages (header + route guard)
├── pages/          # Route pages: Login, CreateAccount, Home, ProfileDetails, Preview
├── schemas/        # Yup validation schemas (auth, links, profile)
├── types.d.ts      # Global TypeScript types
└── main.tsx        # App entry point and router
```

## How It Works

1. **Register** with an email and password.
2. **Log in.** The session is stored in `localStorage`, so it survives a page refresh.
3. On the **Links** page, add your links, choose a platform for each, and click **Save**.
4. On the **Profile Details** page, upload a picture, enter your name, and click **Save**.
5. Once both are saved, the **Preview** page shows your profile card. Use **Share Link** to copy its URL.

## Limitations

This is a frontend-only project, and all data lives in the browser's `localStorage`:

- Passwords are stored in plain text, so the authentication is for demonstration only.
- A shared preview link only works in the browser where the account was created.
- Large profile pictures can hit the `localStorage` size limit of about 5MB. Use images below 1024×1024px, as the design requires.

A real backend with hashed passwords and a database would remove these limitations.

## Acknowledgements

- Design and challenge by [Frontend Mentor](https://www.frontendmentor.io/).

## Author

**Demetre Berdzenadze**

- GitHub: [@DemetreBerdzenadze7](https://github.com/DemetreBerdzenadze7)
