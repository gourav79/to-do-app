const input = document.getElementById('taskInput');
const btu = document.getElementById('addBtn');
const list = document.getElementById('taskList');

btu.addEventListener("click",add);

function add(){
 if(input.value === ''){
    alert("Enter task");
    return;
 }
 const li = document.createElement("li");
 li.textContent = input.value;
 
 list.appendChild(li);
 li.addEventListener("click", () => {
   li.remove(); 
 })
 input.value = '';
 }
