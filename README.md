# Babel Transform In Browser

[![npm version](http://badge.fury.io/js/babel-transform-in-browser.svg)](http://badge.fury.io/js/babel-transform-in-browser)
[![Dependency Status](http://david-dm.org/voronianski/babel-transform-in-browser.svg)](http://david-dm.org/voronianski/babel-transform-in-browser)

> Transform ES2015 code in browser on the fly with [Babel.js](https://babeljs.io).

### Download

```
http://labs.voronianski.com/babel-transform-in-browser/0.1.0/btib.min.js
```

But after PR accept - https://github.com/cdnjs/cdnjs/pull/6677 will be available through CDN:

```
https://cdnjs.cloudflare.com/ajax/libs/babel-transform-in-browser/0.1.0/btib.min.js
```

Also check sources at [dist](https://github.com/voronianski/babel-transform-in-browser/tree/master/dist) folder.

## Why?

The answer is _quick prototyping_.

**IMPORTANT NOTE: Please never use this module in real projects and production environments.**

## Usage

Just include the script on the page before or after your ES2015 scripts. Please note that only scripts that have `type="text/es2015"` attribute will be transpiled, see example: 

```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Quick ES2015 Prototyping</title>
</head>
<body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-transform-in-browser/0.1.0/btib.min.js"></script>
<script type="text/es2015">
const multiplier = (x) => (y) => x * y;
const double = multiplier(2);
const result = double(3);
console.log(result); 
// 9

class Cat { 
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Lion extends Cat {
    speak() {
        super.speak();
        console.log(this.name + ' roars.');
    }
}

let cat = new Cat('Simon');
cat.speak();
// Simon makes a noise.

let lion = new Lion('Sam');
lion.speak();
// Sam makes a noise. 
// Sam roars.
</script>
</body>
</html>
```

## References

### Quick React Prototyping

This script was created mainly because of the [discussion](https://twitter.com/floydophone/status/680226147213426688) on how hard it is to start hacking on a js project today. Also it is a response to the **[@Vjeux](https://twitter.com/Vjeux)'s challenge (http://blog.vjeux.com/2015/javascript/challenge-best-javascript-setup-for-quick-prototyping.html)**.

Check the [example](https://github.com/voronianski/babel-transform-in-browser/tree/master/example/react.html) below (it's also availbe as _"React Prototyping Playground"_ gist - https://gist.github.com/voronianski/f67f4973687434f474b4):

```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>React Quick Prototyping</title>
</head>
<body>
    <div id="root"></div>
  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.6/react.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.6/react-dom.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-transform-in-browser/0.1.0/btib.min.js"></script>
    <script type="text/es2015">
        // Your playground code goes here, e.g.:
        function App ({ title }) {
            return (
                <div>{title}</div>
            );
        }

        ReactDOM.render(
            <App title="Hello World" />,
            document.getElementById('root')
        );
    </script>
</body>
</html>
```

> - No setup: I'm happy to have to setup something initially (dedicated server, apache, php...) but nothing should be required to create a new project. No npm install, react-native init, creating a github project, yo webapp...

- **DONE** You can use any server you want to serve static html file.
 
> - One file: I want to write a single js file to start with. No package.json, no .babelrc, no Procfile...

- **DONE** But let's do this in html file instead.

> - Sharable: I want to be able to share it with a url without any extra step. No git push heroku master or git push gh-pages.

- **DONE** Send a file in message, copy-paste in pastebin, upload via ftp, etc.

> - Keeps working: Once online, it should stay there and keep working 6 months later. No npm start to run it, no special port that's going to conflict with my 10 other prototypes...

- **DONE** Bulletproof html file with script inside helps here again.

> - Not generic: I don't care about it being generic, I will use whatever transforms you decided. Happy to write js without semi-colons and using SASS for my CSS if you checked all the boxes above.

- **DONE** Though SASS/LESS is not included it's a question about next "transform-in-browser" script.

> - Not prod-ready: This setup doesn't have to be prod-ready, support unit testing or anything that involves it being a real product. This is meant for hacking on stuff. When the project becomes good, I'll spend the time to add all the proper boilerplate.

- **DONE** Absolutely.

## To Do

What will be nice to add is extending transformations with options in script's querystring like:

```
/path/to/btib.min.js?presets[]=stage-0&plugins[]=transform-runtime
```

For now it's not added because of bug in [babel-standalone](https://github.com/Daniel15/babel-standalone) module - https://github.com/Daniel15/babel-standalone/issues/4.

--- 
**MIT Licensed**
