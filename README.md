# Supreme Project Documentation

## Technical Stack

### Frontend Framework

-   **Next.js 15.3.3**: Utilized for its robust server-side rendering capabilities, optimized routing, and excellent developer experience.
-   **React 19.0.0**: Latest version for optimal performance and modern React features.

### Language

-   **TypeScript**: Implemented throughout the project for type safety and better developer experience.

### Styling

-   **Tailwind CSS 4**: Chosen for its utility-first approach, enabling rapid development and consistent design patterns.
-   **PostCSS**: Configured for processing Tailwind CSS and other CSS transformations.

### Build Tool

-   **Next.js Built-in Build System**: While Vite was considered as the preferred build tool, we're currently using Next.js's built-in build system because:
    -   Seamless integration with Next.js features and optimizations
    -   Built-in support for server-side rendering and static site generation
    -   Automatic code splitting and optimization
    -   Excellent TypeScript support
    -   Zero-config setup for Next.js features

**Future Migration Path to Vite**:

-   We plan to migrate to Vite in the future for:
    -   Faster development server startup
    -   More efficient hot module replacement
    -   Better build performance
    -   Enhanced plugin ecosystem
-   Migration steps will include:
    1.  Setting up Vite with Next.js compatibility
    2.  Configuring build optimizations
    3.  Ensuring SSR/SSG functionality
    4.  Updating deployment pipelines

## Project Structure

```
src/
├── app/          # Next.js app directory (routing and pages)
├── components/   # Reusable React components
│   ├── Animation.tsx # showcase component with animation
│   ├── HeroText.tsx  # showcase component text animation
│   ├── MobileAnimation.tsx #showcase component mobile version
│   ├── Hero.tsx
│   ├── Footer.tsx
│   ├── Contact.tsx
│   └── Navbar.tsx
└── data/         # Data files and constants
```

## Component Architecture

The project follows a modular component architecture with the following principles:

-   **Atomic Design**: Components are organized from basic to complex
-   **Reusability**: Components are designed to be reusable across different parts of the application
-   **Separation of Concerns**: Each component has a single responsibility
-   **Type Safety**: Full TypeScript implementation for all components

## Responsive Design Strategy

The project implements a mobile-first approach with:

-   Responsive breakpoints using Tailwind CSS
-   Separate mobile animations (`MobileAnimation.tsx`) for optimized mobile experience
-   Fluid typography and spacing
-   Flexible layouts using CSS Grid and Flexbox

## Performance Optimization

1. **Code Splitting**

    - Automatic code splitting through Next.js
    - Dynamic imports for heavy components

2. **Image Optimization**

    - Next.js Image component for automatic optimization
    - Responsive images with appropriate sizes

3. **Animation Performance**
    - Framer Motion for performant animations
    - Hardware-accelerated transforms
    - Reduced motion support

## Accessibility

-   Semantic HTML structure
-   ARIA attributes where necessary
-   Keyboard navigation support
-   Color contrast compliance
-   Screen reader compatibility
-   Reduced motion support

## Animation Implementation

Using Framer Motion for:

-   Smooth page transitions
-   Interactive UI elements
-   Performance-optimized animations
-   Reduced motion alternatives

## Development Setup

1. Install dependencies:

    ```bash
    npm install
    ```

2. Run development server:

    ```bash
    npm run dev
    ```

3. Build for production:

    ```bash
    npm run build
    ```

4. Start production server:
    ```bash
    npm start
    ```

## Testing Strategy

### Unit Testing

-   **Jest Configuration**:
    -   Component unit tests
    -   Utility function tests
    -   State management tests
    -   Custom hook tests

### Running Unit Tests

This project uses **Jest** and **React Testing Library** for unit testing React components and logic.

#### Setup (already included in this repo):

-   Jest and React Testing Library are installed as dev dependencies.
-   Configuration files: `jest.config.js` and `jest.setup.js` are present in the root directory.

#### How to run tests:

```bash
npm test
```

-   To run tests in watch mode (for development):

```bash
npm run test:watch
```

#### Adding Tests

-   Place your test files alongside components in a `__tests__` folder, e.g. `src/components/__tests__/ComponentName.test.tsx`.
-   Use the patterns and helpers from [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [Jest](https://jestjs.io/docs/getting-started).

#### Example Test File

```tsx
import { render, screen } from "@testing-library/react";
import HeroText from "../HeroText";

// Example test
it("renders the hero heading", () => {
    render(<HeroText />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
});
```

#### Notes

-   Framer Motion is mocked in tests to avoid animation warnings.
-   See `src/components/__tests__/HeroText.test.tsx` for a real example.

## Challenges and Solutions

1. **Animation Performance**

    - Challenge: Complex animations on mobile devices
    - Solution: Separate mobile animations with optimized performance

2. **Responsive Design**
    - Challenge: Maintaining pixel-perfect design across devices
    - Solution: Comprehensive responsive testing and Tailwind breakpoints

```

```
