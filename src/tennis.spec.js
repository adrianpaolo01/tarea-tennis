import Tennis from "./tennis";

describe("Tennis", () => {
  it("deberia mostrar Love-Love", () => {
    let tennis = new Tennis();
    expect(tennis.obtenerScore()).toEqual("Love - Love");
  });

  it("si el jugador 1 anotó una vez, deberia mostrar 15-Love", () => {
    let tennis = new Tennis();
    tennis.jugador1Anota();
    expect(tennis.obtenerScore()).toEqual("15-Love");
  });

  it("si el jugador 2 anotó una vez, deberia mostrar Love-15", () =>{
    let tennis = new Tennis();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("Love-15");
  })

  it("si ambos jugadores anotan, deberia mostrar 15-15", () =>{
    let tennis = new Tennis();
    tennis.jugador1Anota();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("15-15");
  })

  it("si el jugador 1 anotó por segunda vez, y el segundo una, deberia mostrar 30-15", () =>{
    let tennis = new Tennis();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("30-15");
  })



  

  
});

