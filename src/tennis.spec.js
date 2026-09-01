

describe("Tennis", () => {
  it("deberia msotrar Love-Love", () => {
    let tennis = Tennis.new()
    expect(tennis.obtenerScore()).toEqual("Love - Love");
  });
});

class Tennis {
    obtenerScore(){
        return "Love - Love"
    }
}