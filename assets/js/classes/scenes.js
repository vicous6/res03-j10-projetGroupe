class Scene {
    #id;
    #intro = "";
    #illustration = "";
    #question = "";
    #choix = [
        {
            text: "",
            destination : {} // ou null si c'est une fin
        },
        {
            text: "",
            destination : {} // ou null si c'est une fin
        }
    
    ]

    constructor(id,intro, illustration, question,text0,destination0,text1,destination1)
    {
        this.#id=id
        this.#intro = intro;
        this.#illustration = illustration;
        this.#question = question;
        this.#choix[0].text= text0;
        this.#choix[0].destination= destination0;
        this.#choix[1].text= text1;
        this.#choix[1].destination= destination1;
        
    }

    get intro (){
        return this.#intro;
    }
    get illustration (){
        return this.#illustration;
    }
    get question(){
        return this.#question;
    }
    get choices (){
        return this.#choix;
    }
    
    displayInHtml(){
        
        let presentation = document.getElementById("resume")
         let question = document.getElementById("question")
         
         let choice1=document.getElementById("chce1")
         
         let choice2=document.getElementById("chce2")
         
         let image = document.getElementById("img")
        
    }
    
    
}

export { Scene };