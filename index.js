import * as Babel from 'babel-standalone';

function init () {
    const scriptNodes = document.querySelectorAll('script[type="text/es2015"]');
    const input = [...scriptNodes].reduce((memo, content) => {
        return memo.concat(';', content.innerHTML);
    }, '');

    // TBD: add support of options as query params
    // after issue with plugins will be solved
    // https://github.com/Daniel15/babel-standalone/issues/4
    const options = {
        presets: [
            'es2015',
            'react',
            'stage-0'
        ],
        plugins: [
            'transform-object-assign',
            'transform-runtime'
        ]
    };
    const output = Babel.transform(input, options).code;
    const execFn = new Function(output);

    execFn();
}

document.addEventListener('DOMContentLoaded', init, false);
