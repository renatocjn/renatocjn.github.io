import React from 'react';

import Section from '../components/section';
import Grid from "@material-ui/core/Grid"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ExtensionIcon from '@material-ui/icons/Extension';

export default props => (
   <Section sectionId="skills" title="Skills"
      subtitle="What I can do" icon={<ExtensionIcon/>}>
      <List> <Grid component="Grid" container spacing={1}>
         {Object.entries(props.data.list).map((item, idx) => {
            const [tech, level] = item
            return (
               <Grid item xs={6} sm={4} md={3}> <ListItem>
                  <ListItemText>{tech} {level}</ListItemText>
                  {/*TODO maybe picture for the lvl? Maybe make this a graph*/}
               </ListItem> </Grid>
               )
         })}
      </Grid> </List>
   </Section>
)
