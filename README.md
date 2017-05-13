# Omnifood

## Technologies Used

- HTML5
- CSS3
  - Autoprefixer
- jQuery
  - Waypoints (to trigger functions when an element is scrolled to).

## Techniques Learned

- HTML5
  - `<blockquote>`
  - `<cite>`
  - `<span>` to style only some of the text within a paragraph.
  - `&nbsp;` instead of a normal space as a placeholder.
- CSS3
  - `box-sizing: border-box;`
  - `text-rendering`
  - `:before` and `:after`
  - `word-spacing` and `letter-spacing`
  - `line-height`
  - `link`, `visited`, `hover`, and `active`
  - `transition` (in this case, to create more sophisticated hover effects with animations and delays).
  - `transform` (in this case, to zoom in and out on an image).
  - `text-decoration: none;` for removing link underlines.
  - `linear-gradient` for shading background images.
  - `list-style: none;` for removing bullet points from lists.
  - `text-transform: uppercase;` to make all letters capital. `text-transform: capitalize` to capitalize only the first letter of each word.
  - `background-attachment: fixed;` to hold a background image in place, even when the user scrolls.
  - `content` to add text to the site using CSS3.
  - `overflow-x: hidden;` 
  - `display: none;` to hide elements.
  - Animate.css.
  - `animation-duration`
- jQuery
  - Triggering animations on scroll.

## Future Iterations

- Favicon (logo).
- Center the icons in the Features section.
- Try making the Cities fadeIn one after another by a split second each. (Will have to give each one its own class.)
- In media query 767px and lower, polish the centering all the links and social media navs.
- Firefox only: "Show Me More" button's bottom border does not always display.
- Fix: When you shrink the screen and the mobile nav icon appears, if you click it and then click the X to close it, and then re-expand the browser size, the nav does not reappear. (Note that if you only click it once to expand the drop-down, when you re-exapnd the browser size, the .main-nav is still visible.) If you check the console log, `.main-nav` now has a rule of `display: none` for some reason.
  - Solution: https://www.udemy.com/design-and-develop-a-killer-website-with-html5-and-css3/learn/v4/questions/821648