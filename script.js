const input = document.querySelector("#newTask")
const addTaskBtn = document.querySelector("#buttonNewTask")
const lista = document.querySelector(".li")


const localStorageKey = "to-do-list"



function newTask1() {
    if(input.value.trim() == '') {
        alert("Digite algo para inserir na lista!")
    }
    else {
        let values = JSON.parse(localStorage.getItem(localStorageKey) ?? "[]")
        values.push({
            name: input.value
        })

        localStorage.setItem(localStorageKey, JSON.stringify(values))
        showValues()
    }

    input.innerHTML = input.value = ""


}


document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      newTask1();
    }
  });


function showValues() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) ?? "[]")
    let list = document.querySelector("#List")
    list.innerHTML = ""

    for(let i = 0; i < values.length; i++)
    {
        list.innerHTML += `<li> ${values[i]['name']}

        <div class="buttonsList">
    
    
            <button class="removeItem" onclick="removeItem('${values[i]['name']}')" ><img class="lixeira"
                    src="lixeira.png" alt=""></button>
    
            <button onclick="finishedTask('${values[i]['name']}')" class="finalizado"><img src="direito.png" alt="certo"></button>
    
    
        </div>
    
    
    
    </li>`

    }
}

showValues()


function removeItem(data) {
    let values = JSON.parse(localStorage.getItem(localStorageKey) ?? "[]")

    let index = values.findIndex(x => x.name == data);

    values.splice(index, 1)

    localStorage.setItem(localStorageKey, JSON.stringify(values))
    showValues()
}

showValues()




function finishedTask() {

}
