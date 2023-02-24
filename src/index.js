module.exports = function toReadable (number) {
    if(number.toString().length == 1){
        return getFirstNum(number)
    }
    if(number.toString().length == 2 && number < 20){
        return getTeensNum(number)
    }
    if(number.toString().length == 2 && number > 19){
        if(number.toString()[1] == '0'){
            return getSecondNum(number.toString()[0])
        } else {
            return getSecondNum(number.toString()[0]) + ' ' + getFirstNum(number.toString()[1])
        }
    }
    if(number.toString().length == 3 ){
        if(number.toString()[1] == '0' && number.toString()[2] == '0'){
            return getFirstNum(number.toString()[0]) + ' hundred'
        }
        if(number.toString()[1] == '0'){
            return getFirstNum(number.toString()[0]) + ' hundred ' + getFirstNum(number.toString()[2])
        }
        if(number.toString()[1] == '1'){
            return getFirstNum(number.toString()[0]) + ' hundred ' + getTeensNum(number.toString()[1] + number.toString()[2])
        }
        if(number.toString()[2] == '0'){
            return getFirstNum(number.toString()[0]) + ' hundred ' + getSecondNum(number.toString()[1])
        }
            
        return getFirstNum(number.toString()[0]) + ' hundred ' + getSecondNum(number.toString()[1]) + ' ' +  getFirstNum(number.toString()[2])
        
    }
    console.log(number)
}
function getFirstNum(number){
    switch(parseInt(number)){
        case 0: return 'zero'
        case 1: return 'one'
        case 2: return 'two'
        case 3: return 'three'
        case 4: return 'four'
        case 5: return 'five'
        case 6: return 'six'
        case 7: return 'seven'
        case 8: return 'eight'
        case 9: return 'nine'
    }
}

function getSecondNum(number){   
    switch(parseInt(number)){
        case 2: return 'twenty'
        case 3: return 'thirty'
        case 4: return 'forty'
        case 5: return 'fifty'
        case 6: return 'sixty'
        case 7: return 'seventy'
        case 8: return 'eighty'
        case 9: return 'ninety'
    }
}
 
function getTeensNum(number){
    switch(parseInt(number)){
        case 10: return 'ten'
        case 11: return 'eleven'
        case 12: return 'twelve'
        case 13: return 'thirteen'
        case 14: return 'fourteen'
        case 15: return 'fifteen'
        case 16: return 'sixteen'
        case 17: return 'seventeen'
        case 18: return 'eighteen'
        case 19: return 'nineteen'
    }

}

