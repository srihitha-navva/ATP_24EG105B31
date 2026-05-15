# WEEK 5 -- Tailwind CSS and React Basics

- Tailwind CSS
   - utility classes
   - colors
   - spacing
   - typography
   - grid layout
   - flexbox
   - responsive design
   - hover effects
- React JS
   - single page application
   - component based architecture
   - JSX
   - reusable components
   - props
   - rendering lists
   - state
   - useState hook
- Vite
   - React project setup
   - development server
   - build scripts
   - project structure

## Files:

### TAILWIND PROJECT
Tailwind CSS project
   - uses Tailwind utility classes
   - contains HTML assignments
   - uses input.css and output.css
   - includes tailwind.config.js

### TAILWIND PROJECT/src/Assignment1.html
Simple landing page using Tailwind
   - jumbotron section
   - headings and paragraphs
   - buttons
   - grid with three columns
   - footer

### TAILWIND PROJECT/src/Assignment2.html
Tailwind layout assignment
   - header section
   - hero section
   - three column grid
   - background colors
   - text colors
   - spacing utilities

### TAILWIND PROJECT/src/input.css
Tailwind input CSS file
   - used to generate output.css
   - contains Tailwind directives

### TAILWIND PROJECT/src/output.css
Generated Tailwind CSS file
   - contains compiled utility classes
   - linked with HTML files

### REACT-PROJECT1
React and Vite project
   - uses JSX components
   - displays products
   - passes data using props
   - renders product list using map()
   - uses Tailwind classes for styling

### REACT-PROJECT1/src/App.jsx
Main React component
   - creates products array
   - maps product data
   - renders Product component
   - passes product object as props

### REACT-PROJECT1/components/Product.jsx
Product component
   - receives product data using props
   - displays title
   - displays image
   - displays description
   - displays price

### REACT-PROJECT1/src/main.jsx
React entry file
   - renders App component
   - connects React app to HTML root

### REACT-PROJECT2
React component practice project
   - uses multiple components
   - navbar component
   - users list component
   - user card component
   - footer component
   - counter component with state

### REACT-PROJECT2/src/App.jsx
Main React component
   - renders NavBar
   - renders UsersList
   - renders Footer
   - imports Counter component

### REACT-PROJECT2/components/NavBar.jsx
Navbar component
   - logo section
   - navigation links
   - flexbox layout

### REACT-PROJECT2/components/UsersList.jsx
Users list component
   - creates users array
   - maps users data
   - renders User component
   - uses responsive grid layout

### REACT-PROJECT2/components/User.jsx
User component
   - receives user object using props
   - displays name
   - displays email
   - displays user image

### REACT-PROJECT2/components/Counter.jsx
Counter component
   - uses useState hook
   - stores count value
   - increment function
   - decrement function
   - updates UI on state change

### REACT-PROJECT2/components/Footer.jsx
Footer component
   - displays location details
   - displays contact details
   - uses flexbox layout

### package.json
Project configuration
   - scripts for dev, build, lint, and preview
   - React dependencies
   - Vite dependencies
   - Tailwind dependencies
