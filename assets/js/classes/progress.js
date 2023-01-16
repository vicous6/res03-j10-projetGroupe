class Progress {
    #progress
  

    constructor()
    {
        this.#progress=[]
       
        
    }

    get progress (){
        return this.#progress;
    }


     set progress(indexObjet) {
         
         this.progress= [indexObjet]
     }  
    
}

export { Progress };