import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core';

export default ({ spacing, breakpoints, colors }: Theme) =>
  createStyles({
    header: {
      height: 44,
      textAlign: 'center',
      backgroundColor: colors.blood
    },
    item: {
      fontSize: 15, // todo: sync with font-family
      color: '#ffffff',
      [breakpoints.up('md')]: {
        width: 93
      },
      [breakpoints.up('lg')]: {
        width: 111
      }
    }
  });
