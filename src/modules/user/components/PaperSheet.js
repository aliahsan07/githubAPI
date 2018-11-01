import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  
});

function PaperSheet(props) {
  const { classes } = props;

  console.log(props.err);


  if (props.data === null && props.err=== null){
    return <div></div>
  }
  else if (props.err){
    console.log("I am here");
    return <h4>No User data found against searched Value</h4>
  }
  
  else{

      return (
        <div>
          <Paper className={classes.root} elevation={1}>
            <Grid container spacing={24}>
              <Grid item xs={4} >

                <Card className={classes.card}>
                    <CardMedia
                      component="img"
                      alt={props.data.name}
                      className={classes.media}
                      height="270"
                      image={props.data.avatar_url}
                      title={props.data.name}
                    />

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {props.data.name}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="h6">
                        @{props.data.login}
                      </Typography>
                      <Typography component="p">
                        {props.data.bio}
                      </Typography>
                    </CardContent>
                </Card>

              </Grid>

              <Grid item xs={8} >
                <Paper className={classes.root} elevation={1}>
                  <Typography variant="h5" component="h3">
                    User Data collected through GitHub API 
                    <hr/>
                  </Typography>
                  <Typography component="p">
                    <strong>Account created at: </strong> {new Date(props.data.created_at).toString()}
                    <hr/>
                    <strong>Location: </strong> {props.data.location}
                    <hr/>
                    <strong>Number of followers: </strong> {props.data.followers}
                    <hr/>
                    <strong>Number of following: </strong> {props.data.following}
                    <hr/>
                    <strong>Number of public repositories: </strong> {props.data.public_repos}
                    <hr/>
                    <strong>Number of public gists: </strong> {props.data.public_gists}
                    
                  </Typography>
                  
                </Paper>

                <h4>You can contribute to this project here: <a href="https://github.com/aliahsan07/githubAPIData">
                          Repository Link</a></h4>
              </Grid>


            </Grid>
          </Paper>
        </div>
  )};

}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
