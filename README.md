# Beam

![](/assets/Background.png)

## Introduction

A fast, ergonomic, and reliable productivity launcher packed with powerful tools. Seamlessly integrated and highly customizable, this app enhances your workflow with an extendable interface, giving you quick access to everything you need.

This application is licensed under the **GPL-3.0** license. Feel free to fork, modify, and contribute.

## Development Setup

To set up the project on your local machine, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/h4ck3r-04/beam
cd beam
```

### 2. Install Dependencies

Install the necessary dependencies using npm:

```bash
npm install
```

This will install all the required packages including Electron, Electron Forge, and other dependencies.

### 3. Start Development Mode

To run the app in development mode, use the following command:

```bash
npm start
```

This will launch the Electron application with live-reloading enabled, so you can make changes to the code and see them reflected immediately.

## Build & Package the Application

To build and package the application into a platform-specific format, follow these steps:

### 1. Create a Package

Run the following command to create the package for your platform:

```bash
npm run package
```

This will generate the necessary files for your platform (e.g., `.dmg` for macOS, `.exe` for Windows).

### 2. Make the Application

To create an installer or distributable package, use:

```bash
npm run make
```

This command will generate a platform-specific distributable that you can share or distribute.

## Testing

To test the app locally, simply run the following command after setting up the development environment:

```bash
npm start
```

This will launch the app where you can test the search input functionality, background process, and the hotkeys for toggling visibility and hiding the app.

## License

This application is licensed under the [GPL-3.0 License](LICENSE).
