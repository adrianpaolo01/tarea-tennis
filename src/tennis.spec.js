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

  it("si el jugador 1 anotó por segunda vez, y el 2 una, deberia mostrar 30-15", () =>{
    let tennis = new Tennis();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("30-15");
  })

    it("si el jugador 2 anotó por segunda vez, y el 1 una, deberia mostrar 30-15", () =>{
    let tennis = new Tennis();
    tennis.jugador1Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("15-30");
  })
  
  it("si ambos jugadores anotan dos veces, deberia mostrar 30-30", () =>{
    let tennis = new Tennis();
    tennis.jugador1Anota();
    tennis.jugador1Anota();

    tennis.jugador2Anota();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("30-30");
  })
  
  it("si el jugador1 anota por tercera vez, pero el jugador 2 no,deberia mostrar 40-30", () =>{
    let tennis = new Tennis();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador1Anota();

    tennis.jugador2Anota();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("40-30");
  })

  it("si el jugador2 anota por tercera vez, pero el jugador 1 no,deberia mostrar 40-30", () =>{
    let tennis = new Tennis();
    tennis.jugador1Anota();
    tennis.jugador1Anota();

    tennis.jugador2Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("30-40");
  })

  it("si ambos jugadores anotan tres veces, deberia mostrar Deuce", () =>{
    let tennis = new Tennis();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador1Anota();

    tennis.jugador2Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("Deuce");
  })

  it("si el jugador1 anota por cuarta vez, pero el jugador 2 no,deberia mostrar Advantage Player 1", () =>{
    let tennis = new Tennis();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador1Anota();

    tennis.jugador2Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("Advantage Player 1");
  })

  
});

