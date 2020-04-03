import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Routes from './components/routing/Routes'
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { setAuthToken } from './utils'
import { loadUser } from './actions/auth';
import Coockies from 'js-cookie';

// Set up material-ui theme
// https://material-ui.com/customization/palette/
let theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: purple,
    // secondary: green,
  },
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    // htmlFontSize: 24,
  },
});

theme = responsiveFontSizes(theme);


if (Coockies.get('token')) {
  setAuthToken(Coockies.get('token'))
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route component={Routes} />
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    </ThemeProvider>
  )
};

export default App;
