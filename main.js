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
var filter = document.getElementById('filter');

//Listen to Submit
form.addEventListener('submit', addItem);

//Listen to delete item
itemList.addEventListener('click', removeItem);

//Listen to Filter event
filter.addEventListener('keyup', filterItems);

//Listen to Edit event
itemList.addEventListener('click', editItems);

function createNewLi(key, value){
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
    li.appendChild(document.createTextNode(key+' '+value));
    li.appendChild(div);

    return li;
}

//adding Item
function addItem(e){

    e.preventDefault();
    var newItem = document.getElementById('item');
    var newItemDesc = document.getElementById('itemDesc');
    if(newItem.value=='' || newItemDesc.value==''){
        var msg = document.querySelector('#msg');
        console.log(msg)
        msg.className = 'alert alert-danger';
        msg.innerHTML = "Please enter all fields";
        setTimeout(() => {msg.className = ''; msg.innerHTML = ''}, 3000);
        return;
    }
    var li = createNewLi(newItem.value, newItemDesc.value);

    itemList.appendChild(li);
    
    var obj = {
        item : newItem.value,
        desc : newItemDesc.value
    }
    obj = JSON.stringify(obj);
    localStorage.setItem(newItem.value, obj);

    newItem.value = '';
    newItemDesc.value = '';
}

//remove from local storage
function deleteLocalStorage(val){
    for(let i=0;i<localStorage.length;i++){
        let key = localStorage.key(i);
        let value = JSON.parse(localStorage[key]);
        // console.log(typeof val);
        // console.log(typeof value.value);
        if(val.includes(value.item+" "+value.desc)){
            localStorage.removeItem(key);
            const arr =  [key, value.desc];
            return arr;
        }
    }
}

//removing item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            var li = e.target.parentElement.parentElement;
            itemList.removeChild(li);
            // console.log(e.target.parentElement.parentElement.firstChild);
            var val = e.target.parentElement.parentElement.firstChild.textContent;
            deleteLocalStorage(val);
        }
    }
}

//editing item
function editItems(e){
    if(e.target.classList.contains('btn-success')){

        var item = document.querySelector('#item');
        var desc = document.querySelector('#itemDesc');

        var li = e.target.parentElement.parentElement;
        itemList.removeChild(li);

        var val = e.target.parentElement.parentElement.firstChild.textContent;
        arr = deleteLocalStorage(val);
        item.value = arr[0];
        desc.value = arr[1];
        console.log(item.value +" "+ desc.value);

    }
}

//filtering item
function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1)
            item.style.display = 'block';
        else
            item.style.display = 'none';
    });
}

function loadItems(e){
    // console.log(typeof localStorage.getItem('Item 5'));
    for(x in localStorage){
        if(x=='length')
            break;
        var value = localStorage.getItem(x);
        console.log(value);
        value = JSON.parse(value);
        var li = createNewLi(value.item, value.desc);
        itemList.appendChild(li);
    }
}



