const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


function showResults (n) {
const main = document.body
const paragraph = document.createElement('p')
const value = document.createTextNode(n)
main.appendChild(paragraph)
paragraph.appendChild(value)
}




   // KATA 1 -> 1 A 25 
function kata1() {
    let arr = []
    for(let i = 1; i<=25; i++) {
        arr.push(i) 
    }
    showResults(arr)
}

kata1()


// KATA 2 -> 25 A 1
function kata2() {
    let arr = []
    for (let i = 25; i>0; i--){
        arr.push(i)
    }
    showResults(arr)
}
kata2()



// KATA 3 ->  -1 A -25 
function kata3() {
    let arr = []
    for (let i = 1; i <= 25; i++){
        arr.push(i*-1)
    }
    showResults(arr) 
}

kata3()

 // KATA 4 -> -25 A -1 
function kata4() {
    let arr = []
   for (let i = 25; i>0; i--){
       arr.push(i*-1)
   }
   showResults(arr)
}
kata4()



 // KATA5 -> Impares de 25 A -25
function kata5() {
    let arr = []
    for (let i = 25; i>=-25; i--){
        if(i%2 !== 0) {
            arr.push(i)  
        }
        
    }
    showResults(arr)
}
kata5()

 // KATA 6 -> DIVISIVEIS POR 3 ATE O 100
function kata6() {
   let arr = []
    for (let i = 3; i<100; i++){
        if (i%3 === 0) {
            arr.push(i)
        }
    }
    showResults(arr)

}
kata6()


// KATA 7 -> DIVISIVEIS POR 7 ATE O 100 
function kata7() {
    
    let arr = []
    for (let i = 7; i<100; i++){
        if (i%7 === 0) {
            arr.push(i)
        }
    }
    showResults(arr)
}
kata7()

// KATA 8 -> EXIBIR NUMEROS DIVISIVEIS POR 3 E 7 REGRESSIVAMENTE 
function kata8() {
    let arr = []
    for (let i = 100; i>0; i--){
        if(i%3 === 0 ){
            arr.push(i)
        }
        if(i%7 === 0){
            arr.push(i)
        }   
    }
    showResults(arr)
}
kata8()


 // KATA 9 -> NUMEROS IMPARES DIVISIVEIS POR 5 ATE 100
function kata9() {
    let arr = [] 
    for (let i = 1; i<100; i++){
       if (i%5 === 0 && i%2!==0){
        arr.push(i)
       }
    }
    showResults(arr)
}
kata9()

//KATA 10 - EXIBIR OS 20 VALORES DO SAMPLEARRAY
function kata10() {
    showResults(sampleArray) 
}
kata10()

// KATA 11 -> NUMEROS PARES DE SAMPLEARRAY
function kata11() {
let arr = []
for(let i = 0; i<sampleArray.length; i++) {
    if(sampleArray[i] % 2 === 0) {
        arr.push(sampleArray[i])
    }
}
showResults(arr)
  
}
kata11()




// KATA 12 TODOS OS NUMEROS IMPARES DE SAMPLEARRAY
function kata12() {
   
    let arr = []
for(let i = 0; i<sampleArray.length; i++) {
    if(sampleArray[i] % 2 !== 0) {
        arr.push(sampleArray[i])
    }
}
showResults(arr)
  
}
kata12()


// KATA 13 -> Exibir os numeros divisiveis por 8 de SampleArray
function kata13() {
    let arr = []
    for(let i = 0; i<sampleArray.length; i++) {
        if(sampleArray[i] % 8 === 0) {
            arr.push(sampleArray[i])
        }
    }
    showResults(arr)
}
kata13()


  // KATA 14 -> Exibir o quadrado de cada elemento de Sample Array
function kata14() {
    let arr = []
    for(let i = 0; i<sampleArray.length; i++) {
      arr.push(sampleArray[i]**2)
    }
    showResults(arr)
}
kata14()


// KATA 15 -> SOMA DE TODOS OS NUMEROS DE 1 A 20
function kata15() {
    let result = 0
    let i = 1
    while (i<=20){
        result+=i;
        i++
    }
    showResults(result)
}
kata15()


// KATA 16 -> SOMA DO SAMPLE ARRAY

function kata16() {
let sum = 0;

for(let i = 0; i<sampleArray.length; i++) {
       sum += sampleArray[i]
    }
    showResults(sum)
}
kata16()
    
  // KATA 17 - MENOR ELEMENTO DE SAMPLE ARRAY
function kata17() {
let min = sampleArray[0]
for(let i = 1; i < sampleArray.length; i++ ){
    if(min > sampleArray[i]){
        min = sampleArray[i]
    }
}
showResults(min)
  
}
kata17()


// KATA 18 - MAIOR ELEMENTO DE SAMPLE ARRAY
function kata18() {
let max = sampleArray[0]
for (let i = 1; i<sampleArray.length; i++){
    if(max < sampleArray[i]){
        max = sampleArray[i]
    }
}

showResults(max)
}
kata18()













/**
 * Daqui em diante são os bônus, por sua conta e risco
 */


function kataBonus1() {
  for (let i = 1; i<=20; i++){
      const main = document.body
      const element = document.createElement('div');
      element.className = "box"
      element.style.width = 100 + "px"
      main.appendChild(element)
  }

}
kataBonus1()

function kataBonus2() {

for (let i = 100; i<=200; i+=5){

    const main = document.body;
    const element = document.createElement('div');
    element.className = 'box-mod'
    element.style.width = i+5+'px'
    main.appendChild(element)
}
}
kataBonus2()

function kataBonus3() {
    for (let i = 1; i<=sampleArray.length; i++){

        const main = document.body
        const element = document.createElement('div');
        element.className = "boxBonus3"
        element.style.width = sampleArray[i] + "px"
        main.appendChild(element)
    }

}
kataBonus3()

function kataBonus4() {

    for (let i = 1; i<=sampleArray.length; i++){

        const main = document.body
        const element = document.createElement('div');
        element.className = "boxBonus3"
        element.style.width = sampleArray[i] + "px"
        main.appendChild(element)

        if(i%2 === 0){
         element.style.backgroundColor = "red"   
        }
    }
}
kataBonus4()

function kataBonus5() {


    for (let i = 1; i<=sampleArray.length; i++){

        const main = document.body
        const element = document.createElement('div');
        element.className = "boxBonus3"
        element.style.width = sampleArray[i] + "px"
        main.appendChild(element)

        if(sampleArray[i]%2 === 0){
         element.style.backgroundColor = "red"   
        }
    }
    // implemente o código do kata bonus 5 aqui
}
 kataBonus5()