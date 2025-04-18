# InsuranceApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.2.
This app allows users to input owner information, address details, insurance periods, and vehicle details. The form is built using Angular Reactive Forms and Angular Material for a clean and responsive UI.

## Features

- Owner Information: Capture the owner's first name, last name, email, and phone number.
- Address Information: Capture street address, home number, postal code, city, and country.
- Insurance Period: Input the start and end dates for insurance coverage.
- Insurance Types: Choose insurance types from a list of available options.
- Vehicles: Add multiple vehicles, specifying the type, brand, model, color, and production date.

## Technologies Used

- Angular 19 (Reactive Forms, Directives, Components)
- Angular Material (UI components like form fields, buttons, checkboxes)
- TypeScript
- RxJS (for handling asynchronous API calls)
- Mock API Service (to simulate API calls for fetching data)

## Prerequisites

Before running the application, ensure that you have the following installed:

- Node.js (version 14.x or later)
- npm (Node package manager)

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.