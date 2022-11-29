
let king = ""
let queen = ""
let resultImages = ["assets/friends.png", "assets/lovers.png", "assets/affectionative.png", "assets/marriage.png", "assets/enemies.png", "assets/secretlovers.png"];

let flamesObject = {
    0: 'you guys are Friends',
    1: 'you guys are Lovers',
    2: 'you are Affecanative',
    3: 'you guys will get Married',
    4: 'You guys were Enemies',
    5: 'You guys are Secret lovers',
}

function predict(){
    king = document.getElementById("kingName").value;
    queen = document.getElementById("queenName").value;
    
    let kingArray = king.split('');
    let queenArray = queen.split('');

    // console.log(kingArray, queenArray);
    let uniqueNumber = 0;
    if (kingArray.length > queenArray.length) {
        uniqueNumber = getUniqueValue(kingArray, queenArray);
    } else {
        uniqueNumber = getUniqueValue(queenArray, kingArray);
    }

    let relationship = getRelationship(uniqueNumber);
    let imageSrc = resultImages[relationship];
    console.log(uniqueNumber);

    let mainElement = document.getElementById("mainInterface");

    mainElement.classList.add("hide");

    let resultElement = document.getElementById("result");
    resultElement.innerHTML = flamesObject[relationship];
    let imageElement = document.getElementById("resultImage");
    console.log(imageSrc, imageElement);
    imageElement.src = imageSrc;
}






function getUniqueValue(array1, array2) {
    for (let index = 0; index < array1.length; index++){
        let foundIndex = array2.indexOf(array1[index]);
        if (foundIndex >= 0) {
            array2[foundIndex] = 0;
            array1[index] = 0;
        }
        
    }
    let combinedArray = array1.concat(array2);
    let resultArray = [];
    for (let i = 0; i < combinedArray.length; i++){
        if (combinedArray[i] != 0) {
            resultArray.push(combinedArray[i]);
        }
    }

    return resultArray.length;
}

function getRelationship(value) {
    let finalval = value % 6;
    


    return finalval;
}