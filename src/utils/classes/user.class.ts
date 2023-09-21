export class User {
  id: number;
  name: string; // имя игрока
  color: string; // цвет игрока
  img: string; // аватарка

  constructor(id: number, name: string, color: string, img: string) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.img = img;
  }
}
