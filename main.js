//this will execute the function when the window get loaded
window.addEventListener('load',()=>{

    todos = JSON.parse(localStorage.getItem('todos')) || [];
    const form=document.querySelector("#new-task-form");
    const input=document.querySelector("#new-task-input");
    const list_el=document.querySelector("#tasks");

    //according to the below line when the submit is pressed inside the form the folloing function get executed
    form.addEventListener('submit',(e)=>{
        //e is the event object(it tell about the type of the event occured and the object it targets)
        e.preventDefault();//this will prevent the page from geting refreshed when the submit is hit

        const task=input.value;//now the task contains the content present inside the input(new-task-input)
        if(!task){
            alert("Nothing to add please give valid task to add ")
            return;//we will go out of the form.addeventlistener()
        }
        const todo = {
			content: e.target.elements.content.value,
			// category: e.target.elements.category.value,
			// done: false,
			createdAt: new Date().getTime()
		}

		todos.push(todo);

		localStorage.setItem('todos', JSON.stringify(todos));

		// Reset the form
        e.target.reset();
        DisplayTodos()
    })
    DisplayTodos()
})


function DisplayTodos () {

    // const form=document.querySelector("#new-task-form");

    // const input=document.querySelector("#new-task-input");

    const list_el=document.querySelector("#tasks");
    list_el.innerHTML="";

    //by doing the foreach we are defining these features for all the todos 
    todos.forEach(todo=>{

        //HERE THE DO REPRESENT THE CURRENT ELEMENT ON WHICH WE ARE
        const task_el=document.createElement("div");//her we are creating the div
    task_el.classList.add("task");//here we are adding the class=task to the new created div

    const task_content_el=document.createElement("div");//agian creating a div

    task_content_el.classList.add("content");//adding the class name to the div that we have created

    // task_content_el.innerText=task;//setting the content inside of the task-content-el
    task_el.appendChild(task_content_el);//putting the div inside the another div

    const task_input_el=document.createElement("input");//create the input element
    task_input_el.classList.add("text");//adding the class to it
    task_input_el.type="text";//setting the input attributes
    task_input_el.value=todo.content;
    task_input_el.setAttribute("readonly","readonly");

    task_content_el.appendChild(task_input_el);


    // adding the container for the buttons
    const task_actions_el=document.createElement("div")
    task_actions_el.classList.add("actions");

    // creating the buttons
    const task_edit_el=document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML="Edit"

    const task_delete_el=document.createElement("button")
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML="Delete"


    // appending the created childs
    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);//again putting the div inside the another div
    // input.value="";//setting the input value to nothing after the task is added to the list.


    // adding the functionallity to the edit and delete buttons

    task_edit_el.addEventListener('click',(e)=>{

            task_input_el.removeAttribute("readonly");
        task_input_el.focus();//this will focus the cursor to the place where we have to start editing
        task_edit_el.innerText="Save";//as soon as we press the edit the now the edit button will change to the save button
        task_edit_el.addEventListener('click',(e)=>{
            task_input_el.setAttribute("readonly",true);
            todo.content = task_input_el.value;
            localStorage.setItem('todos', JSON.stringify(todos));
            task_edit_el.innerText="Edit";
				DisplayTodos();
        })
    })

    // task_delete_el.addEventListener('click',(e)=>{
    //     list_el.removeChild(task_el);//just removing the child
    // })
    task_delete_el.addEventListener('click', (e) => {
        // here "t" are the elements of the array todos
        // filter makes the array of all the items that don't match the present todo
        // t!=todo will return true for all the todos that are not equal to the current todo
        todos = todos.filter(t => t != todo);
        localStorage.setItem('todos', JSON.stringify(todos));
        DisplayTodos()
    })

    })

    


}