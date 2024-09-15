interface IField {
  readonly name: string; // field name
  readonly category: string; // field category (social networks, fast food)
  readonly color_group: string; // the color of the field group
  readonly info_text: string; // description of the field
  readonly rent: number; // basic rent
  readonly field_cost: number; // the cost of the field
  readonly field_deposit: number; // deposit of the field
  readonly field_redemption: number; // field redemption
  readonly field_purchase: number; // field purchase (improvement)

  // external description of the field
  readonly img_logo: string;
  readonly price: number; // the amount is adjusted depending on the state of the field (mortgaged, purchased, purchased)
  readonly field_color: string; // the color is tightened depending on the state of the field (mortgaged, purchased, purchased)
  readonly star_count: number; // The number of improvements on the field, initially 0
  readonly lock: boolean; // is the field laid down or not

  // other
  readonly field_num: number; // which field number is located on
  readonly who_belong: number; // who owns (id_user), initially -1
}
