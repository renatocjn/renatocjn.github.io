import { makeStyles } from '@material-ui/core/styles';

const appDrawerWidth = 200;
export default makeStyles(theme => ({
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
