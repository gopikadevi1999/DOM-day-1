// const divison = document.createElement("div");
// divison.innerHTML="<h1>Hi this is a session practice dom</h1>";
// document.body.append(divison);

// const divison = document.createElement("div");
// divison.innerHTML ="<span>This is my span tag inside div tag</span>"
// document.body.append(divison);

// const divison = document.createElement("div");
// const span = document.createElement("span");
// span.innerHTML = "This tag is my span tag";
// divison.append(span);
// document.body.append(divison);

// const divison = document.createElement("div");
// const span = document.createElement("span");
// const heading = document.createElement("h1");

// span.innerHTML = "hi this is a span tag";
// heading.innerHTML = "hi this is a heading tag";

// divison.append(heading);
// divison.append(span);
// document.body.append(divison);

const divison = document.createElement("div");
const header = document.createElement("header");
const section = document.createElement("section");
const article = document.createElement("article");
const h1 = document.createElement("h1");
const span = document.createElement("span");
const p = document.createElement("p");

h1.innerHTML = "this is a h1 tag inside a header";
span.innerHTML = "this is a span inside a section";
p.innerHTML = "this is a p tag inside a article";


divison.className = "container";
header.className = "header";
section.className = "section";
article.className = "article";

header.append(h1);
section.append(span);
article.append(p);
divison.append(header, section, article);
document.body.append(divison);







