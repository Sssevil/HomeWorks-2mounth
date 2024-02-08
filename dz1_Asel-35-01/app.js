var month = prompt('Введите месяц рождения')
var dateOfBirth = prompt('Введите день рождения')
if(month === 'март' && dateOfBirth >=21 && dateOfBirth <=31 || month ==='апрель' && dateOfBirth >=1 && dateOfBirth <=20){
    alert("Ваш знак зодиака Овен")
}else if (month === 'апрель' && dateOfBirth >=21 && dateOfBirth <=30 || month ==='май' && dateOfBirth >=1 && dateOfBirth <=20){
    alert('Ваш знак зодиака Телец')
}else if (month === 'май' && dateOfBirth >=21 && dateOfBirth <=31 || month ==='июнь' && dateOfBirth >=1 && dateOfBirth <=21){
    alert('Ваш знак зодиака Близнецы')
}else if (month === 'июнь' && dateOfBirth >=22 && dateOfBirth <=30 || month ==='июль' && dateOfBirth >=1 && dateOfBirth <=22){
    alert('Ваш знак зодиака Рак')
}else if (month === 'июль' && dateOfBirth >=23 && dateOfBirth <=31 || month ==='август' && dateOfBirth >=1 && dateOfBirth <=23){
    alert('Ваш знак зодиака Лев')
}else if (month === 'август' && dateOfBirth >=24 && dateOfBirth <=31 || month ==='сентябрь' && dateOfBirth >=1 && dateOfBirth <=23){
    alert('Ваш знак зодиака Дева')
}else if (month === 'сентябрь' && dateOfBirth >=24 && dateOfBirth <=30 || month ==='октябрь' && dateOfBirth >=1 && dateOfBirth <=23){
    alert('Ваш знак зодиака Весы')
}else if (month === 'октябрь' && dateOfBirth >=24 && dateOfBirth <=31 || month ==='ноябрь' && dateOfBirth >=1 && dateOfBirth <=22){
    alert('Ваш знак зодиака Скорпион')
}else if (month === 'ноябрь' && dateOfBirth >=23 && dateOfBirth <=30 || month ==='декабрь' && dateOfBirth >=1 && dateOfBirth <=21){
    alert('Ваш знак зодиака Стрелец')
}else if (month === 'декабрь' && dateOfBirth >=22 && dateOfBirth <=31 || month ==='январь' && dateOfBirth >=1 && dateOfBirth <=20){
    alert('Ваш знак зодиака Козерог')
}else if (month === 'январь' && dateOfBirth >=21 && dateOfBirth <=31 || month ==='февраль' && dateOfBirth >=1 && dateOfBirth <=20){
    alert('Ваш знак зодиака Водолей')
}else if (month === 'февраль' && dateOfBirth >=21 && dateOfBirth <=29 || month ==='март' && dateOfBirth >=1 && dateOfBirth <=20){
    alert('Ваш знак зодиака Рыбы')
}else {
    alert('Неправильно ввели данные')
}