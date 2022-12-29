var element = document.querySelector('li:nth-child(3)');
element.style.backgroundColor = 'green';

var items = document.querySelectorAll('li');
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
}