window.addEventListener('load', ()=>{
    let score = Number(localStorage.getItem('score')) || 0;
    let lazyBones = Number(localStorage.getItem('lazyBones')) || 0;
    let userName = localStorage.getItem('username') || 'type your name here';
    //Buttons en input
    const input = document.querySelector('#input');
    const addToDoBtn = document.querySelector('#btn-input');
    const output = document.querySelector('#output');
    const actTtracker = document.querySelector('#actTracker');
    const userNameInput = document.querySelector('#userName');
    //maak array met items uit local storage OF gewoon een lege. Logical kan ook in variabel, weer wat geleerd
    let toDoItems = JSON.parse(localStorage.getItem('toDoList')) || [];

    function clearToDo(arr,spliceStart,parentItem){
        //verwijdert element uit de array, uit het scherm en update de local storage
        arr.splice(spliceStart,1);
        parentItem.remove();
        localStorage.setItem('toDoList', JSON.stringify(arr));
    }

    //als de pagina geladen is print de todo's, activity tracker en naam
    printToDo(toDoItems);
    actTtracker.textContent = `You did ${score} things and you have ${lazyBones} lazy bones!`;
    userNameInput.value = JSON.parse(localStorage.getItem('username'));
    //eventlistener op username invoer
    userNameInput.addEventListener('blur', (event)=>{
        localStorage.setItem('username',JSON.stringify(userNameInput.value));
    })

    addToDoBtn.addEventListener('click', (event)=>{
        if(input.value !== ''){
            toDoItems.unshift(input.value);
        //sla op in local storage
        localStorage.setItem('toDoList', JSON.stringify(toDoItems));
        //Leeg het scherm
        output.innerHTML = '';
        //print todo's
        printToDo(JSON.parse(localStorage.getItem('toDoList')))
        //leeg todo input
        input.value = '';
        }
        else{
            input.placeholder = 'Typ hier je to do item';
        }
    })

    //Print de To Do List op het scherm
    function printToDo(array){
        for(let i = 0; i < array.length; i++){
            let inputToDo = `<li class="toDoLi"><button class="doneBtn btnStyle">Done</button><span class="toDo">${array[i]}</span><button class="delBtn btnStyle">X</button></li>`;
            document.getElementById('output').innerHTML += inputToDo;
        }
    }
    //delete en done knop
    output.addEventListener('click', (event)=>{
        const parentItem = event.target.parentElement;
        if(event.target.classList.contains('doneBtn')){
            //zoek element in de array
            let spliceStartDone = toDoItems.indexOf(event.target.nextElementSibling.textContent);
            //verwijder element uit array en scherm
           clearToDo(toDoItems,spliceStartDone,parentItem);
           score++;
           localStorage.setItem('score', score);
           actTtracker.textContent = `You did ${score} things and you have ${lazyBones} lazy bones!`;
        }
        else if(event.target.classList.contains('delBtn')){
            //zoek element in de array
            let spliceStartDel = toDoItems.indexOf(event.target.previousElementSibling.textContent);
            //verwijder element uit array en scherm
            clearToDo(toDoItems,spliceStartDel,parentItem);
            lazyBones++;
            localStorage.setItem('lazyBones', lazyBones);
            actTtracker.textContent = `You did ${score} things and you have ${lazyBones} lazy bones!`;
        }
    })
})
