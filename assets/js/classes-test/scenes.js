import { Scene } from '../classes/scenes.js';

class SceneTest {
   #scene;

    constructor()
    {
        this.#scene =null
        
        
    }

    test(){
        
    let id = 1;
    let intro = "coucou";
    let illustration = "une belle image";
    let question = "pourquoi";
    let text0 ="oui";
    let destination0= 2;
    let text1="non";
    let destination1= 3;
    
    this.#scene = new Scene(id,intro,illustration,question,text0,destination0,text1,destination1)
    console.log(this.#scene)
    console.log(this.#scene.id)
    console.log(this.#scene.intro)
    console.log(this.#scene.illustration)
    console.log(this.#scene.question)
    console.log(this.#scene.choices[0].text)
    console.log(this.#scene.choices[0].destination)
    console.log(this.#scene.choices[1].text)
    console.log(this.#scene.choices[1].destination)
        
    }
    
    
}

export { SceneTest };
