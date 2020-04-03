import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';

// Set up material-ui theme
// https://material-ui.com/customization/palette/
let theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: cyan,
    // secondary: green,
  },
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    // htmlFontSize: 24,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
