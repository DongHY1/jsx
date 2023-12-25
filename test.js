const babel = require('@babel/core');
const haoyuJSXTransform =require('./index.js')
const { code } = babel.transformSync('function App(){return <div>Hello</div>;}', {
	presets: [haoyuJSXTransform]
});

console.log(code)