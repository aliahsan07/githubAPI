import React from 'react';
import NavBar from './NavBar';
import PaperSheet from './PaperSheet';
import Loading from './Loading';
import Grid from '@material-ui/core/Grid';


class UserProfile extends React.Component{

  fetchData = (inputData) => {

    
    const url = `https://api.github.com/users/${inputData}`;
    this.props.toggleLoading();
  
    fetch(url, {
        method: 'GET',
      }).then(res => res.text())
        .then(body => this.props.extractData((JSON.parse(body))))
        .catch(error => console.error(error));
  
  }


  onHandleChange = event => {
    const inputvalue = event.target.value;
    this.props.updateSearch(inputvalue);
    this.fetchData(inputvalue);

  }

  render(){

   

    const { isLoading } = this.props;


    return(
  
      <div>
        <NavBar/>
        <div className="searchbar">
          <input type="text" placeholder="Search.." value={this.props.text}
                                   onChange={this.onHandleChange} />
        </div>
        <Grid container direction="row" justify="center" >
          <Grid item xs={8}>
            {isLoading? <Loading/> : <PaperSheet data={this.props.data}/>}
      
          </Grid>
        </Grid>
        
      </div>
    )
  }

}

export default UserProfile;