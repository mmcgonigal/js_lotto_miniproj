'use strict'

let numbers = document.querySelector(".numbers")
let drawButton = document.querySelector("#draw")
let resetButton = document.querySelector("#reset")

const lottoNumbers= [];
const colors = ["#ef5350","#ab47bc","#5c6bc0","#29b6f6","#66bb6a","#ffee58"]; // for balls color scheme

function showNumber(number){
    const eachNumDiv =  document.createElement("div")
    let colorIndex =  Math.floor(number / 10);
    colors[colorIndex]
    eachNumDiv.classList.add('eachNum')
    eachNumDiv.style.backgroundColor = colors[colorIndex]
    eachNumDiv.textContent = number
    numbers.appendChild(eachNumDiv)
}

drawButton.addEventListener("click",function(){
    while(lottoNumbers.length < 6){
       let randomNum =  Math.floor( Math.random() * 54 ) + 1;
        if(lottoNumbers.indexOf(randomNum)=== -1){
            //만약에,주어진 값 , 이경우는 랜덤넘이, 로또넘버 배열의 몇번째에 , 즉 몇번째 인덱스에 존재하는지 확인 하는데, 만약 그 값이 배열안에 존재 하지 않을 경우는 보통 -1을 반환 함. 즉 해석하자면, 로또넘버스 배열안에, 랜덤넘의 인덱스가 , (랜덤넘이 들어 있는 인덱스)가 존재하지 않아서 -1 일 경우,
            lottoNumbers.push(randomNum)
            showNumber(randomNum)
        }

    }
    console.log(lottoNumbers)

})
resetButton.addEventListener("click",function(){
    lottoNumbers.splice(0,6) // from 0th index , 6 many remove
    numbers.innerHTML = "";

})