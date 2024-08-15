# LootBox - Frontend
## live-site: https://lootbox-37983.web.app
## Overview
The frontend of LootBox is built using React. It allows users to browse products, filter them by price, and view product details. The frontend communicates with the backend API to fetch product data and filter products by price range.

## Project Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Ahnabu/lootbox-client.git
    
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the project and add your firebase environment variables .

4. Start the development server:
    ```bash
    npm start
    ```

5. Open your browser and go to `http://localhost:5173` to see the application.

### Project Structure

- **src/**: Contains all the source code for the React application.
  - **components/**: Reusable components like `Home`, `ProductDetails`, etc.
  - **public/**: Static assets like images, fonts, etc.

### Scripts

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm test`: Runs the test suite.
- `npm run lint`: Lints the codebase for style and syntax issues.

### Technologies Used
- React
- Axios (for API requests)
- React Router (for routing)
- CSS Modules (for styling)

### Additional Notes
- Ensure that the backend is running locally or the API endpoints are correctly configured in the environment variables.
- For production deployment, make sure to configure the build output with your hosting provider.

## Contributing
Please feel free to contribute by submitting a pull request or opening an issue.

## License
This project is licensed under the MIT License.
