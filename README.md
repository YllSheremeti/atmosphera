# atmosphera
atmósphaîra - from Ancient Greek ἀτμός (atmós) 'vapour, steam' and σφαῖρα (sphaîra) 'sphere'

## Key Features
- **Responsive Design**: The website utilizes a mobile-first approach with a combination of CSS Grid and Flexbox for a fully responsive layout, it adapts seamlessly to different screen sizes, ensuring an optimal experience on both desktop and mobile.
- **Dynamic Content Loading**: JavaScript is used to dynamically load weather data from the OpenWeather API, enhancing user experience without the need for page reloads.
- **Search Functionality**: Implemented a custom search feature to allow users to search weather by city or use geolocation for current weather updates.
- **5-Day Forecast**: Provides a detailed 5-day weather forecast, allowing users to plan ahead.
- **Hourly Forecast & Highlights**: Additional sections display hourly forecasts and highlights of the weather conditions for the current day like 'Air Quality Index', 'Humidity', 'Pressure', etc.
  

## Technologies & Techniques Used
### HTML5 & Semantic Markup
- Utilized semantic HTML to improve accessibility and SEO. The use of elements like `<header>`, `<main>`, and `<footer>` ensures that the content is structured for better readability by both users and search engines.

### CSS (Responsive Design)
- **Mobile-First Layout**: The design begins with mobile styles and progressively adds desktop features. This approach ensures optimal performance on mobile devices, which is critical in modern web development.
- **CSS Grid & Flexbox**: Used for building a flexible, responsive layout that adapts to various screen sizes. CSS Grid handles the overall structure, while Flexbox is used for aligning items within sections.
- **Custom Animations**: Lightweight CSS animations enhance the user experience, offering smooth transitions for UI elements like search results and weather data updates.

### JavaScript (OOP & Dynamic Content)
- **Object-Oriented Programming (OOP)**: Applied OOP principles to organize the JavaScript code, creating modular and reusable components for handling weather data fetching, search functionality, and route management. This approach improves code maintainability and scalability.
- **API Integration**: Integrated with the OpenWeather API to retrieve weather data, which is dynamically displayed on the page through JavaScript’s asynchronous `fetch()` method. This ensures non-blocking data retrieval and smooth user interactions.
- **Event-Driven Architecture**: Used event listeners to handle user interactions like searching for a city or fetching the current location, allowing for efficient management of the app’s state without unnecessary re-renders.
  
### Error Handling
- Custom 404 error page with clear messaging and a link back to the homepage, ensuring users can easily navigate the site even when they encounter an error.

