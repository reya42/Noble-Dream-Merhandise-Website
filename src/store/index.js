import { proxy } from 'valtio';

const state = proxy({
  page: 'Home',
  strapColor: '#000F26',
  caseColor: '#1C2D3E',
  case2Color: "#000000",
  style: 0,
  detailStyle: 0,
});

export default state;