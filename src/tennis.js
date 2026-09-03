class Tennis {
    puntosJ1 = 0
    puntosJ2 = 0
    
    jugador1Anota(puntos){
        this.puntosJ1 += 1
    }

    jugador2Anota(){
        this.puntosJ2 += 1
    }
    
    obtenerScore(){
        let score = "Love - Love"
        
        if(this.puntosJ1 === 1 && this.puntosJ2 === 0){
            score = "15-Love" 
        }

        if(this.puntosJ1 === 0 && this.puntosJ2 === 1){
            score = "Love-15" 
        }

        if(this.puntosJ1 === 1 && this.puntosJ2 === 1){
            score = "15-15" 
        }

        if(this.puntosJ1 === 2 && this.puntosJ2 === 1){
            score = "30-15"
        }
        
        if(this.puntosJ1 === 1 && this.puntosJ2 === 2){
            score = "15-30"
        }

        if(this.puntosJ1 === 2 && this.puntosJ2 === 2){
            score = "30-30" 
        }

        if(this.puntosJ1 === 3 && this.puntosJ2 === 2){
            score = "40-30" 
        }
        
        if(this.puntosJ1 === 2 && this.puntosJ2 === 3){
            score = "30-40" 
        }

        if(this.puntosJ1 === 2 && this.puntosJ2 === 3){
            score = "30-40" 
        }

        if(this.puntosJ1 === 3 && this.puntosJ2 === 3){
            score = "Deuce" 
        }



        return score
    }
    
} 
export default Tennis;