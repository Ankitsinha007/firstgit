// // EXAMINE THE DOCUMENT OBJECT//
console.dir(document);

// // DOCUMENT IS USED FOR ACCESS  HTML AND CAN MODIFY THE HTML
console.log(document.domain);  // document.domain gives the local domain
console.log(document.URL);        // document.URL gives the url of the web page
console.log(document.title);       // document.title gives the title of the web page

document.title = "ABCD";            // To change the title of web page using DOM
console.log(document.title);
console.log ( document.doctype);        // document.doctype gives the document type of the HTML
console.log ( document.head);           // document.head gives the element of the head
console.log ( document.body);           // document.body gives the element of the body
console.log ( document.all);            // document.all gives the all element of the HTML
console.log(document.all[0]);
console.log(document.all[10]);          // document.all[index] gives the element of the given index
console.log(document.forms);
console.log(document.links);
console.log(document.images);

// // SELECTORS //
// 1:- GETELEMENTBYID  //   (Singular)
console.log(document.getElementById("items"));        //get id element from this method
var headerTitle = document.getElementById("header-title");           // get id element y this method also.
console.log(headerTitle);

// // This is the overriding the content of the header.  Means  which DOM property is used recently
headerTitle.textContent = "Hello 2";
headerTitle.innerText = "Hello";
console.log(headerTitle.textContent = "Hello 3");
headerTitle.innerHTML = "Hello 4";

headerTitle.style.fontSize = "50px";        // change the fontsize of the selected item
headerTitle.style.color = "black"; // change the color of the selected item

// // 2:- GETELEMENTSBYCLASSNAME // (Plural)
var itemsList = document.getElementsByClassName("list-group-item");
console.log(itemsList);
console.log(itemsList[1]);
itemsList[1].innerText  ="RICE ";
itemsList[1].style.color = "red";
itemsList[1].style.background = "black";
itemsList[1].style.fontWeigth = "20px";

// // // Gives Error
itemsList.style.background = "grey";

for(let i =0; i<itemsList.length; i++){
    itemsList[i].style.background = "lightgrey";
}

// // GETELEMENTBYTAGNAME //
var li = document.getElementsByTagName("li");
console.log(li);
li[1].style.color = "red";
li[1].style.background = "black";
li[1].style.fontWeight = "bold";

for(var i=0; i < li.length; i++){
    li[i].style.background = "lightgrey";
}

// // QUERYSELECTOR // (singular)
// // It will only manipulate the first item of the selectors

var header = document.querySelector("#header-title");
header.style.color  = "darkred ";

var submit = document.querySelector ('input[type = "submit"]');
submit.value = "SAVE"

var items = document.querySelector(".list-group-item");
// items.style.background = "lightgrey";
items.style.color = "darkred";
items.textContent = "Coffee";
items.style.fontsize = "bold";

var lastitem = document.querySelector(".list-group-item:last-child");
lastitem.style.color = " Blue";

var secitem = document.querySelector(".list-group-item:nth-child(2)");
secitem.style.color = "coral";

var secitem = document.querySelector(".list-group-item:nth-child(3)");
secitem.style.color = "green";

// //QUERYSELECTORSALL
// //GET element more than one elements

var titles = document.querySelectorAll(".title");
console.log(titles);
titles[0].style.color = "darkred";


// // odd is change the color of the odd element of the li tags
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i =0; i <  odd.length; i++){
    odd[i].style.background = "lightgrey";
}

// // even is change the color of the even element of the li tags
var even = document.querySelectorAll('li:nth-child(even)');
for(var i =0; i <  odd.length; i++){
    even[i].style.background = "grey";
}


// // change the color of all the li tags
// var change = document.querySelectorAll("li");
// for(var i =0; i< change.length; i++){
//     change[i].style.background = "lightgrey";
// }

//  TRAVERSING THE DOM  //
var itemsList = document.querySelector('#items');
console.log(itemsList.parentNode);
itemsList.parentNode.style.background = "lightgrey";
console.log(itemsList.parentNode.parentNode.parentNode.parentNode.parentNode);

// PARENTELEMENT // 
 var itemsList = document.querySelector("#items");
 console.log(itemsList.parentElement);
 itemsList.parentElement.style.background = " black";
 console.log(itemsList.parentElement.parentElement.parentElement.parentElement);

// ChildNodes //
console.log(itemsList.childNodes);

// Children //
console.log(itemsList.children);
itemsList.children[0].style.background = "coral";
itemsList.children[1].style.background = "lightgrey";
itemsList.children[2].style.background = "grey";
itemsList.children[3].style.background = "lightblue";

// Firstchild  //
console.log(itemsList.firstChild);

// LastChild  //
console.log(itemsList.lastChild);

// FiratElementchild  //
console.log(itemsList.firstElementChild);
itemsList.firstElementChild.style.background = "grey";

// // LastElementChild  //
console.log(itemsList.lastElementChild);
itemsList.lastElementChild.style.background = "lightgrey";

// Nextsibling // 
console.log(itemsList.nextSibling);

// NextElementChild //
console.log(itemsList.nextElementSibling);
itemsList.nextElementSibling.style.color = "orange";

// PreviousSibling  //
console.log(itemsList.previousSibling);

// PreviousElementSbiling  //
console.log(itemsList.previousElementSibling);
itemsList.previousElementSibling.style.color = "darkred";


// CreateElement //
var newdiv = document.createElement("div");

