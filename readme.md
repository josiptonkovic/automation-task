# Automation Task

## Description

This Repository contains the automation solutions for testing API endpoints and Google Maps search feature.

## Installing Jmeter and running API Tests
To start with the API automation tests:
1. Clone Repository
2. Download [Jmeter 5.6.3](https://jmeter.apache.org/download_jmeter.cgi)
3. Extract the .zip file inside the API-Tests folder

### Running GUI on Windows
1. Open apache-jmeter-5.6.3/bin
2. Run jmeter.bat
3. Open the `API-tests.jmx` file
4. Press the 'Play' button

### Running GUI on Linux
1. Open apache-jmeter-5.6.3/bin
2. Run `./jmeter`
3. Open the `API-tests.jmx` file
4. Press the 'Play' button

## Installing Playwright and running E2E Tests
To start with the E2E automation tests:
1. Clone Repository
2. Open End-to-End folder
3. Run `npm install` in terminal

### Running Playwright in GUI
Run `npx Playwright test --ui`

### Running Playwright in Terminal/CMD
Run `npx Playwright test`
