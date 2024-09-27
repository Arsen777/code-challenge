# Code Challenge

This project is a user-friendly web application that fetches data from an API and displays it in a grid layout. The grid is responsive and adapts to portrait and landscape modes, showing different numbers of boxes per row. The app is built using TypeScript and LESS and is optimized for iPad Safari.

## Features

- Fetches data from an API.
- Displays a responsive grid of boxes with a title, IBU, ABV, and an image for each item.
- Each box has a dynamic background color based on the IBU value, which is themable using a LESS theme file.
- Clicking on an item opens a modal with a detailed description of the item.
- The app adjusts the number of grid columns based on the device's orientation (4 columns in portrait mode, 7 columns in landscape mode).
- Optimized for iPad Safari.

## Technologies Used

- **TypeScript**: Strongly-typed JavaScript.
- **LESS**: CSS pre-processor for theme-based styling.
- **Live-Server**: Development server with live reloading.
- **JSON API**: Data fetched from [https://api.jsonbin.io/v3/b/6630fd9be41b4d34e4ecd1f9].

## Prerequisites

To run this project locally, you need to have the following installed:

- Node.js
- NPM (comes with Node.js)

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/code-challenge.git
   cd code-challenge

   ```

2. Install the dependencies:

Run the following command to install all the necessary packages:

```bash
 npm install
```

3. Build the project:

Compile the LESS files and TypeScript into CSS and JavaScript using:

```bash
 npm run build
```

4. Start the live server:

To start the live development server and open the app in your browser:

```bash
 npm start
```
