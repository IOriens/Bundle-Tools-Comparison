## Intro
Compare JS Modules Bundling result with all kinds of module bundlers like webpack, fuse-box and browserify.

## Usage

```
# Install deps 
cnpm i

# cd to import or require dir.
cd import

# Bundle with webpack 2 
node webpack.js 

# Bundle with webpack 1 
node webpack.1.js

# Bundle with fuse-box
node fuse.js

# Bundle with browserify
node browserify.js
```
Checkout built files in `dist` directory. 

## Tips
Uncomment uglify configuration in each entry file to get minified build files. 