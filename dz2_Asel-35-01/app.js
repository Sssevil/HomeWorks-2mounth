var arrayNumbers = [34, 65, 67, 89, 8, 9, 23, 21, 10, 23, 28]
for (var i = 0; i < arrayNumbers.length; i++) {
     var evenNumber= arrayNumbers[i]
     if (evenNumber % 2 === 0) {
         console.log(evenNumber)
     }
}

var cinema = {
    twilight: {
        genres: {
            firstGenre:'vampire',
            secondGenre:'romance',
            thirdGenre:'action'
        },
        datePremiere:'21.05.2012',
        priceTicket:'10 $',
        durationHour: 2,
        mainActors:{
            KristenSteward:'Bella',
            RobertPattinson:'Edward'
        },
        halls: {
            firstHall:'2D',
            secondHall:'3D'
        }
    },
    Rapunzel: {
        genres: {
            firstGenre:'adventure',
            secondGenre:'comedy',
            thirdGenre:'cartoon'
        },
        datePremiere:'24.09.2010',
        priceTicket:'9 $',
        durationHour: 2,
        voiceActing:{
            VictoriaDaineko:'Rapunzel',
            AndreyBirin:'Flin Raider'
        },
        halls: {
            firstHall:'2D',
            secondHall:'3D'
        }
    }
}
console.log(cinema)

var number = Number(prompt('Введите число'))
switch (number) {
    case 1:
        console.log("1 -> I")
        break
    case 2:
        console.log("2 -> II")
        break
    case 3:
        console.log("3 -> III")
        break
    case 4:
        console.log("4 -> IV")
        break
    case 5:
        console.log("5 -> V")
        break
    case 6:
        console.log("6 -> VI")
        break
    case 7:
        console.log("7 -> VII")
        break
    case 8:
        console.log("8 -> VIII")
        break
    case 9:
        console.log("9 -> IX")
        break
    case 10:
        console.log("10 -> X")
        break
    case 11:
        console.log("11 -> XI")
        break
    case 12:
        console.log("12 -> XII")
        break
    case 13:
        console.log("13 -> XIII")
        break
    case 14:
        console.log("14 -> XIV")
        break
    case 15:
        console.log("15 -> XV")
        break
    default:
        console.warn('Invalid Currency')
}
