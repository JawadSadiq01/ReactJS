import {
  atom,
  selector,
} from 'recoil';
import { recoilPersist } from "recoil-persist";
import token from '../../theme/token';

const { persistAtom } = recoilPersist();

export const themeState = atom({
  key: 'themeState',
  default: token,
  effects_UNSTABLE: [persistAtom],
});