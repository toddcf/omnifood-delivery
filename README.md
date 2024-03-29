# Omnifood

![Omnifood](https://github.com/toddcf/omnifood-delivery/blob/master/assets/img/food/hero.jpg "Omnifood")


## Live Site

- GH Pages: https://toddcf.github.io/omnifood-delivery/
- Heroku: https://omnifood-delivery.herokuapp.com/ (will be phased out)


## Technologies Used

- HTML5
- CSS3
- jQuery
  - Waypoints (to trigger functions when an element is scrolled to).
  - gmaps.js (map plugin).

## Techniques Learned

- HTML5
  - `<blockquote>`
  - `<cite>`
  - `<span>` to style only *some* of the text within a paragraph.
  - `&nbsp;` instead of using the spacebar as a placeholder.
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

- Discontinue the Heroku version, and delete all the `php` files that Heroku required.
- Update my portfolio site to point to the GH Pages URL instead of Heroku.
- Reverse the order of the CSS (to mobile-first).
- Minimize the images.
- Minify all the files.
- Rename `master` branch to `main`: https://linuxize.com/post/how-to-rename-local-and-remote-git-branch/
- Convert any jQuery to vanilla JS.
- Center the icons in the Features section.
- Try making the Cities fadeIn one after another by a split second each. (Will have to give each one its own class.)
- In media query 767px and lower, polish the centering of all the links and social media navs.
- Firefox and iPhone: "Show Me More" button's bottom border does not always display. May have to add bottom padding.
- See if the map can be re-added.  (HTTPS should no longer be an issue.)