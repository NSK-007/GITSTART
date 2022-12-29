var element = document.querySelector('li:nth-child(2)');
element.style.backgroundColor = 'green';

var items = document.querySelectorAll('li');
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
}

var element = document.getElementsByTagName('ul');
var node = document.createElement('li');
var textNode = document.createTextNode('Item 5');
node.appendChild(textNode);
// node.classList.add('list-group-item');
// element[0].appendChild(node);

var element_3 = document.getElementsByClassName('list-group-item');
element_3 = element_3[2];

element_3.style.display = 'none';

var itemList = document.querySelector('#items');
console.log(itemList.parentElement);
console.log(itemList.lastElementChild);
console.log(itemList.firstElementChild);
console.log(itemList.nextElementSibling);
console.log(itemList.previousElementSibling);

var newDiv = document.createElement('div');
var text = document.createTextNode('Hello World!');
newDiv.appendChild(text);
console.log(newDiv);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);

var ul = document.querySelector('ul');
var li = document.querySelector('.list-group-item');

ul.insertBefore(newDiv, li);




