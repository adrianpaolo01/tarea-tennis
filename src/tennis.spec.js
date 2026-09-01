import Tennis from "./tennis";

describe("Tennis", () => {
  it("deberia msotrar Love-Love", () => {
    let tennis = new Tennis();
    expect(tennis.obtenerScore()).toEqual("Love - Love");
  });
});

