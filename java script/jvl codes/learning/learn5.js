let text = "   welcome to javascript   ";

text=text.toUpperCase();
console.log(text);

text=text.toLowerCase();
console.log(text);

text.charAt(0);
console.log(text.charAt(0));
text.charAt(1);
console.log(text.charAt(1));

text.substring(0,5);
console.log(text.substring(0,5));

text.indexOf("to");
console.log(text.indexOf("to"));

text.lastIndexOf("to");
console.log(text.lastIndexOf("javascript"));

text=text.replace("javascript","java");
console.log(text);

text.split(" ");
console.log(text.split(" "));

text.trim();
console.log(text.trim());