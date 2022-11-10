const maskedCreditCard = cardNumber => {
    //using type coersion to transforme the credit car number in string
    cardNumber += ''; 
    
    return cardNumber.slice(-4).padStart(cardNumber.length, '*')
    /* the slice method returns the last four elements of the string,
     then the paddStart adds the * character usgin the length of the
     original string as a parameter so at the end of the operation 
     a new string of same size will be formed by * characters
     and the last four elements of the credit card string.*/
}
let creditCardNumber = 5158643875439856
console.log(maskedCreditCard(creditCardNumber))
//will print to the console: ************9856