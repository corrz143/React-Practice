import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menus: [
    {
      id: 1,
      name: "Pepperoni Pizza",
      image: "../assets/pepperoni.jpg",
      description:
        "Your choice of crust covered with our signature pizza sauce, real cheese made from mozzarella, and pepperoni. With a pepperoni in almost every bite, it's one of our most popular pizzas.",
      price: 15.99,
    },
    {
      id: 2,
      name: "Cheezy Pizza",
      image: "../assets/cheezy.jpg",
      description:
        "Simple, yet simply delicious. Real cheese made from mozzarella on top of our signature pizza sauce with your choice of crust, then baked to a golden brown. It has just what you want.",
      price: 11.99,
    },
    {
      id: 3,
      name: "Jimmys Special Pizza",
      image: "../assets/jimmyspecial.jpg",
      description:
        "Experience the authentic taste of Italy! Layered with signature pizza sauce and an authentic blend of Parmesan, Romano, Asiago, Fontina, provolone, and real cheese made from mozzarella. Baked hot and fresh then finished with classic Italian seasoning.",
      price: 24.99,
    },
    {
      id: 4,
      name: "Vegan Pizza",
      image: "../assets/vegan.jpg",
      description:
        "All your favorite veggies together on a delightfully delicious pizza. Loaded with crisp green peppers, fresh-cut onions, mushrooms, ripe black olives, vine-ripened Roma tomatoes, and real cheese made from mozzarella.",
      price: 17.99,
    },
    {
      id: 5,
      name: "Pineapple Pizza",
      image: "../assets/pineapple.jpg",
      description:
        "Our signature pizza sauce layered with sweet, juicy pineapple tidbits for a taste of the tropics. and real cheese made from mozzarella for a taste you will crave. Your choice of crust.",
      price: 14.99,
    },
    {
      id: 6,
      name: "Seafood Pizza",
      image: "../assets/seafood.jpg",
      description:
        "Our signature pizza sauce layered with seafood of your choice and crust.",
      price: 27.99,
    },
  ],
};

export const menuSlice = createSlice({
  name: "menus",
  initialState,
  reducers: {},
});

export const selectMenu = (state) => state.menus.menus;
// export const { } = menuSlice.actions
export default menuSlice.reducer;
