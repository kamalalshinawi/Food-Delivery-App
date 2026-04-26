import { registerSheet, type SheetDefinition } from 'react-native-actions-sheet';
import SuccessLogin from './components/SuccessLogin';

registerSheet('LOGIN_SUCCESS', SuccessLogin);

declare module 'react-native-actions-sheet' {
  interface Sheets {
    LOGIN_SUCCESS: SheetDefinition;
  }
}

export {};
