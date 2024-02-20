const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList =document.querySelector('#todo_list')
const createTodo = ()=> {
    if (input.value.trim()===''){
        return alert('Нельзя вводить пустоту или пробелы')
    }

    const  div = document.createElement('div')
    div.setAttribute('class', 'block_text')

    const divButtons = document.createElement('div')
    divButtons.setAttribute('class','div_button')

    const text = document.createElement('h3')
    const deleteButton= document. createElement('button')
    deleteButton.setAttribute('class','delete_button')
    function deleteToDo (){
        document.querySelector('.modal_delete').style.display='block'
        document.querySelector('.overlay').style.display = 'block';
        const okBtn = document.querySelector('.btn_ok')
        const noBtn = document.querySelector('.btn_no')
        okBtn.onclick = () => {
            div.remove()
            document.querySelector('.modal_delete').style.display='none'
            document.querySelector('.overlay').style.display = 'none';
        }
        noBtn.onclick=() => {
            document.querySelector('.modal_delete').style.display='none'
            document.querySelector('.overlay').style.display = 'none';
        }
    }
    deleteButton.onclick=()=> deleteToDo()

    const editButton= document. createElement('button')
    editButton.setAttribute('class','edit_button')
    function editToDo (){
        document.querySelector('.modal_edit').style.display='flex'
        document.querySelector('.overlay').style.display = 'block';
        const editInput= document.querySelector('#edit_input')
        const btnEditOk = document.querySelector('.btn_edit_ok')
        const btnEditNO = document.querySelector('.btn_edit_no')

        btnEditOk.onclick =()=> {
            if(editInput.value.trim() ===''){
                return alert('нельзя вводить пустоту')
            } else {
                text.textContent = editInput.value
                document.querySelector('.modal_edit').style.display='none'
                document.querySelector('.overlay').style.display = 'none';
            }
            editInput.value = ''
        }
        btnEditNO.onclick=()=>{
            document.querySelector('.modal_edit').style.display='none'
            document.querySelector('.overlay').style.display = 'none';
        }
    }
    editButton.onclick =()=> editToDo()


    deleteButton.innerHTML = 'Delete'
    editButton.innerHTML = 'Edit'
    text.innerHTML = input.value

    divButtons.append(deleteButton,editButton)
    div.append(text,divButtons)
    input.value=''
    todoList.prepend(div)

    text.addEventListener('click', ()=> text.classList.toggle('toggle'))

}

createButton.onclick = () => createTodo()
window.onkeydown =(event) => {
    // console.log(event.code)
    if (event.code ==='Enter'){
        createTodo()
    }
}


