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
element[0].appendChild(node);

var element_3 = document.getElementsByClassName('list-group-item');
element_3 = element_3[2];

element_3.style.display = 'none';