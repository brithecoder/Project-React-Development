# Where In The World Project React + TypeScript 

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. To run this application you want to CD into countries-project
and run npm run dev in the terminal this will provide a local host port which you can paste into a browser and see the application. I used react router and a few custom hooks.My favorite part of this project was implementing the Country Context custom hook because it made my code feel alot cleaner.

## Overview

This project displays knowledge of HTML,CSS,and TypeScript/JavaScript and the React Library/framework I am also utilizing the REST Countries API.

## My Process 
 
My first thought was to get a few components displayed on the page So I started with a navbar and then a home page after that I worked on my router functionality and then I added a few custom hooks to handle toggling the theme and saving to local storage. Afterwards I worked on the country cards that would display on the home page and then I worked on calling the countries api with my usefetch custom hook. Everything was fine until I got to the details page for the countries and realized that I would have to repeat a bunch a code I had already written before. So to make my code more effecient and resuable I decided to build a Country Context Custom hook so I wouln't have to repeat code in my main components. After this I added css from the style guide. 

## MVP Goals 

Users should be able to:

See all countries from the API on the homepage
Search for a country using an input field
Filter countries by region
Click on a country to see more detailed information on a separate page
Click through to the border countries on the detail page
Toggle the color scheme between light and dark mode

##  Links 
