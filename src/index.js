module.exports = function toReadable (number) {
    let numberToString = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight", 
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    let readableString = "";
    
    do  {
        if (numberToString[number]) {
            readableString += numberToString[number];
            break;
        }

        let strNumber = String(number);

        let firstNumber = Math.floor(number / Math.pow(10, strNumber.length - 1));
        
        let partitalStr = "";
        if (strNumber.length === 3) {
            partitalStr = `${numberToString[firstNumber]} hundred`;
        } else if (strNumber.length === 2) {
            partitalStr = `${numberToString[firstNumber * 10]}`;
        } else {
            partitalStr = `${numberToString[firstNumber]}`;
        }
        
        readableString += partitalStr;
        number %= Math.pow(10, strNumber.length - 1);
        if (number != 0) readableString += ' '; 

    } while (number > 0);

    return readableString;
}