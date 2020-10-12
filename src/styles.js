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
  // typography: {
  //   fontSize: 16
  // },
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
        paddingTop: '.25rem',
        paddingBottom: '.25rem'
      },
      gutters: {
        paddingLeft: 0,
        paddingRight: 0,
      }
    },
    MuiListItemIcon: {
      root: {
        color: indigo[500],
        minWidth: '2.5rem'
      }
    },
    MuiListItemText: {
      root: { },
      primary: {
        display: 'inline-block',
        marginRight: '.5rem'
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
  drawer: {
    paddingTop: '65px'
  },
  navItems: {
    padding: theme.spacing(0, 5)
  },
  navItemNested: {
    paddingLeft: theme.spacing(9)
  },
  dividerWithPadding: {
    margin: theme.spacing(2)
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
    height: "Calc(100vh - 65px - 30px)",
    minHeight: "10vh",
    marginBottom: '30px'
  },
  sidebar: {
    height: "98%",
    overflowX: 'hidden',
    paddingTop: 0,
    fontSize: ".9em",
    overflowY: "scrool"
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
    [theme.breakpoints.up('sm')]: {
      top: "-2.5rem"
    }
  },
  sectionsContainer: {
    overflowX: 'hidden',
    overflowY: 'scroll',
    height: "98%"
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
    marginLeft: theme.spacing(1)
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
  experienceEntryContent: {},
  skill_card_container: {},
  skillModal: {
    position: 'absolute',
    left: '50vw',
    top: '50vh',
    width: 600,
    maxWidth: '100vw',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 8, 6),
    transform: `translate(-50%, -50%)`,
  },
  skill_card: {},
  publication_card_container: {},
  publication_card: {},
  publication_card_title: {
    fontWeight: 425
  },
  publication_card_text: {
    fontWeight: 300
  },
  pub_button: {},
  footer: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: indigo[300],
    color: 'white',
    display: 'flex',
    justifyContent: 'flex-end',
    alignContent: 'center',
    height: '2em',
    boxShadow: "0px -3px 11px -3px rgba(0,0,0,0.75)",
    padding: theme.spacing(1)
  }
}))

export { styles as default, theme }
