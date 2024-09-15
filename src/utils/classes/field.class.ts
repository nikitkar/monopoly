export class Filed implements IField {
  name: string;
  category: string;
  color_group: string;
  info_text: string;
  rent: number;
  field_cost: number;
  field_deposit: number;
  field_redemption: number;
  field_purchase: number;

  img_logo: string;
  price: number;
  field_color: string;
  star_count: number;
  lock: boolean;

  field_num: number;
  who_belong: number;

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
