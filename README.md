# QR Code Generator

This project is a simple **QR Code Generator** built using **React**. The app allows users to generate a QR code for any URL input, customize the QR code, and download it as an image.
link: https://pradeish29.github.io/QR-Code-Generator/

## Features

- Generate QR codes for any URL.
- Customize QR code size, margin, and colors.
- Download the QR code as a PNG image.

## Project Structure

The project is structured as follows:

```bash
├── public
├── src
│   ├── App.js          # Main component handling QR code generation
│   ├── App.css         # Styling for the app
│   └── index.js        # Entry point for React
├── .gitignore          # Ignored files for Git
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation

```
## Installation
To run this project locally, follow these steps:

- Clone the repository:

```bash
git clone https://github.com/pradeish29/QR-Code-Generator.git
```
- Navigate to the project directory:

```bash
cd QR-Code-Generator
```
- Install the dependencies:

```bash
npm install
npm i qrcode
```
- Start the development server:

```bash
npm start
```
The app will be available at http://localhost:3000.

## Deployment
The project is set up to be deployed to GitHub Pages. To deploy the project, use the following command:

```bash
npm run deploy
```
Make sure the "homepage" field in the package.json is correctly set to:

```json

"homepage": "https://pradeish29.github.io/QR-Code-Generator"
```
## Usage
- Enter a URL in the input field.
- Click on the Generate button to create the QR code.
- The generated QR code will be displayed below the input field.
- You can download the QR code by clicking on the Download link.
  
## Technologies Used
- React: Frontend framework for building the UI.
- qrcode: Library for generating QR codes.
- gh-pages: For deploying the app to GitHub Pages.
- 
##License
This project is licensed under the MIT License.
