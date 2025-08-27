# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


<!-- Readme File Write By AI Agent  *Copilot* -->
# Prayer Times React App

A modern React application that displays Islamic prayer times for selected cities, with a countdown to the next prayer. The app features a responsive UI, Arabic localization, and leverages several popular libraries and APIs.

---

## Features

- **Prayer Times Display:** Shows daily prayer times (Fajr, Dhuhr, Asr, Maghrib, Isha) for selected cities.
- **Countdown Timer:** Live countdown to the next prayer.
- **City Selection:** Dropdown to switch between supported cities.
- **Responsive UI:** Built with Material UI for a clean, modern look.
- **Arabic Localization:** Dates and times are shown in Arabic.
- **Prayer Cards:** Each prayer time is displayed in a card with an Islamic-themed image.

---

## Technologies & Libraries Used

### 1. **React**
- Main JavaScript library for building the user interface and managing state.

### 2. **Vite**
- Fast development build tool for React projects.

### 3. **Material UI (MUI)**
- Provides ready-to-use, customizable UI components such as `Card`, `Grid`, `Stack`, `Divider`, `FormControl`, `Select`, and `Typography`.
- Used for layout, styling, and responsive design.

### 4. **Axios**
- Handles HTTP requests to fetch prayer times from the API.

### 5. **Moment.js**
- Used for date and time formatting, localization (Arabic), and countdown calculations.

### 6. **Aladhan Prayer Times API**
- External API used to fetch accurate prayer times for the selected city.

---

## Project Structure

```
vite-project/
├── public/
├── src/
│   ├── assets/
│   │   └── Islamic Quotes.jpg
│   ├── component/
│   │   ├── MainContent.jsx      # Main logic and UI for prayer times and city selection
│   │   └── PrayerCard.jsx       # Card component for displaying each prayer time
│   ├── App.jsx                  # Main app entry point
│   ├── main.jsx                 # React root rendering
├── package.json
└── vite.config.js
```

---

## Component Overview

### `MainContent.jsx`
- Handles fetching prayer times from the API based on the selected city.
- Manages state for current time, selected city, prayer times, and countdown.
- Renders the top row (date, city, countdown), prayer cards, and city selection dropdown.

### `PrayerCard.jsx`
- Receives `name` and `time` as props.
- Displays each prayer in a Material UI card with an image and time.

---

## How to Run

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd vite-project
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173).

### Build for Production

```sh
npm run build
```

---

## Credits

- **Prayer times:** [Aladhan API](https://aladhan.com/prayer-times-api)
- **UI Components:** [Material UI](https://mui.com/)
- **Image:** `/src/assets/Islamic Quotes.jpg`

---

## License

This project is for educational purposes.