window.addEventListener('load', ()=>{
    //Buttons en input
    const input = document.querySelector('#input');
    const addToDoBtn = document.querySelector('#btn-input');
    const output = document.querySelector('#output');

    //maak array met items uit local storage OF gewoon een lege. Logical kan ook in variabel, weer wat geleerd
    let toDoItems = JSON.parse(localStorage.getItem('toDoList')) || [];

    function clearToDo(arr,spliceStart,parentItem){
        //verwijdert element uit de array, uit het scherm en update de local storage
        arr.splice(spliceStart,1);
        parentItem.remove();
        localStorage.setItem('toDoList', JSON.stringify(arr));
    }

    //als de pagina geladen is print de todo's
    printToDo(toDoItems);

    addToDoBtn.addEventListener('click', (event)=>{
        if(input.value !== ''){
            toDoItems.unshift(input.value);
        //console.log(toDoItems);
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

        }
        else if(event.target.classList.contains('delBtn')){
            //zoek element in de array
            let spliceStartDel = toDoItems.indexOf(event.target.previousElementSibling.textContent);
            //verwijder element uit array en scherm
            clearToDo(toDoItems,spliceStartDel,parentItem);
        }
    })
})



//wat kan ik hier nog aan toevoegen? rank system met badges ofzo? en punten aftrek als er een item verwijderd word zonder gedaan te zijn?