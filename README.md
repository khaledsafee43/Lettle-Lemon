# Little Lemon — React restaurant app

A responsive Little Lemon restaurant application built with React and Vite.

## Run locally

1. Install Node.js 20+.
2. Open this folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL shown in the terminal.

## Verify the project

- `npm run build` — production build and TypeScript check.
- `npm run lint` — ESLint.
- `npm test` — unit tests for booking form validation and available times.

## Booking architecture

- `src/components/BookingPage.jsx` is the parent component.
- `BookingPage` owns the `availableTimes` state and updates it when the selected date changes.
- `src/components/BookingForm.jsx` is the child component and receives `availableTimes` through props.
- The form implements client-side validation for date, time, guests, and occasion.
- Successful submissions show an accessible confirmation message.

## Tests

The test suite covers:

- Rendering the booking fields and available times.
- Client-side validation errors.
- Successful submission with valid reservation data.
- Initial available times.
- Date-dependent available times.

The project uses Vitest, React Testing Library, jsdom, jest-dom, and user-event for testing.
