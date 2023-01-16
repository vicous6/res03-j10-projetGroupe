
import { Scene } from './classes/scenes.js';
import { SceneTest } from './classes-test/scenes.js';

import { Progress } from './classes/progress.js';
import { ProgressTest } from './classes-test/progress.js';

window.addEventListener('DOMContentLoaded', (event) => {
  
  let button = document.getElementById("button")
  let form = document.getElementsByTagName("form")
  
  let scene0 = new Scene(0,"intro","presentation","question","textno",2,"text2",3)
  
  let scene2 =new SceneTest()


let tab = new ProgressTest

// tab.test()
//   console.log(scene0)
//   scene2.test()
//   scene0.displayInHtml()

    
button.addEventListener("click", function(event){
    
    event.preventDefault()
  let radio1= document.getElementById("chce1")
  let radio2 = document.getElementById("chce2")
  
  
  console.log(radio1.checked)
   console.log(radio2.checked)
    
})



});