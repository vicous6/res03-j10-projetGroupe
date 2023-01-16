class Progress {
    #progress
  

    constructor()
    {
        this.#progress=[0]
       
        
    }

    get progress (){
        return this.#progress;
    }


     set progress(indexObjet) {
         
         this.progress= [indexObjet]
     }  
    
}

export { Progress };