// // Add class 
newdiv.className = "pro";

// // Add id
newdiv.id = "pro2";

// // Add  arrtribute
newdiv.setAttribute('title', 'hello');

// // create text node 
var newdivtext = document.createTextNode("Hello World");

// // // Add text to div
newdiv.appendChild(newdivtext);

var container = document.querySelector('header  .container');
var h1 = document.querySelector('header h1');

console.log(newdiv);

container.insertBefore(newdiv , h1);


// AddEventListner  //

// EVENTS  //

//  Add a function of click if we click the save button by  addeventlistner method
var buttton = document.getElementById('button').addEventListener('click', buttonclick);    


function buttonclick(e){
        console.log(button);
        document.getElementById('header-title').textContent = "Hello Customer"; // Manipulate the things what we want by the function
        document.getElementById('main').style.background = "lightgrey";
        document.getElementById('button').style.backgroundColor = "green";

        alert('Items Saved');       // Show the Message after we save the items
        
        console.log(e.target);      // to show the where we click the button
        console.log(e.target.id);       // to show the id of the where we click the button
        console.log(e.target.className);        // t show the class of the where we click the button

        var output = document.getElementById('output');     // To manipulate or print anything in the innerHtml after click the button
        output.innerHTML = '<h2>'+e.target.id+'</h2>'; 
        
//         // To show the what we function do
        console.log(e.type);        

//         To show the X-axis of the mouse where we click
        console.log(e.clientX);

//         // To show the Y-axis of the mouse where we click
        console.log(e.clientY);

        console.log(e.offsetX);
        console.log(e.offsetY);


//         To find out which key is clicked  //
        console.log(e.altKey);
        console.log(e.shiftKey);
        console.log(e.ctrlKey);

}
    
 var button = document.getElementById('button');

 var box = document.getElementById('box');

//     // To find out  how many times the button will be clicked

    button.addEventListener('click', runEvent);
    button.addEventListener('dblclick' ,runEvent);
    button.addEventListener('mousedown' ,runEvent);
    button.addEventListener('mouseup' ,runEvent);

//     Add afunction of how many times mouse will be enter or leave
    box.addEventListener('mouseenter', runEvent);       // this will be only work when the mouse is in the parent element
    box.addEventListener('mouseleave', runEvent);       // this will be only work when the mouse is only leave the parent element


//     Add a function of how many times mouse will be over or out
    box.addEventListener('mouseover', runEvent);    // this will be work when mouse is over the inner element of the parent element
    box.addEventListener('mouseout', runEvent);      // this will be only work when the mouse is out from the child of the parent element


    // box.addEventListener('mousemove' ,runEvent);

    var iteminput = document.querySelector('input[type = "text"]');
    var form = document.querySelector('form');

    var select = document.querySelector('select');

       // this eventlistner is used as when we use the keyboard it will work.
    iteminput.addEventListener('keydown', runEvent); 
    iteminput.addEventListener('keyup', runEvent);
    iteminput.addEventListener('keypress', runEvent);
    iteminput.addEventListener('focus', runEvent);
    iteminput.addEventListener('blur', runEvent);

    iteminput.addEventListener('cut', runEvent);
    iteminput.addEventListener('paste', runEvent);

    iteminput.addEventListener('input', runEvent);

    select.addEventListener('change', runEvent);
    select.addEventListener('input', runEvent);

    form.addEventListener('submit', runEvent);

// //     // It is the function to find type of the click and other things
    function runEvent(e){
        e.preventDefault();
        console.log('Event type :-' + e.type);

        
        console.log(e.target.value); // it gives the value which we type from the keyboard

        document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
    

        box.style.background = "rgb("+e.offsetX+", "+e.offsetY+", 30)";

        document.body.style.background = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
        

    // }

    var form = document.querySelector('addForm');
    var itemsList = document.querySelector('items');
    var filter = documet.querySelector('filter');

    // form submit event
    form.addEventListener('submit', addItem);

    // Delete Event
    itemsList.addEventListener('click', removeItem);

    // Filter item
    filter.addEventListener('keyup', filterItems);

    // Add item
    function addItem(e){
        e.preventDefault();


        // Get input value
        var newItem = document.getElementsById('item');

        // Create new li element
        var li = document.createElement('li');

        // Add class
        li.className = 'list-group-item';
        
        //Add text node with input value
        li.appendChild(document.createTextNode(newItem));

        // Create delete button element
        var deletebtn = document.createElement('button');


        // Add classes to delete button
        deletebtn.className = 'btn btn-danger btn-sm float-right delete';

        // Append text node
        deletebtn.appendChild(document.createTextNode('x'));

        // Append button to li
        li.appendChild(deletebtn);
        
        // Add item in the list
        itemsList.appendChild(li);
    }

    // Remove item
    function removeItem(e){
        if(e.target.classList.contains('delete')){
            if(confirm('Are You Sure')){
                var li  = e.target.parentElement;
                itemsList.removeChild(li);
            }

        }
    }

    // Filter Items
    function filterItems(e){
        // converts text to lowercase

        var text = e.target.value.toLowerCase();

        // Get li's
       var items =  itemsList.getElementsByTagName('li');

       // convert to an array
       Array.form(items).foreach(function(item) {
         var itemName = item.firstchild.textContent;

         if(itemName.toLowerCase().indexOf(text) != -1 ){
            item.style.display = 'block';

         }else{
            item.style.display = 'none' ;
         }
       });
    }



 
