console.log(document.head)
console.log(document.body)
console.log(document.all[10])
console.log(document.links)
console.log(document.forms)

var header = document.getElementById("header-title");
console.log(header);

// header.textContent = "Hello";
// header.innerText = "GoodBye";

header.innerHTML = '<h3>Hello</h3>'

var itemTitle = document.getElementsByClassName("title-items");
console.log(itemTitle);

 header.style.borderBottom = "solid 5px Blue";

 var item = document.getElementsByClassName("list-group-item");
 console.log(item);
 
 item.textContent = "Hello 2";
 item.style.color = "Blue";


// querrySelectors

var header = document.querySelector("main-header");
header.style.borderBottom = "solid 4px #ccc";


var input = document.querySelector("input");
input.value = "Hello World";

var submit = document.querySelector('input[type = "submit"]');
submit.value = "SEND";
 

var item = document.querySelector('.list-group-item');
item.style.color = "red";

// TRAVERSING THE DOM

var itemList = document.querySelector("#items");


// // parentNode
console.log(itemList.parentNode);

itemList.parentNode.style.backgroundColor = "blue";

console.log(itemList.parentNode.parentNode);


// parentelememt
console.log(itemList.parentElement);

itemList.parentNode.style.backgroundColor = "blue";

console.log(itemList.parentElement.parentElement);


//childNodes
console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);

// itemList.children[1].style.backgroungcolor = 'yellow';

console.log(itemList.firstChild);

//firstElementchild

console.log(itemList.firstElementChild);
itemList.firstElementChild = "Hello 1";

//lastElementchild
console.log(itemList.lastElementChild);
itemList.lastElementChild = "Hello 4";

//nextsibling
console.log (itemList.nextSibling);

//nextElementsibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);

//previousElementsibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "green";

//createElement

//create a div
var newDiv=document.createElement("div");

//Add class
newDiv.className = "hello";

//Add id
newDiv.id = "hello 1";

// Add attribute
newDiv.setAttribute = ('title', 'hello div');

//create text node
var newDivText = document.createTextNode("Hello world");

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header, container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = "30px";

container.insertBefore(newDiv , h1);


