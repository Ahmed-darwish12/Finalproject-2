let inputData = document.getElementById("taskData");
let btnAdd =  document.getElementById("btnAdd");
let noTask = document.getElementById("noTask");
let tasks = document.getElementById('tasks');
let model = document.getElementById('model');
let btnModel = document.getElementById('btnModel');
let closee = document.getElementById('close');



let showModel = () => {
    model.classList.toggle('block');
}
closee.addEventListener('click' , showModel)
btnModel.addEventListener('click' , showModel)


let nShowTask = () => {
    if(tasks.childElementCount == 0) {
        noTask.classList.remove('none')
    }
}

let addTask = () => {   
   let task = inputData.value 
   if(task.trim() == 0 || inputData.value.length < 3 || inputData.value.length > 20) {
       alert('You must enter valid data')
   } else {
       noTask.classList.add('none')
       tasks.innerHTML += `
       <div class="alert alert-info">
       ${task} 
       <button class=" delete btn btn-danger float-right">
      Delete 
      </button>
       </div>`;
       showModel();
       inputData.value ="";

       document.addEventListener('click' , function (e) {
        if (e.target.classList.contains('delete')) {
            e.target.parentElement.remove()
            nShowTask();
        }
       })
      
       let check = (e) => {
           if(e.target.classlist.contains('task')) {
               e.target.classList.add('check');
           }
       }

       tasks.addEventListener('click' , check)
     // let newDiv = document.createElement('div')
     // newDiv.classList = "alert alert-info";
    // newDiv.innerText = task;
     // tasks.append(newDiv);

    //  let btnDelete = document.createElement('button')
     //  btnDelete.classList = "btn btn-danger";
     //  btnDelete.innerText = 'Delete';
     //  newDiv.append(btnDelete);
     //  tasks.append(newDiv) //
   }
}

btnAdd.addEventListener('click' , addTask);

jQuery("#responsive_headline").fitText();
