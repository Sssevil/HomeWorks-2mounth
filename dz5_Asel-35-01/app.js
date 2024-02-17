// 1 задача
function getFullName (surname, name, middleName){
    return `${surname} ${name[0]}.${middleName[0]}`
}
console.log(getFullName('Жунушова','Асель','Сагынбековна'))

//2 задача
function getBookName (...booksName){
    let names = booksName.filter((book) => book.includes('у'))
    let names2 = booksName.filter((book) => !book.includes('у'))
    console.log(names)
    console.log(names2)
}
getBookName('Нулевой пациент', 'Симон','Туман','Великий Гэтсби','Грядущая буря')

//3 задача
const users = [
    {name:'Sevil', birthday:'14.08.2000'},
    {name:'Kate', birthday:'11.01.2005'},
    {name:'Nick', birthday:'10.07.1998'},
    {name:'Andrey', birthday:'30.08.1996'},
    {name:'Ivan', birthday:'06.05.2016'}
]
users.forEach((user) => console.log(`${user.name} родился ${user.birthday}`))

//4 задача
function isPalindrom (str){
    const string = str.toLowerCase()
    let stringWithoutSpaces= ''
    for (let i =0; i < string.length; i++){
        if (string[i] !== ' '){
            stringWithoutSpaces += string[i]
        }
    }

    let  reversedWord = ''
    for (let i =stringWithoutSpaces.length-1;i>=0; i--){
        reversedWord += stringWithoutSpaces[i]
    }

    let isPalindromic = ''
    for (let i = 0; i < stringWithoutSpaces.length; i++) {
        if (stringWithoutSpaces[i] === reversedWord[i]) {
            isPalindromic = `${str} - слово палиндром`
        } else {
            isPalindromic = `${str} - слово не палиндром`
        }
    }
    return console.log(isPalindromic)

}
isPalindrom('Казак')