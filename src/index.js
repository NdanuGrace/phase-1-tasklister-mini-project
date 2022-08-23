document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit' ,(e) =>{
    e.preventDefault();
    const newItem = document.getElementById("new-task-description").value 
    console.log(newItem);
    buildTask(newItem);
    
  })
}); 
function buildTask(task){
  const li = document.createElement("li")
  li.textContent = task

  const button = document.createElement("button")
  button.addEventListener('click' ,handleDelete);
  button.textContent = 'X';

  li.appendChild(button)
  const theList = document.querySelector('#tasks')
  theList.appendChild(li)
}

function handleDelete(e){
  e.target.parentNode.remove();
}