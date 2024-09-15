export class User {
  id: number;
  name: string; // player's names
  color: string; // player's color
  img: string; // player's photo

  constructor(id: number, name: string, color: string, img: string) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.img = img;
  }
}
