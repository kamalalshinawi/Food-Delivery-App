import { registerSheet, type SheetDefinition } from 'react-native-actions-sheet';
import LoginSuccessSheet from './LoginSuccessSheet';

registerSheet('LOGIN_SUCCESS', LoginSuccessSheet);

declare module 'react-native-actions-sheet' {
  interface Sheets {
    LOGIN_SUCCESS: SheetDefinition;
  }
}

export {};
