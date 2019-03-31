import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core';

export default ({ spacing, breakpoints }: Theme) =>
  createStyles({
    btn: {
      boxShadow: '0 2px 10px 0 rgba(37, 37, 37, 0.15)',
      backgroundColor: '#ffffff',
      [breakpoints.up('lg')]: {
        width: 160,
        height: 40
      },
      [breakpoints.up('sm')]: {
        width: 96,
        height: 44
      }
    }
  });
