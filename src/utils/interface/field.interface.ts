interface IField {
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
}
