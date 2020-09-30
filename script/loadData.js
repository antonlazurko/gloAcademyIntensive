import { getData } from './getData.js';
const wishList = ['idd005', 'idd100', 'idd077', 'idd033'];
const cartList = [
  { id: 'idd015', count: 3 },
  { id: 'idd035', count: 1 },
  { id: 'idd075', count: 5 },
  { id: 'idd095', count: 7 },
];

export const loadData = () => {
  if (location.search) {
    const search = decodeURI(location.search);
    const prop = search.split('=')[0].slice(1);
    console.log(prop);
    const value = search.split('=')[1];
    console.log(value);
    if (prop === 's') {
      console.log(value);
    } else if (prop === 'wishlist') {
      getData.wishList(wishList, data => console.dir({ wishlist: data }));
    } else {
      console.log();
    }
  }
  if (location.hash) {
    getData.item(location.hash.slice(1));
  }
  if (location.pathname.includes('cart')) {
    console.log(cartlist);
  }
};
