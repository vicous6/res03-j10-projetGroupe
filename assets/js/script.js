
import { Scene } from './classes/scenes.js';
import { SceneTest } from './classes-test/scenes.js';



window.addEventListener('DOMContentLoaded', (event) => {

//   let form = document.getElementsByTagName("form")
  let data = []
  
  let scene0 = new Scene(0,"intro  0 ","presentqefvrqesration","question 0","textno",1,"text2",2)
   let scene1 = new Scene(1,"intro","preseqesvcevntation","question 1","tet bommmmm",3,"text2",4)
    let scene2 = new Scene(2,"inteqrcqesdcro","presentation","question 2","et voilaaaaa",5,"text2",6)
  


    data.push(scene0);
     data.push(scene1);
      data.push(scene2);
      
      
    console.log(data);
//   console.log(scene0)
//   scene2.test()


    if(window.localStorage.getItem("Current Index")!== null){
       data[window.localStorage.getItem("Current Index")].displayInHtml(); 
    }else{
        data[0].displayInHtml();
    }
     
  let button = document.getElementById("button")
  

  
  
  
button.addEventListener("click", function(event){

        
    event.preventDefault()
    
 
          let input0 = document.getElementById("chce1")
        let input1 = document.getElementById("chce2")
    
    if(input0.checked=== true){
      window.localStorage.setItem("Current Index",   input0.value);
       console.log('let go to object' + input0.value)
      data[input0.value].displayInHtml()
     
    }else 
    if(input1.checked=== true){
            window.localStorage.setItem("Current Index",   input1.value);
            console.log('let go to object' + input1.value)
       data[input1.value].displayInHtml() 
     
    }
    
    
   
  
  
    
})



});