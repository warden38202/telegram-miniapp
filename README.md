# TG Mini Report App

This is a **mini reporting application** designed for the **Telegram Web App** platform. Built with **React** and **TypeScript**, it provides a smooth and interactive experience, with animations powered by `@react-spring/web` and state management using React’s built-in hooks.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
  - [Running the Application](#running-the-application)
  - [Building for Production](#building-for-production)
  - [Code Linting](#code-linting)
  - [Previewing Production Build](#previewing-production-build)
- [Project Structure](#project-structure)
- [Dependencies Overview](#dependencies-overview)
  - [Core Dependencies](#core-dependencies)
  - [Development Dependencies](#development-dependencies)
- [Usage Notes](#usage-notes)
- [Contributing](#contributing)

---

## Project Overview

The TG Mini Report App is a Telegram Web App built for creating, viewing, and managing reports. It utilizes **TailwindCSS** for responsive design and **@react-spring/web** for animations, providing a smooth and visually engaging experience within the Telegram platform.

## Features

- **Responsive UI** built with TailwindCSS
- **Telegram Web App Integration** for seamless interaction within the Telegram platform
- **Animations** using `@react-spring/web`
- **Router Support** using `react-router-dom` for multiple pages

## Installation

To set up and run this application on your local machine, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/warden38202/telegram-miniapp.git
    cd telegram-miniapp
    ```

2. **Install Dependencies**:
    Make sure you have `Node.js` (version 16 or higher) and `npm` installed. Then, install the required packages:
    ```bash
    npm install
    ```

3. **Environment Setup**:
    Create a `.env` file in the root directory if you have any environment variables. For example:
    ```plaintext
    # Example: Optional configuration variables can be added here if needed
    ```

## Available Scripts

The `package.json` defines various scripts for development, production, linting, and previewing the build. Here’s how to use them:

### Running the Application

To start the app in development mode, use:

```bash
npm run dev
