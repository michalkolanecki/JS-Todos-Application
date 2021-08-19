const addForm = document.querySelector('.add');
const formList = document.querySelector('.todos');

const createTemplate = addTask => {
    const addHtml = `
        <li class="list-group-item d-flex justify-content-between align-items-center text-light">
            <span>${addTask}</span>
            <i class="far fa-trash-alt delete"></i>
        </li> 
    `;
    
    formList.innerHTML += addHtml;
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const addTask = addForm.add.value.trim();

    if(addTask.length) {
        createTemplate(addTask);
        addForm.reset();
    }
});