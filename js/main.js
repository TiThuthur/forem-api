const response = await fetch("https://dev.to/api/articles/258")
const article = await response.json();
console.log(article);
