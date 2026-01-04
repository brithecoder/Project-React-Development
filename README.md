
# Where In The World? (REST Countries API)

A responsive React application built with **TypeScript** and **Vite** that allows users to explore data from the REST Countries API. This project was built to practice state management, custom hooks, and complex routing in a React environment.

[**🚀 Click here to view the Live Site**](https://brithecoder.github.io/Project-React-Development/)

---

## 🚀 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/brithecoder/Project-React-Development.git
   ```
2. **Install dependencies:**
  ```bash
   npm install
   ```
3. **Start the development server:**
    ```bash
     npm run dev
     ```

**View in Browser:** The terminal will provide a local host port (usually http://localhost:5173) which you can paste into your browser.

## 🛠️ Built With
React (Functional Components)

TypeScript for type safety

Vite for fast bundling & HMR

React Router (HashRouter) for GitHub Pages compatibility

Custom Hooks & Context API for state management

REST Countries API

## 💡 My Process & Reflections
**Overview**
This project displays my knowledge of HTML, CSS, and TypeScript/JavaScript using the React library. My goal was to create a highly efficient application that minimizes code repetition.

**The Development Journey**
My first thought was to get the core components displayed, starting with the Navbar and the Home page. After setting up the basic UI, I worked on the routing functionality and added custom hooks to handle toggling the theme and saving preferences to localStorage.

## Key Technical Decisions
**Country Context Hook:** My favorite part of this project was implementing the CountryProvider. Originally, I realized I would have to repeat a lot of logic when I reached the Details page. By building a Context hook, I made the data accessible everywhere, making the code cleaner and more reusable.

**The Routing Challenge:** A major challenge I faced was the router returning a 404 error when deployed. I solved this by switching to HashRouter, ensuring the application handles client-side routes correctly on GitHub Pages.

## ✅ MVP Goals (Features)
[x] Explore: See all countries from the API on the homepage.

[x] Search: Search for a country using an input field.

[x] Filter: Filter countries by region (Africa, Americas, Asia, etc.).

[x] Detailed View: Click on a country to see detailed information on a separate page.

[x] Border Navigation: Click through to the border countries directly from the detail page.

[x] Dark Mode: Toggle the color scheme between light and dark mode.

![ScreenShot of application](./Screenshot.png)
