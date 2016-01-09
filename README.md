# Babel Transform In Browser

> Transform ES2015 code in browser on the fly with [Babel.js](https://babeljs.io).

## CDN

```
https://cdnjs.cloudflare.com/ajax/libs/babel-transform-in-browser/0.1.0/btib.min.js
```

## Why?

The answer is _quick prototyping_.

**IMPORTANT NOTE: Please never use this module in real projects and production environments.**

## Usage

Just include the script on the page before your ES2015 scripts. Please note that only _scripts that will have `type="text/es2015"` will be transpiled_, example: 

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
    const square = multiplier(2);
    const result = square(3);
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

### [@Vjeux](https://twitter.com/Vjeux)'s Challenge

http://blog.vjeux.com/2015/javascript/challenge-best-javascript-setup-for-quick-prototyping.html

My suggest:

> Your challenge is about to introduce one more level of complexity / tool that newbies will need to learn. What is the problem with a http://fooo.fr/~vjeux/ and uploading there test-something.html? The starter html to copy and paste can look like - 
