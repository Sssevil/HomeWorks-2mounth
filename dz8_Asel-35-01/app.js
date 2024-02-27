const movies = [
    {title:'Avatar',year:2012, ratings:8, director:'Kin Blansh'},
    {title:'Twilight',year:2010, ratings:10, director:'Asel Marry'},
    {title:'Dead Walk',year:2008, ratings:8, director:'Alex Martin'},
    {title:'Prince',year:1998, ratings:10, director:'Martin K'},
    {title:'Robin Good',year:2011, ratings:6, director:'Black Snow'}
]

const table= document.getElementById('movie_table')
const modal = document.querySelector('.modal')
const btn=document.getElementById('btn')
const btnClose = document.querySelector('.close')
let gray

movies.forEach((movie,index)=>{
    let row= table.insertRow(-1)
    row.insertCell(0).innerText=movie.title
    row.insertCell(1).innerText=movie.year
    row.insertCell(2).innerText=movie.ratings
    row.insertCell(3).innerText=movie.director
    let buyButton= row.insertCell(4)
    buyButton.innerHTML='<button class="buyButton">Buy</button>'
})

table.addEventListener('click', (e) => {
    if (e.target.className ==='buyButton'){
        modal.style.display='block'
        gray = e.target.parentElement
    }
})

btn.addEventListener('click', ()=> {
    gray.innerText = ''
    modal.style.display='none'
    gray.classList.add('hide')
})

btnClose.addEventListener('click',()=>{
    modal.style.display='none'
})

