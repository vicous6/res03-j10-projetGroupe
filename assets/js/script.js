
import { Scene } from './classes/scenes.js';
import { SceneTest } from './classes-test/scenes.js';



window.addEventListener('DOMContentLoaded', (event) => {

//   let form = document.getElementsByTagName("form")
  let data = []
  
  let scene0 = new Scene(0,"Benvenue dans cette nouvelle aventure (tin tin tin ) ","assets/src/images/1000_F_59827834_i4245GImXiV5Bde6RFJEPNXMFvRNKH2t.jpg","Choisissez quel personnage vous souhaiterez incarner","Le Père Noel",1,"Le Mère Noel",2)
   let scene1 = new Scene(1,"deuxièeme introoooo","assets/src/images/1000_F_63923978_s2mPCruPpYawQfHHr1B4nB2sIAFackIK.jpg","question 1","tet bommmmm",3,"text2",4)
    let scene2 = new Scene(2,"inteqrcqesdcro","assets/src/images/1000_F_323861330_JTzrw3SEVhzyTt19K942of6i5mbySSHc.jpg","question 2","et voilaaaaa",5,"text2",6)
  


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