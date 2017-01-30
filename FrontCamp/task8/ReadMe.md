##Task 8

1. Add AngularJS 1.6.1 to a project
1. Add minimum functionality
  1. Create a component for displaying amount of articles and list of their titles
  1. Create a form (using directive) to add an article
1. Add more functionality
  1. Add validation to the form
    1. Fields "Title" and "Content" should be mandatory
    1. Create a custom validator that check the minimum length of an article: 20 symbols.
  1. Reuse the form above to edit an article by clicking on article title.
    1. Hint: you may probably need to pass an action to the button using "&"
  1. Create a component-button "Add an article" and open appropriate form on click
1. Add routes and resource
  1. "Add article"/"Edit article" forms should be opened inside different views, i.e.
    1. /admin/article/\<articleId\>/edit
    1. /admin/article/add
  1. Use Resource to make requests to a server.
1. To have more experience *
  1. Create pagination component and use it to display a list of articles
  1. List of numbers for pagination buttons on should be generated using custom Filter

\* Making  #5 without part (2) can be also considered as "excellent"
 
<hr>
 
Commands that were used:
+ npm install angular --save
+ npm install angular-resource --save
+ npm install angular-route --save
+ npm install babel-preset-es2015 --save-dev
+ npm install html-webpack-plugin --save-dev
+ npm install raw-loader --save-dev
+ npm install style-loader --save-dev
+ npm install css-loader --save-dev
+ npm install less --save-dev
+ npm install less-loader --save-dev
+ npm install ng-file-upload --save
+ npm run start
