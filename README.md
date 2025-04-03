# Carla Ja'queline Writes

A modern, responsive website for showcasing writing content. This website features a clean design, smooth animations, and mobile-friendly navigation.

## Features

- Responsive design that works on all devices
- Modern and clean user interface
- Smooth scrolling navigation
- Contact form with validation
- Social media integration
- Mobile-friendly navigation menu
- Scroll-based animations
- Writing portfolio showcase

## Customization

### Images
To customize the images on the website:

1. Replace `hero-bg.jpg` with your own hero background image
2. Replace `placeholder-profile.jpg` with your profile picture
3. Replace `placeholder-1.jpg`, `placeholder-2.jpg`, and `placeholder-3.jpg` with images for your writing samples

### Content
To update the content:

1. Open `index.html` and modify the text content in the appropriate sections
2. Update the About section with your personal information
3. Add your own writing samples in the Writings section
4. Update the social media links in the Contact section with your profiles

### Colors
To change the website's color scheme:

1. Open `styles.css`
2. Modify the CSS variables in the `:root` selector:
   ```css
   :root {
       --primary-color: #2c3e50;    /* Main color */
       --secondary-color: #e74c3c;  /* Accent color */
       --text-color: #333;         /* Text color */
       --light-bg: #f9f9f9;        /* Light background */
       --white: #ffffff;           /* White */
   }
   ```

## Setup

1. Clone or download this repository
2. Replace the placeholder images with your own
3. Update the content in `index.html`
4. Customize the colors in `styles.css` if desired
5. Open `index.html` in a web browser to view the website

## Contact Form

The contact form is currently set up to show a success message. To make it functional:

1. Set up a backend server to handle form submissions
2. Modify the form submission code in `script.js` to send the data to your server
3. Add proper error handling and validation as needed

## Browser Support

This website is compatible with all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License. 