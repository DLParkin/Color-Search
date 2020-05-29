Color-Search 

Demo: https://colorsearch.netlify.app/

## Requirements
 Colour search is done when users hit Enter on the input. The colour must be a valid CSS colour.
 Display results in a table containing Name, Hex code, RGB values, and CMYK values. 
 Sort the results, with the best matched colours being at the top. 
 Display a maximum of 50 results. 
 Searches the XKCD colours listed here: https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/xkcd.json 

## Assumptions 
Display 50 results Max, so if a colour chosen is later in the color scheme it will limit results.
No sumbit button added 
Tests not included  
Colors sorted by rgb is acceptable 
Assume the only colors available are those from the XKCD.json file

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
