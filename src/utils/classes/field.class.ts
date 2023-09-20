export class Filed implements IField {
  // описание поля в выпадающем окошке
  name: string; // название поля
  category: string; // категория поля (соц сети, фаст фуд)
  color_group: string; // цвет группы полей
  info_text: string; // описание поля
  rent: number; // базовая рента
  field_cost: number; // стоимолсть поля
  field_deposit: number; // залог поля
  field_redemption: number; // выкуп поля
  field_purchase: number; // покупка поля (улучшение)

  // внешнее описание поля
  img_logo: string;
  price: number; // подтягивается сумма в зависимости состояния поля (заложен, покупка, куплено)
  field_color: string; // подтягивается цвет в зависимости состояния поля (заложен, покупка, куплено)
  star_count: number; // количество улучшений на поле, изначально 0
  lock: boolean; // заложено поле или нет

  // инное
  field_num: number; // на какой номере поля находится
  who_belong: number; // кому принадлежит (id_user), изначально -1

  constructor(field: IField) {
    this.name = field.name;
    this.category = field.category;
    this.color_group = field.color_group;
    this.info_text = field.info_text;
    this.rent = field.rent;
    this.field_cost = field.field_cost;
    this.field_deposit = field.field_deposit;
    this.field_redemption = field.field_redemption;
    this.field_purchase = field.field_purchase;
    this.img_logo = field.img_logo;
    this.price = field.price;
    this.field_color = field.field_color;
    this.star_count = field.star_count;
    this.lock = field.lock;
    this.field_num = field.field_num;
    this.who_belong = field.who_belong;
  }
}
