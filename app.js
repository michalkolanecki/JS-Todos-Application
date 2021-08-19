const addForm = document.querySelector('.add');
const formList = document.querySelector('.todos');
const searchForm = document.querySelector('.search input');

const createTemplate = addTask => {
    const addHtml = `
        <li class="list-group-item d-flex justify-content-between align-items-center text-light">
            <span>${addTask}</span>
            <i class="far fa-trash-alt delete"></i>
        </li> 
    `;
    
    formList.innerHTML += addHtml;
}
//Add task
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const addTask = addForm.add.value.trim();

    if(addTask.length) {
        createTemplate(addTask);
        addForm.reset();
    }
});
//Delete task
formList.addEventListener('click', e => {
    if( e.target.classList.contains('delete') ) {
        e.target.parentElement.remove();
    }
});
//Filter task
const filterTasks = (term) => {
    Array.from(formList.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'))

    Array.from(formList.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'))    
};
//Search task
searchForm.addEventListener('keyup', () => {
    const term = searchForm.value.trim().toLowerCase();
    filterTasks(term);
});