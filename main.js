window.addEventListener('load', ()=>{
    let input = document.getElementById("input");
    let inputBtn = document.getElementById('btn-input');
    let output = document.getElementById("output");
    output.innerHTML = localStorage.getItem('toDoList' ,output);
    //maak item
    inputBtn.addEventListener('click', ()=>{
        const toDoItem =    `<li class='toDoLi'>
                            <p class='toDo'>${input.value}</p>
                            <button class="doneBtn btnStyle">Done</button>
                            <button class="delBtn btnStyle">Delete</button>
                            </li>`; 
        if(input.value !== ''){
            output.innerHTML += toDoItem;
        }
        console.log(output);
        localStorage.setItem('toDoList', output)
    })
    
    //delete item   
    output.addEventListener('click',(event)=>{
        const parentElement = event.target.parentElement; 
        if(event.target.classList.contains('doneBtn')){
            parentElement.remove();
        }
        else if(event.target.classList.contains('delBtn')){
            parentElement.remove();
            console.log('niet gedaan');
        }
        localStorage.setItem('toDoList', output);
        })
   


    //je hebt 3 phases, capture phase die gaat van ouder naar kind
    //en catch. die ??
    //bubbling phase die van kind naar ouder. 
    //default is bubble en door die true toe te voegen als derde parameter gaat ie over tot  captuure
})


// TODO mooi maken
// shit opslaan in local storage
// punten systeem toevoegen want gamifying shit maakt alles beter. 
// rank toevoegen en mischien een rank meter? en dan badges voor elke rank ofzo
//bijhouden hoeveel er niet gedaan zijn. En dan om de zoveel niet gedaan trek je een punt af ofzo?

//oke die localstorage gaat niet helemaal goed... ff uitzoeke hoe ik dit moet doen? 
        