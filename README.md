This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.


///////////////////////////////////////

В папке src/utils/classes расположены классы:
- deci - логика работы игральных костей;
- field - логика работы с полями (описание полей; информация о покупке, ренте, кому принадлежит, на каком поле находится);
- player - логика игрока, который в игре (работа с деньгами пользователя; логика с ходами пользователя; установка на каком поле должен быть пользователь);
- user - логика пользователя на сайте (админ / вип / обычный пользователь; инвентарь; рейтинг; личная статистика; изменения личной информации - это все ещё будет в будущем);