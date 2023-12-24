const colors = require("colors");

console.log("hello".green);
console.log("hello".underline.red);
console.log("hello".inverse);
console.log("hello".rainbow);
console.log("hello".trap);

 
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});
 
// outputs red text
console.log("this is an error".error);
 
// outputs yellow text
console.log("this is a warning".warn);

console.log("hiaklsdlfjas".silly);