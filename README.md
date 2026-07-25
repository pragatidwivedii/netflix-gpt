# NetflixGPT 🎬

A full-stack Netflix clone powered by AI-driven movie recommendations. Built from scratch as a portfolio project to demonstrate authentication flows, third-party API integration, state management, and responsive UI design.

**[Live Demo](https://netflixgpt-28127.web.app/)** · **[Report a Bug](https://github.com/pragatidwivedii/netflix-gpt/issues)**

---

## Overview

NetflixGPT replicates the core Netflix browsing experience — authentication, hero trailers, and horizontally scrolling movie rows — and layers an AI search feature on top. Users can describe what they're in the mood to watch in plain language (e.g. *"something like Inception but slower paced"*), and the app uses Google's Gemini API to generate movie suggestions, which are then matched against real movie data from TMDB.

---

## Features

- **Authentication**
  - Email/password sign up and sign in via Firebase Auth
  - Field-level form validation with specific, actionable error messages
  - Friendly, human-readable Firebase error handling (e.g. "Incorrect email or password" instead of raw error codes)
  - Auth state persistence across page refreshes using `onAuthStateChanged`
  - Sign-out confirmation popup

- **Browse Page**
  - Full-screen hero section with an autoplaying, looping YouTube trailer background
  - Dynamic title, description, and Play / More Info actions for the featured title
  - Multiple horizontally scrollable movie rows: Now Playing, Popular, Top Rated, Upcoming
  - Profile dropdown with sign-out option

- **GPT Search**
  - Natural language movie search powered by the Gemini API
  - AI-generated suggestions are cross-referenced with TMDB to fetch real posters, titles, and overviews
  - Auto-expanding textarea input for longer, descriptive prompts

- **Performance**
  - Caching guard to prevent redundant API calls when movie data is already in the Redux store
  - Parallelized API requests using `Promise.all` for faster load times

- **Responsive Design**
  - Fully responsive layout across mobile and desktop breakpoints

---

## Tech Stack

| Category | Technology |
|---|---|
| Frontend | React, Vite |
| Styling | Tailwind CSS v4 |
| State Management | Redux Toolkit |
| Authentication | Firebase Authentication |
| Movie Data | TMDB API |
| AI Recommendations | Google Gemini API |
| Hosting | Firebase Hosting |

---

## Project Structure

```
netflix-gpt/
├── src/
│   ├── components/
│   │   ├── Body.jsx
│   │   ├── Browse.jsx
│   │   ├── Header.jsx
│   │   ├── Login.jsx
│   │   ├── Maincontainer.jsx
│   │   ├── VideoBackground.jsx
│   │   ├── VideoTitle.jsx
│   │   ├── SecondaryContainer.jsx
│   │   ├── MovieList.jsx
│   │   ├── MovieCard.jsx
│   │   ├── GptPage.jsx
│   │   ├── GptSearch.jsx
│   │   └── GptResults.jsx
│   ├── hooks/
│   │   └── useMovieData.jsx
│   ├── utils/
│   │   ├── appStore.js
│   │   ├── userSlice.js
│   │   ├── movieSlice.js
│   │   ├── GptSlice.js
│   │   ├── firebase.js
│   │   ├── gemini.js
│   │   ├── formValidation.js
│   │   └── constants.js
│   ├── App.jsx
│   └── main.jsx
├── .env
├── firebase.json
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- A Firebase project with Email/Password authentication enabled
- A TMDB API Read Access Token
- A Gemini API key

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/pragatidwivedii/netflix-gpt.git
   cd netflix-gpt
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   VITE_FIREBASE_API_KEY=
   VITE_FIREBASE_AUTH_DOMAIN=
   VITE_FIREBASE_PROJECT_ID=
   VITE_FIREBASE_STORAGE_BUCKET=
   VITE_FIREBASE_MESSAGING_SENDER_ID=
   VITE_FIREBASE_APP_ID=
   VITE_TMDB_API_KEY=
   VITE_GEMINI_API_KEY=
   ```

4. Run the development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

---

## Key Implementation Details

- **Redux slices** are split by domain (`userSlice`, `movieSlice`, `GptSlice`) rather than one large store, keeping each slice focused and Redux DevTools logs readable.
- **Custom hook (`useMovieData`)** encapsulates the movie-fetching logic and includes a caching guard so repeated navigation doesn't trigger redundant TMDB requests.
- **API keys are never hardcoded** — all sensitive config is read from environment variables via `import.meta.env`, and `.env` is excluded from version control.
- **GPT search flow**: user prompt → Gemini API generates a comma-separated list of movie titles → each title is looked up individually against TMDB's search endpoint → results are dispatched to Redux and rendered as movie cards.

---

## Roadmap / Future Improvements

- [ ] Google Sign-In as an additional auth option
- [ ] User watchlist / "My List" functionality using Firestore
- [ ] Genre-based filtering and search
- [ ] Skeleton loading states for movie rows

---

## Acknowledgements

- Built while learning from [Namaste React](https://namastedev.com/) by Akshay Saini
- Movie data provided by [The Movie Database (TMDB)](https://www.themoviedb.org/)
- This product uses the TMDB API but is not endorsed or certified by TMDB

---

## Author

**Pragati Dwivedi**
[GitHub](https://github.com/pragatidwivedii)