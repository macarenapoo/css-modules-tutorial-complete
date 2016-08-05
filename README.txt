// WEBPACK UP AND RUNNING

1. Init NPM

cd Development/css-modules-tutorial/
npm init


2. Install Webpack

npm install webpack --save-dev

3. Create a webpack.config.js file

touch webpack.config.js

// webpack.config.js

module.exports = {
  entry: './app/main.js',
  output: {
    path: './public/',
    filename: 'bundle.js'
  }
}

4. create app and public folders
5. create public/index.html
6. add bundle.js to the html file
7. create app/main.js

webpack

8. Add DevServer configuration
9. webpack.config.js

devServer: {
  inline: true,
  port: 3333,
  contentBase: 'public'
}

// run the server

webpack-dev-server


// INSTALLING REACT AND CREATING THE FIRST COMPONENT

1. Install React and Babel

npm install react react-dom --save
npm install babel babel-loader babel-core babel-preset-es2015 babel-preset-react --save

2. Add Loaders to our Webpack Config File

//webpack.config.js

module: {
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }
  ]
}

3. Create App.js
4. Update main.js so it renders the App component.
5. Create components folder and buttons component with Button.js and Button.css
6. Create Button Component

// SETTING UP css-modules

1. Install css-loader and style-loader

npm install css-loader style-loader

2. Add loader to Webpack Configuration

{
  test: /\.css$/,
  loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
}

3. Create button
4. Create greenButton
5. Showcase composes
  - explain difference between composes and extends
  - showcase exposing from other files
6. Showcase global variables
  - adding it as global class (showcase on index.html)
  - combining local and global


// POST-CSS

- PostCSS the tool itself, is a Node.js module that parses CSS into an abstract syntax tree, passes that AST through any number of “plugins” and then converts it back into a string, so you can output it to a file.

- The PostCSS plugin ecosystem refers to all the plugins built with PostCSS in mind, they can do pretty much whatever they want with the parsed CSS.

PostCss Simple Vars

1. Install postcss, postcss-loader and postcss-simple-vars
2. Require postcss-simple-vars
3. Add !postcss-loader to the css loaders
4. Use variables on your css!

Autoprefixer

1. Install autoprefixer
2. Create variable and require autoprefixer
3. add autoprefixer to postcss array
4. Showcase css styling that needs prefixes
5. Change settings to support last 4 versions

// CLASSNAMES

1. Install classnames
2. Use classnames on component
