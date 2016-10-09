# Website Performance Optimization portfolio project

------------------------------------------------------------------

##Challenge

 1. optimize index.html to achieve a score of 90 in PageSpeed
 2. optimized main.js to achieve 60 fps in pizza.html.

##Folder

There are three folder in this project
1. Original
- In the /original/ folder, there is the original code provided by Udacity.

2. test
- For test purpose and it is readable.

3.optimized
- In the /optimized/ folder, there is the production code, with the minified html/css/js and optimized images.

-----------------------------------------------------------------------------------------------------

##Part 1: Optimize PageSpeed Insights 

- Minify HTML,CSS and JS files with Grunt, in the production version /optimized/ folder
- Optimize images (size and compression) with Grunt, in the /test/ as well as  /optimized/ 
- Eliminate render-blocking JavaScript and CSS in above-the-fold content:
  - style.css inlined in index.html.
  - print.css with the media=print tag.
  - Put the Google Analytics script to the footer of the page.
  - Load asyncronoulsy the Google Fonts with a script in the footer.
- Create web.config file to put an expiry date to static resources (css, images and js).

####Part 2: Optimize Frames per Second 

- Apply optimizations for PageSpeed: minify css and js, optimize images, inline css,   configure the viewport.
- Optimizations made in test/views/js/main.js:
  - Change querySelector and querySelectorAll to getElementById and getElementsByClassName, to make it faster.
  - Delete the function determineDx, since we change the pizza size inside the changePizzaSizes. Also optimize the loop in changePizzaSizes to put the new width in each .randomPizzaContainer.
  - Create all the variables outside of loops where possible.
  - In updatePositions, phase only have 5 different values, because it changes for each (i % 5). So we create an array where we put the 5 values. We also put the phase variable outside the for loop, to separate the manipulation of the DOM from the methods that query the state. And finally we optimize the loop. 
  - Calculate the total number of pizzas we need for the screen we are using, and then create the exact number of pizzas onscreen. Put the optimized image of the pizza with its real size.
- Optimizations in CSS: put will-change:transform;transform:translateZ(0);backface-visibility:hidden; in the .mover class. This way we will create diferent layouts for each pizza and the main layout will not be repainted every time we create a pizza.

-----------------------------------------------

### To run the application

1. Download the /optimized/ folder in your computer.
1. To inspect the site on your phone, you can run a local server:

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m http.server 8000
  ```
1. Download and install [ngrok](https://ngrok.com/):

  Open ngrok terminal and type:
  $> ngrok http 8000
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights and Chrome DevTools!
 
 Or 

 just open http://localhost:4040 in a web browser to inspect request details.
-----------------------------------------------

### Tools required to create the production version

1. Grunt

To install grunt, <a href="http://gruntjs.com/getting-started" target="_blank">follow this instructions</a>. 

