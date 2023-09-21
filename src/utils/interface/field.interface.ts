interface IField {
  readonly name: string; // название поля
  readonly category: string; // категория поля (соц сети, фаст фуд)
  readonly color_group: string; // цвет группы полей
  readonly info_text: string; // описание поля
  readonly rent: number; // базовая рента
  readonly field_cost: number; // стоимолсть поля
  readonly field_deposit: number; // залог поля
  readonly field_redemption: number; // выкуп поля
  readonly field_purchase: number; // покупка поля (улучшение)

  // внешнее описание поля
  readonly img_logo: string;
  readonly price: number; // подтягивается сумма в зависимости состояния поля (заложен, покупка, куплено)
  readonly field_color: string; // подтягивается цвет в зависимости состояния поля (заложен, покупка, куплено)
  readonly star_count: number; // количество улучшений на поле, изначально 0
  readonly lock: boolean; // заложено поле или нет

  // инное
  readonly field_num: number; // на какой номере поля находится
  readonly who_belong: number; // кому принадлежит (id_user), изначально -1
}
