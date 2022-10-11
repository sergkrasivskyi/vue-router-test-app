import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";


const routes = [
  { path: "/", name: "Home", component: Home },
  // Закоментували ці статичні сторінки, а залишили лише динамічну, яку створюємо за
  //  допомогою DestinationShow.vue, усі компонети цих сторінок можна знайти у директорії
  // /basket/views
  // { path: "/brazil", name: "brazil", component: () => import('@/views/Brazil.vue')},
  // { path: "/hawaii", name: "hawaii", component: () => import('@/views/Hawaii.vue')},
  // { path: "/jamaica", name: "jamaica", component: () => import('@/views/Jamaica.vue')},
  // { path: "/panama", name: "panama", component: () => import('@/views/Panama.vue')},
  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
    // встіновлюємо props: true - це дає можливість передавати пропси
    // props: true,
    // Також можна визначити, які саме пропси очикуються, у цьому випадку
    // пропс newsletterPopup привізиті по цьому маршруту завжди буде false
    //   props: {
    //     newsletterPopup: false,
    //   },
    // також можемо визначити функцію, яка приймає $routs  у якості аргументу
    // та робить щось, наприклад
    // props: (route) => ({ newsletterPopup: someExpression ? true : false }),
    // У цьому прикладі ми привели до цілого наш id та можемо видалити функцію parseInt
    // у компоненті DestinationShow, а використовувати просто напис id
    props: (route) => ({ id: parseInt(route.params.id) }),
  },
  //
];

const router = createRouter({
  history: createWebHistory(),
  // масив об'єктів з передумовленими іменами для роутінгу:
  routes,
  // це властивість за замовчуванням, для стилізації
  // linkActiveClass: 'active-link'("або інше ім'я")

});

export default router