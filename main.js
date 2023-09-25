window.addEventListener('load', ()=>{
    let score = Number(localStorage.getItem('score')) || 0;
    let lazyBones = Number(localStorage.getItem('lazyBones')) || 0;
    let userName = localStorage.getItem('username') || 'type your name here';
    const input = document.querySelector('#input');
    const addToDoBtn = document.querySelector('#btn-input');
    const output = document.querySelector('#output');
    const actTtracker = document.querySelector('#actTracker');
    const userNameInput = document.querySelector('#userName');
    let toDoItems = JSON.parse(localStorage.getItem('toDoList')) || [];

    function clearToDo(arr,spliceStart,parentItem){
        arr.splice(spliceStart,1);
        parentItem.remove();
        localStorage.setItem('toDoList', JSON.stringify(arr));
    }

    printToDo(toDoItems);
    actTtracker.innerHTML = `You did <span class="grey-text">${score}</span> things and you have <span class="grey-text">${lazyBones}</span> lazy bones!`;
    userNameInput.value = JSON.parse(localStorage.getItem('username'));
    userNameInput.addEventListener('blur', (event)=>{
        localStorage.setItem('username',JSON.stringify(userNameInput.value));
    })

    addToDoBtn.addEventListener('click', (event)=>{
        if(input.value !== ''){
            toDoItems.unshift(input.value);
        localStorage.setItem('toDoList', JSON.stringify(toDoItems));
        output.innerHTML = '';
        printToDo(JSON.parse(localStorage.getItem('toDoList')))
        input.value = '';
        }
        else{
            input.placeholder = 'Typ hier je to do item';
        }
    })

    function printToDo(array){
        for(let i = 0; i < array.length; i++){
            let inputToDo = `<li class="toDoLi"><button class="doneBtn btnStyle">Done</button><span class="toDo">${array[i]}</span><button class="delBtn btnStyle">X</button></li>`;
            document.getElementById('output').innerHTML += inputToDo;
        }
    }
    output.addEventListener('click', (event)=>{
        const parentItem = event.target.parentElement;
        if(event.target.classList.contains('doneBtn')){
            let spliceStartDone = toDoItems.indexOf(event.target.nextElementSibling.textContent);
           clearToDo(toDoItems,spliceStartDone,parentItem);
           score++;
           localStorage.setItem('score', score);
           actTtracker.textContent = `You did ${score} things and you have ${lazyBones} lazy bones!`;
        }
        else if(event.target.classList.contains('delBtn')){
            let spliceStartDel = toDoItems.indexOf(event.target.previousElementSibling.textContent);
            clearToDo(toDoItems,spliceStartDel,parentItem);
            lazyBones++;
            localStorage.setItem('lazyBones', lazyBones);
            actTtracker.textContent = `You did ${score} things and you have ${lazyBones} lazy bones!`;
        }
    })
})
