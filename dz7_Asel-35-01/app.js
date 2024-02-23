const buttonShow= document.querySelectorAll('.btn')
const answer = document.querySelectorAll('span')


for (let i = 0; i < buttonShow.length; i++) {
    buttonShow[i].onclick = () => {
        answer[i].classList.toggle('hide')
        if (answer[i].classList.contains('hide')){
            buttonShow[i].innerHTML='Скрыть ответ'
        }else {
            buttonShow[i].innerHTML='Показать ответ'
        }
    }
}
