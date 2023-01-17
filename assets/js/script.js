
import { Scene } from './classes/scenes.js';
import { SceneTest } from './classes-test/scenes.js';



window.addEventListener('DOMContentLoaded', (event) => {

//   let form = document.getElementsByTagName("form")
  let data = []
  let scene0 = new Scene(0, "Vous incarnerai Père Noël, vous savez reçu un mail de la mere Joël qui vous dis qu\'il y a un espion dans votre atelier. Armé de votre BfG (Big Fucking Gun) vous courrez à l\'atelier malgré l\'heure tardive", "assets/src/images/1000_F_59827834_i4245GImXiV5Bde6RFJEPNXMFvRNKH2t.jpg", " 2 possibilités s'offre à vous:", "Vous allez au toilette car il est l'heure de la grosse commission", 1, "Vous entrez dans votre atelier et vous cachez dans un endroit sombre pour ne pas être vu.", 2)
  let scene1 = new Scene(1, "", "assets/src/images/1000_F_63923978_s2mPCruPpYawQfHHr1B4nB2sIAFackIK.jpg", "Vous courrez à toute allure mais Joséphine ange gardien vous bloque la route", "Vous sortez le BFG.", 3, " Vous lui dite de faire attention à la peau de banane derriere elle.", 4)
  let scene2 = new Scene(2, "Vous voyez un de vos petit lutin qui essai de se faire discret", "assets/src/images/1000_F_323861330_JTzrw3SEVhzyTt19K942of6i5mbySSHc.jpg", "Que faites vous?", "Vous l'attrapez par le chapeau", 5, " Vous lui demandait se qu'il fait içi à cette heure si tardive", 6)
  let scene3 = new Scene(2, "le temps de sortir votre BFG Joséphine claque des doigts tel un thanos... vous partez en poussière.l'histoire raconte qu'elle a été embauché par ubisoft qui voulait savoir comment vous faite pour finir vos jeux à temps.", "assets/src/images/1000_F_323861330_JTzrw3SEVhzyTt19K942of6i5mbySSHc.jpg", "Vous etes mort", "Recommencer une aventure", 0, "Recommencer", 0)
  let  scene4 = new Scene(2,"le temps qu'elle se retourne vous l'attrapez et vous la menacée avec votre BFG. Elle vous raconte qu'elle a été embauché par ubisoft pour vous espionner. connaitre votre secret pour savoir comment finir des jeux à temps. Vous finissez par la dégomer.","assets/src/images/1000_F_323861330_JTzrw3SEVhzyTt19K942of6i5mbySSHc.jpg","Bravooo","Recommencer une aventure",0,"Recommencer",0)

    data.push(scene0);
     data.push(scene1);
      data.push(scene2);
    data.push(scene3);
        data.push(scene4);
      
      
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