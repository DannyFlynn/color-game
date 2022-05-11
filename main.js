window.onload = function(){
const rgb = document.getElementById('change-rgb'); //change the rgb in title
const butOne = document.getElementById('but-one');  //button one to six
const butTwo = document.getElementById('but-two');
const butThree = document.getElementById('but-three');
const butFour = document.getElementById('but-four');
const butFive = document.getElementById('but-five');
const butSix = document.getElementById('but-six');

//underneath my object that I map to update rgb 
const rgbObject = {
    colors: [{id: 'rgb(37, 37, 219)'},
             {id: 'rgb(221, 76, 100)'},
             {id: 'rgb(199, 82, 199)'},
             {id: 'rgb(116, 67, 24)'},
             {id: 'rgb(81, 202, 133)'},
             {id: 'rgb(211, 7, 7)'}   
]
}
 let accessObject = rgbObject.colors.map(color => color.id)  // no I have access to the values of rgbObject
let randomColor = Math.floor(Math.random() * accessObject .length) // I want to get A random rgb each time 
//rgb.innerHTML = accessObject[0]
let access = accessObject[randomColor]
rgb.innerHTML = accessObject[randomColor]

// its a repeated function comparing textContent to the accessObject then x with accessObject if answer is correct will give a new question
butOne.onclick = function colorGame(){
     if(rgb.textContent == accessObject[0]){
            alert('correct')
            let x = Math.floor(Math.random() * accessObject.length)
            rgb.innerHTML = accessObject[x]
        } else {
            alert('wrong')
        }
    }

butTwo.onclick = function(){
    if(rgb.textContent == accessObject[1]){
        alert('correct')
        let x = Math.floor(Math.random() * accessObject.length)
            rgb.innerHTML = accessObject[x]
    } else{
        alert('wrong')
    }
  }

  butThree.onclick = function(){
    if(rgb.textContent == accessObject[2]){
        alert('correct')
        let x = Math.floor(Math.random() * accessObject.length)
            rgb.innerHTML = accessObject[x]
    } else{
        alert('wrong')
    }
  }
  
  butFour.onclick = function(){
    if(rgb.textContent == accessObject[3]){
        alert('correct')
        let x = Math.floor(Math.random() * accessObject.length)
            rgb.innerHTML = accessObject[x]
    } else{
        alert('wrong')
    }
    }

    butFive.onclick = function(){
        if(rgb.textContent == accessObject[4]){
            alert('correct')
            let x = Math.floor(Math.random() * accessObject.length)
            rgb.innerHTML = accessObject[x]
        } else{
            alert('wrong')
        }
      }
      
      butSix.onclick = function(){
        if(rgb.textContent == accessObject[5]){
            alert('correct')
            let x = Math.floor(Math.random() * accessObject.length)
            rgb.innerHTML = accessObject[x]
        } else{
            alert('wrong')
        }
        }

       
}














/*const rgbObject = {
    colors: [{id: 'rgb(37, 37, 219)'},
             {id: 'rgb(221, 76, 100)'},
             {id: 'rgb(199, 82, 199)'},
             {id: 'rgb(116, 67, 24)'},
             {id: 'rgb(81, 202, 133)'},
             {id: 'rgb(211, 7, 7)'}   
]
}
const rgb = document.getElementById('change-rgb');

rgb.innerHTML = accessObject[0]
let accessObject = rgbObject.colors.map(color => color.id)
let randomColor = Math.floor(Math.random() * accessObject.length)*/
