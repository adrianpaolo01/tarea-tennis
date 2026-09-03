import Tennis from "./tennis";

describe("Tennis", () => {
  it("deberia mostrar Love-Love", () => {
    let tennis = new Tennis();
    expect(tennis.obtenerScore()).toEqual("Love - Love");
  });

  it("si el jugador 1 anotó una vez, deberia mostrar 15-love", () => {
    let tennis = new Tennis();
    tennis.jugador1Anota();
    expect(tennis.obtenerScore()).toEqual("15-Love");
  });

  it("si el jugador 2 anotó una vez, deberia mostrar love-15", () =>{
    let tennis = new Tennis();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("Love-15");
  })

  
});

