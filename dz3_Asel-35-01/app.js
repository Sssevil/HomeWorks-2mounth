var tags=  ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol' , 'br' ]
var count= {}
for(var tag of tags){
    if( count[tag] === undefined){
        count[tag] = 1
    }else {
        count[tag]++
    }
}
console.log(count)


var firstArray = [1,2,3,45,32,56,61,23,12,2,34,5,6,3,76,67,87,76]
var secondArray = [1,45,32,3,4,2,56,76,67,87,89,8,56,54]
var newArray=[]

for ( var i = 0; i < firstArray.length; i++){
    if(secondArray.includes(firstArray[i])){
        newArray.push(firstArray[i])
    }
}
console.log(newArray)
