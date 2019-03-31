import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    colors: {
      blood: string;
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    colors?: {
      blood: string;
    };
  }
}

export const CUSTOM_THEMES = {
  colors: {
    blood: '#cd0505'
  }
};
