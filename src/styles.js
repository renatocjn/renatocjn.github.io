import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import orange from '@material-ui/core/colors/orange';

const theme = responsiveFontSizes(createMuiTheme({
   spacing: factor => `${0.25 * factor}rem`,
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
      //MuiSvgIcon: {
      //   root: {
      //      verticalAlignment: 'middle'
      //   }
      //},
      MuiCardHeader: {
         root: {
            padding: '.5rem .5rem .25rem .5rem'
         }
      },
      MuiCardContent: {
         root: {
            padding: '.25rem 1rem 1rem 1rem'
         }
      },
      MuiListItem: {
         root: {
            'padding-top': '.25rem',
            'padding-bottom': '.25rem'
         },
         gutters: {
            "padding-left": 0,
            "padding-right": 0,
         }
      }
   }
}))

const appDrawerWidth = 200;
const styles = makeStyles(theme => ({
   root: {
      border: 0,
      borderRadius: 3,
      backgroundColor: 'lightblue',
      display: 'flex',
      boxSizing: 'border-box',
   },
   appBar: {
      zIndex: theme.zIndex.drawer + 1,
      height: '60px',
      width: '100%',
      position: 'fixed',
      [theme.breakpoints.up('md')]: {
         alignItems: 'center'
      }
   },
   appBarTitle: {
      fontSize: '2rem',
      fontWeight: 550
   },
   appBarSubtitle: {
      marginLeft: '8px',
      fontSize: '1.3rem',
      fontWeight: 300
   },
   appBarBtn: {
      alignSelf: "flex-start"
   },
   drawer: {},
   navItems: {
      padding: theme.spacing(0, 2)
   },
   navItemNested: {
      paddingLeft: theme.spacing(4)
   },
   contactInfo: {
      fontSize: '.9em'
   },
   listItemHalfWidth: {
      width: "50%",
      display: "inline-block"
   },
   content: {
      marginTop: '65px',
      height: "Calc(100vh - 65px)",
      minHeight: "10vh"
   },
   sidebar: {
      height: "98%",
      overflow: 'hidden',
      paddingTop: 0
   },
   sidebarAvatar: {
      margin: '0 auto .5rem auto',
      height: 'auto',
      width: '10rem',
   },
   bioAvatar: {
      width: '100%',
      height: 'auto',
   },
   sectionsContainer: {
      overflow: 'scroll',
      height: "100%"
   },
   section: {
      padding: theme.spacing(1),
      marginBottom: theme.spacing(2),
      '&:last-child ': {
         'margin-bottom': theme.spacing(0)
      }
   },
   sectionContent:{
      marginTop: theme.spacing(3)
   },
   sectionIcon: {
      marginLeft: theme.spacing(2),
      verticalAlignment: 'center'
   },
   sectionTitle: {
      display: 'inline',
      fontSize: '1.75rem',
      fontWeight: 450,
      marginLeft: theme.spacing(1)
   },
   sectionSubtitle: {
      display: 'inline',
      fontSize: '1.15rem',
      fontWeight: 300,
      marginLeft: theme.spacing(2.5)
   },
   bioText: {
      fontSize: '1.2em',
      lineHeight: 1.75,
      fontWeight: 375,
      padding: theme.spacing(0, 2),
      whiteSpace: 'pre-line',
      wordSpace: '1.25em'
   },
   educationEntry: {},
   educationEntryHeader: {
      display: 'inline-block',
      fontSize: '1.4rem',
      fontWeight: 400,
      marginLeft: theme.spacing(1)
   },
   educationEntrySubHeader: {
      display: 'inline-block',
      fontSize: '1.1rem',
      fontWeight: 300,
      marginLeft: theme.spacing(2)
   },
   educationEntryContent: {},
   experienceEntry: {},
   experienceEntryHeader: {
      display: 'inline-block',
      fontSize: '1.4rem',
      fontWeight: 400,
      marginLeft: theme.spacing(1)
   },
   experienceEntrySubHeader: {
      display: 'inline-block',
      fontSize: '1.1rem',
      fontWeight: 300,
      marginLeft: theme.spacing(2)
   },
   experienceEntryContent: {}
}))

export { styles as default, theme }
