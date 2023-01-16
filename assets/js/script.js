
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
    
    console.log(form) 
   
    
})



});