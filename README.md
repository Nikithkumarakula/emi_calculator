# Loan Calculator App

This Loan Calculator is a modern, single-page React application designed to help users calculate loan EMIs (Equated Monthly Installments), view detailed amortization schedules, and perform real-time currency conversions using live exchange rates.

## Features

- Calculate loan EMIs using the standard financial formula.
- View a dynamic amortization schedule with monthly breakdowns.
- Real-time currency conversion of EMI values using the ExchangeRate API.
- Paginated exchange rate table supporting 160+ currencies.
- Dark and light mode toggle with Material UI theming.
- Responsive design with collapsible header navigation for mobile devices.
- Routing with 404 Not Found and Error pages for graceful error handling.
- Global state management using React Context API.
- Custom React hooks for reusable logic such as EMI calculation and fetching exchange rates.

## Technologies Used

- React (Hooks, Context API, React Router)
- Material UI for UI components and theming
- Axios for API calls
- ExchangeRate API for live currency data
- Vite as the build tool

## Setup and Running Locally

1. Clone the repository.
2. Install dependencies:
   ```
   npm install
   ```
3. Replace the placeholder API key in the source code with your actual ExchangeRate API key.
4. Start the development server:
   ```
   npm run dev
   ```
5. Open your browser at `http://localhost:5173` to use the app.

## Deployment

This app can be deployed on GitHub Pages or other static hosting platforms.

### GitHub Pages Deployment

1. Install the `gh-pages` package as a dev dependency:
   ```
   npm install gh-pages --save-dev
   ```
2. Add the following to your `package.json`:
   ```json
   "homepage": "https://github.com/Nikithkumarakula/emi_calculator",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Commit and push your changes.
4. Run the deploy script:
   ```
   npm run deploy
   ```
5. Your app will be live at the URL specified in the `homepage` field.

## API Key

Register at [ExchangeRate API](https://www.exchangerate-api.com/) to obtain a free API key. Replace the placeholder in the code with your key to enable live currency conversion.

## License

This project is licensed under the MIT License.
