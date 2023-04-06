const form = document.querySelector('#form');
const title = document.querySelector('#title');
const text = document.querySelector('#task');
const submit = document.querySelector('#submit');
const msgErr = document.querySelector('#msgErr');
const taskContainer = document.querySelector('#taskContainer')
// const taskBox = document.querySelector('#taskBox');

form.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
    if (title.value.trim() === '' || text.value.trim() === '' )
    {
        msgErr.innerHTML = 'Please enter all fields';
        setTimeout(()=>msgErr.remove(), 3000);
    }
    else{
        taskContainer.innerHTML += `<li class="col-lg-3 col-md-4 col-sm-6 list-group text-center my-2 border p-1" id="taskBox">
        <div>${title.value}</div><div>${text.value}</div>
        <div class="buttonBox row justify-content-around">
            <button id="edit" type="button" class="btn bg-warning col-4">Edit</button>
            <button id="delete" type="button" class="btn bg-danger col-4">Delete</button>
        </div>
    </li>`
        title.value = '';
        task.value = '';
    }
}