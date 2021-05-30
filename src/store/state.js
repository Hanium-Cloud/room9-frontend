import {atom} from "recoil";

const userState = atom({
  key: 'user',
  default: {
    isLogin: false,
    name: '',
    email: '',
  }
});



export {userState};