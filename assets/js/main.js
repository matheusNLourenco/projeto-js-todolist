const input = document.querySelector('.input-button input')
const button = document.querySelector('.input-button button')
const listElement = document.querySelector('.tasks-list')
const numberTask = document.querySelector('.number-tasks')

const tasks = []

input.addEventListener('keyup', (e)=>{
    if(e.keyCode == 13){
        addTask()
    }
})  

function showTask(){
    listElement.innerHTML = ''

    for(let item of tasks){
        const itemList = document.createElement('li')
        const itemText = document.createTextNode(item)

        const removeItem = document.createElement('i')
        removeItem.setAttribute('class', 'fas fa-trash')
        
        const pos = tasks.indexOf(item)

        removeItem.setAttribute('onclick', `removeTask(${pos})`)

        itemList.appendChild(itemText)
        itemList.appendChild(removeItem)

        listElement.appendChild(itemList)
    }
}

function addTask(){
    const task = input.value
    numberTask.innerHTML = ''

    tasks.push(task)

    input.value = ''

    if(tasks.length !== 0 )
        numberTask.innerHTML = tasks.length
   

    showTask()
}

button.setAttribute('onclick', 'addTask()')

function removeTask(pos){
    tasks.splice(pos, 1)

    if(tasks.length !== 0 )
        numberTask.innerHTML = tasks.length
    else
        numberTask.innerHTML = '0'

    showTask()
}

