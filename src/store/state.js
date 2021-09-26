import {atom} from "recoil";

const userState = atom({
  key: 'user',
  default: {
    isLogin: false,
    id: -1,
    name: '',
    email: '',
    type: 'guest',
    thumbnailUrl: '',
  }
});

const filterState = atom({
  key: 'filter',
  default: {
    title: null,
    limitPrice: 50000,
    detailLocation: null,
    limitPeople: null,
    orderStandard: 'CREATEDDESC',
  }
});

export {userState, filterState};