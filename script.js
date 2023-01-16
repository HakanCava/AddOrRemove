//variables

const btnAdd = document.querySelector("#btn1");
const input = document.querySelector("#input");
const btnAllDelete = document.querySelector("#btn2");
const btnDelete = document.querySelector("#btn-x");
const ulTask = document.querySelector("#ul-task");
const firstLİ = document.querySelector("#first-li");
eventListeners();

function eventListeners() {

    //add event
  btnAdd.addEventListener("click", addNewItem);


  //delete an item
  ulTask.addEventListener("click",deleteItem)

  //delete all items
  btnAllDelete.addEventListener("click",deleteAllItems)
}

function addNewItem(e) {
  if (input.value === "") {
    alert("Please add item");
  }else{ 
  //create li
  const li=document.createElement('li')
  li.className='li'

  //create h3
  const h3=document.createElement('h3')
  h3.setAttribute('id','li-h3')
  h3.innerText=input.value

  //create button
  const button=document.createElement('button')
  button.setAttribute('id','btn-x')

  //create i
  const i_x=document.createElement('i')
  i_x.setAttribute('id','i-x')
  i_x.setAttribute('class','fa-solid fa-xmark')

  li.appendChild(h3)
  li.appendChild(button)
  button.appendChild(i_x)
  ulTask.appendChild(li)
  input.value=''
  
  }
  e.preventDefault();
}


function deleteItem(e){

    if(e.target.className==='fa-solid fa-xmark'){
    e.target.parentElement.parentElement.remove()}

    // if(e.target.className==='delete-All'){
    //     e.target.parentElement.parentElement.remove()}

    e.preventDefault();
}


function deleteAllItems(e){
if(confirm('Are you sure?')){
    ulTask.innerText=''

}
    e.preventDefault();
}