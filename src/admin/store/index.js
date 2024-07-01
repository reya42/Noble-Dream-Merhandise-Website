import { proxy } from 'valtio';

const state = proxy({
  username: "",
  page: "Purchases"
});

export default state;