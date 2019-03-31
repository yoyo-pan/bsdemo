import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core';

export default ({ spacing, breakpoints }: Theme) =>
  createStyles({
    app: {
      backgroundColor: '#f5f5f5',
      height: '100vh'
    },
    body: {
      margin: 'auto',
      [breakpoints.up('xs')]: {
        width: '100%'
      },
      [breakpoints.up('md')]: {
        width: 930
      },
      [breakpoints.up('lg')]: {
        width: 1110
      }
    }
  });
