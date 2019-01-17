import {
  createMuiTheme,
} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#000000',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default theme;
