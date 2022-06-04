class Overworld {

  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector('.game-canvas');
    this.ctx = this.canvas.getContext('2d');
  }

  init() {
    // order is important, drawing later will be on the top
    const image = new Image();
    image.onload = () => {
      this.ctx.drawImage(image, 0, 0)
    };
    image.src = "/images/maps/DemoLower.png"

    const shadow = new Image();
    shadow.onload = () => {
      this.ctx.drawImage(
        shadow,
        0, // starting point left cut
        0, // top cut
        32, //width of cut
        32, // height of cut
        x * 16 - 7,  //move left right , one tile = 16
        y * 16 - 18,  // move up and down
        32,  //scale up and down
        32
      )
    };
    shadow.src = "/images/characters/shadow.png"

    const x = 5;
    const y = 6;
    const hero = new Image();
    hero.onload = () => {
      this.ctx.drawImage(
        hero,
        0, // starting point left cut
        0, // top cut
        32, //width of cut
        32, // height of cut
        x * 16 - 7,  //move left right , one tile = 16
        y * 16 - 18,  // move up and down
        32,  //scale up and down
        32
      )
    };
    hero.src = "/images/characters/people/hero.png"

  }


}