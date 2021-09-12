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



export {userState};