window.addEventListener('load', ()=>{
    let input = document.getElementById("input");
    let inputBtn = document.getElementById('btn-input');
    inputBtn.addEventListener('click', ()=>{
        console.log(input.value);
        //oke append child. Als eerste maak je een variabel/node aan die een het nieuwe element creeert.
        const node = document.createElement('p');
        const nodeBtn = document.createElement('button');
        //Dan maak een variabel met de inhoud van het nieuwe element.
        const textnode = document.createTextNode(input.value);
        //dan doe je append child
        node.appendChild(textnode);
        //dan stop je de node in het parent element. dus in dit geval de output div. 
        document.getElementById('output').appendChild(node);
        document.getElementById('output').appendChild(nodeBtn);
        nodeBtn.textContent='x';
        nodeBtn.setAttribute('class','deleteBtn');
    })
    document.querySelectorAll('deleteBtn').addEventListener('click', (event)=>{
        console.log(event.target);
    })
})

//nog een knop toevoegen die de inhoud weer verwijderd en deze werkend maken.
//de knop kan denk ik ook met append child. id toevoegen ff googlen hoe. 