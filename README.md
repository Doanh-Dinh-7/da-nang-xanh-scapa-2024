# React Frontend - Demo Gen-AI

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Perquisite

Install NodeJS version 20.x.x (lts/iron)

```bash
# Install NodeJS
nvm install lts/iron

# Using NodeJS
nvm use lts/iron

# Enable corepack to use yarn
corepack enable
```

Install and upgrade all packages

```bash
# Install all packages
yarn

# Upgrade all packages (optional)
npx yarn-upgrade-all
```

## Setup Environment Variables

Create a `.env` file in the root directory based on the `dev.env` file

```bash
cp dev.env .env
```

> Note: On production, you need to update a `production.env` file

## Add Local Domain

> Note: This step is required to show the Quicksight Dashboard in the iframe.

Open your `/etc/hosts` file

```bash
sudo vim /etc/hosts
```

Add the following domain to your `/etc/hosts` file

```bash
# You should add your local domain to AWS Quicksight Topic's allowed domain list.
127.0.0.1       dev.localhost
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
