
function printDigits(num){
    while (num > 0){
        let lastDigit =  num % 10
        console.log(lastDigit)
        num = Math.ceil(num/10)
        num--
    }
}

// printDigits(1)
// printDigits(314)
// printDigits(12)
