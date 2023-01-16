
import { Scene } from './classes/scenes.js';
import { SceneTest } from './classes-test/scenes.js';

window.addEventListener('DOMContentLoaded', (event) => {
  
  
  let scene1 = new Scene(0,"intro","presentation","question","textno",2,"text2",3)
  
  let scene2 =new SceneTest()

  console.log(scene1)
   scene2.test()
});