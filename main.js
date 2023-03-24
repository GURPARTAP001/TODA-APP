//this will execute the function when the window get loaded
window.addEventListener('load',()=>{
    const form=document.querySelector("#new-task-form");
    const input=document.querySelector("#new-task-input");
    const list_el=document.querySelector("#tasks");

    form.addEventListener('submit',(e)=>{
        e.preventDefault();//this will prevent the page from geting refreshed when the submit is hit

        const task=input.value;
        if(!task){
            alert("Nothing to add please give valid task to add ")
            return;
        }

        const task_el=document.createElement("div");//her we are creating the div
        task_el.classList.add("task");//here we are adding the class=task to the new created div

        const task_content_el=document.createElement("div");//agian creating a div

        task_content_el.classList.add("content");//adding the class name to the div that we have created

        // task_content_el.innerText=task;//setting the content inside of the task-content-el
        task_el.appendChild(task_content_el);//putting the div inside the another div

        const task_input_el=document.createElement("input");//create the input element
        task_input_el.classList.add("text");//adding the class to it
        task_input_el.type="text";//setting the input attributes
        task_input_el.value=task;
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
        input.value="";//setting the input value to nothing


        // adding the functionallity to the edit and delete buttons

        task_edit_el.addEventListener('click',()=>{

            if(task_edit_el.innerText.toLowerCase()=="edit")
            {
                task_input_el.removeAttribute("readonly");
            task_input_el.focus();//this will focus the cursor to the place where we have to start editing
            task_edit_el.innerText="Save";//as soon as we press the edit the now the edit button will change to the save button
            }
            else
            {
                task_input_el.setAttribute("readonly","readonly");
                task_edit_el.innerText="Edit";
            }
        });

        task_delete_el.addEventListener('click',()=>{
            list_el.removeChild(task_el);//just removing the child
        })

    })
})