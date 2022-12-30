// var element = document.querySelector('li:nth-child(2)');
// element.style.backgroundColor = 'green';

// var items = document.querySelectorAll('li');
// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight = 'bold';
// }

// var element = document.getElementsByTagName('ul');
// var node = document.createElement('li');
// var textNode = document.createTextNode('Item 5');
// node.appendChild(textNode);
// // node.classList.add('list-group-item');
// // element[0].appendChild(node);

// var element_3 = document.getElementsByClassName('list-group-item');
// element_3 = element_3[2];

// element_3.style.display = 'none';

// var itemList = document.querySelector('#items');
// console.log(itemList.parentElement);
// console.log(itemList.lastElementChild);
// console.log(itemList.firstElementChild);
// console.log(itemList.nextElementSibling);
// console.log(itemList.previousElementSibling);

// var newDiv = document.createElement('div');
// var text = document.createTextNode('Hello World!');
// newDiv.appendChild(text);
// console.log(newDiv);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// container.insertBefore(newDiv, h1);

// var ul = document.querySelector('ul');
// var li = document.querySelector('.list-group-item');

// ul.insertBefore(newDiv, li);


var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//Listen to Submit
form.addEventListener('submit', addItem);

//Listen to delete item
itemList.addEventListener('click', removeItem);

//adding Item
function addItem(e){

    e.preventDefault();

    var newItem = document.getElementById('item');
    var ele = document.querySelector('.msg');
        console.log(ele);
    if(newItem.value==''){
        var msg = document.querySelector('.msg');
        msg.classList.add('error');
        msg.innerHTML = "Please enter all fields";
        setTimeout(() => {msg.remove(); location.reload()}, 3000);
    }

    //creating new li
    var li = document.createElement('li');
    //adding class
    li.className = 'list-group-item';
    //appending li to itemlist

    //creating delete button
    var deleteBtn = document.createElement('button');
    //adding class to delete
    deleteBtn.className = 'btn btn-danger btn-sm delete'; 
    deleteBtn.appendChild(document.createTextNode('X'));

    //creating edit button
    var editBtn = document.createElement('button');
    //adding class to edit
    editBtn.className = 'btn btn-success btn-sm';
    editBtn.appendChild(document.createTextNode('Edit'));

       //creating a div;
    var div = document.createElement('div');
    div.className = 'row-2 float-right';

    div.appendChild(deleteBtn);
    div.append(' ');
    div.appendChild(editBtn); 
    //creating textNode
    li.appendChild(document.createTextNode(newItem.value));
    li.appendChild(div);

//     itemList.innerHTML += (`<li class="list-group-item">${newItem.value}
//     <div class="float-right">
//       <button class="btn btn-danger btn-sm delete">X</button>
//       <button class="btn btn-success btn-sm">Edit</button> 
//     </div>
//   </li>`);
    itemList.appendChild(li);

}

//removing item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            var li = e.target.parentElement.parentElement;
            itemList.removeChild(li);
        }
    }
}



