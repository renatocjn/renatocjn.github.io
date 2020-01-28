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
      MuiCardHeader: {
         root: {
            padding: '.5rem .5rem .25rem .5rem'
         },
         title: {
            display: 'inline-block'
         },
         subheader: {
            display: 'inline-block'
         }
      },
      MuiCardContent: {
         root: {
            // padding: '.25rem 1rem 1rem 1rem'
            padding: ".25rem .75rem .25rem .75rem",
            "&:last-child": {
               paddingBottom: '.25rem'
            }
         }
      },
      MuiAvatar: {
         colorDefault: {
            color: "white",
            backgroundColor: indigo[500]
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
      },
      MuiListItemText: {
         root: { },
         primary: {
            display: 'inline-block',
            paddingRight: '.5rem'
         },
         secondary: {
            display: 'inline-block'
         }
      }
   }
}))

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
      display: "inline-block",
   },
   content: {
      marginTop: '65px',
      height: "Calc(100vh - 65px)",
      minHeight: "10vh"
   },
   sidebar: {
      height: "98%",
      overflow: 'hidden',
      paddingTop: 0,
      fontSize: ".9em"
   },
   Avatar: {
      width: '10rem !important',
      height: 'auto !important'
   },
   sidebarAvatar: {
      margin: '1rem auto 1rem auto',
   },
   bioAvatar: {
      padding: theme.spacing(2),
      float: 'right',
      position: 'relative',
      top: "-2.5rem"
   },
   sectionsContainer: {
      overflow: 'scroll',
      height: "100%"
   },
   section: {
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1),
      '&:last-child ': {
         marginBottom: theme.spacing(0)
      }
   },
   sectionContent:{
      marginTop: theme.spacing(3),
      padding: '0 !important'
   },
   sectionAvatar: {},
   sectionTitle: {
      fontSize: '1.75rem',
      fontWeight: 450,
      marginLeft: theme.spacing(1)
   },
   sectionSubheader: {
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
      fontSize: '1.4rem',
      fontWeight: 400,
      marginLeft: theme.spacing(1)
   },
   educationEntrySubHeader: {
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
