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
      fontSize: 16
   },
   status: {
      danger: orange
   },
   overrides: {
      MuiCardHeader: {
         root: {
            padding: '16px 16px 4px 16px'
         }
      },
      MuiCardContent: {
         root: {
            padding: '4px 16px 16px 16px'
         }
      },
      MuiListItem: {
         root: {
            'padding-top': '4px',
            'padding-bottom': '4px'
         },
         gutters: {
            "padding-left": '0px',
            "padding-right": '0px',
         }
      }
   }
}))

const appDrawerWidth = 200;
const styles = makeStyles(theme => ({
   root: {
      background: 'lightblue',
      border: 0,
      borderRadius: 3,
      backgroundColor: 'white',
      display: 'flex',
      boxSizing: 'border-box'
   },
   appBar: {
      zIndex: theme.zIndex.drawer + 1,
      height: '60px',
      width: '100%',
      position: 'fixed',
      alignItems: 'center'
   },
   appBarTitle: {
      fontSize: '200%',
      fontWeight: 550
   },
   appBarSubtitle: {
      marginLeft: '8px',
      fontSize: '130%',
      fontWeight: 300
   },
   drawer: {},
   navItems: {
      padding: `0 ${theme.spacing(2)}px`
   },
   navItemNested: {
      paddingLeft: theme.spacing(4)
   },
   listItemHalfWidth: {
      width: "50%",
      display: "inline"
   },
   content: {
      marginTop: '65px',
      height: "Calc(100vh - 65px)"
   },
   sidebar: {
      height: "98%",
      overflow: 'hidden',
      paddingTop: 0
   },
   sectionsContainer: {
      overflow: 'scroll',
      height: "100%"
   },
   section: {
      padding: "8px",
      marginBottom: '12px',
      '&:last-child ': {
         'margin-bottom': 0
      }
   },
   sectionTitle: {
      display: 'inline',
      fontSize: '175%',
      fontWeight: 450,
      marginLeft: '8px'
   },
   sectionSubtitle: {
      display: 'inline',
      fontSize: '115%',
      fontWeight: 300,
      marginLeft: '8px'
   },
   educationEntry: {},
   educationEntryHeader: {},
   educationEntryContent: {}
}))

export { styles as default, theme }
