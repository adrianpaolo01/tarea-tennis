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

        
        return score
    }
    
} 
export default Tennis;