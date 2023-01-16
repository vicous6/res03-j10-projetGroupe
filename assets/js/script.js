
import { Scene } from './classes/scenes.js';
import { SceneTest } from './classes-test/scenes.js';

import { Progress } from './classes/progress.js';
import { ProgressTest } from './classes-test/progress.js';

window.addEventListener('DOMContentLoaded', (event) => {

//   let form = document.getElementsByTagName("form")
  
  let scene0 = new Scene(0,"intro","presentqefvrqesration","question","textno",2,"text2",3)
   let scene1 = new Scene(1,"intro","preseqesvcevntation","question","tet bommmmm",2,"text2",3)
    let scene2 = new Scene(2,"inteqrcqesdcro","presentation","questierfqecdqcon","et voilaaaaa",2,"text2",3)
  
//   let scene2 =new SceneTest()


let progress = new Progress
console.log(progress)
// tab.test()
//   console.log(scene0)
//   scene2.test()

  scene0.displayInHtml()

     
  let button = document.getElementById("button")
  
button.addEventListener("click", function(event){
    
    event.preventDefault()
     scene2.displayInHtml()
    console.log(progress)
    progress.progress()
    
    scene0.changeProgress(progress)
  
  
    
})



});