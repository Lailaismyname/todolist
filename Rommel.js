window.addEventListener('load', ()=>{
    let input = document.getElementById("input");
    let inputBtn = document.getElementById('btn-input');
    //maak item
    inputBtn.addEventListener('click', ()=>{
        const node = document.createElement('p');
        const nodeBtn = document.createElement('button');
        //voeg classes toe aan nieuwe kindjes
        nodeBtn.classList.add('deleteBtn');
        node.classList.add('node');
        const textnode = document.createTextNode(input.value);
        node.appendChild(textnode);
        document.getElementById('output').appendChild(node);
        document.getElementById('output').appendChild(nodeBtn);
        nodeBtn.textContent='x';
    })

    //delete item.
    document.getElementsByClassName('deleteBtn').addEventListener('click', (event)=>{
        alert("doe ik iets?");
        event.target.innerHTML = 'test';
        event.target.parentElement.remove();
        event.target.remove();
    })
    localStorage.setItem('iets', "diets");
    let iets = localStorage.getItem('iets');
    console.log(iets);
})

