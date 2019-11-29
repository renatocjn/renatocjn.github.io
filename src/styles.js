import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import orange from '@material-ui/core/colors/orange';

const theme = responsiveFontSizes(createMuiTheme({
   palette: {
      primary: indigo,
      secondary: {
         main: '#000'
      }
      // type: 'dark'
   },
   typography: {
      fontSize: 16,
      h1: {
         fontSize: 2,
         fontWeight: 550
      },
      subtitle1: {
         fontSize: 1.3,
         fontWeight: 300
      }
   },
   status: {
      danger: orange
   }
}))

const appDrawerWidth = 200;
const styles = makeStyles(theme => ({
   root: {
      background: 'lightblue',
      border: 0,
      borderRadius: 3,
      color: 'white',
      padding: '0 30px',
      display: 'flex'
   },
   appBar: {
      zIndex: theme.zIndex.drawer + 1,
      height: '60px',
      width: '100%',
      position: 'fixed'
   },
   appBarSubtitle: {
      'margin-left': '8px'
   },
   content: {
      'margin-top': '65px'
   },
   sidebar: {},
   sections: {
      overflow: 'scroll',
      height: "Calc(100vh - 65px)"
   },
   section: {
      padding: "0 8px"
   }
}))

export { styles as default, theme }
