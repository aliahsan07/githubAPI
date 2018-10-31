import React from 'react';
import NavBar from './NavBar';
import UserCard from './UserCard';
import PaperSheet from './PaperSheet';
import Loading from './Loading';
import Grid from '@material-ui/core/Grid';


class UserProfile extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      data: null
    };

    this.fetchData = this.fetchData.bind(this);
  }

  updateUserData = data => {

    this.setState({data});
    
  }
  

  fetchData(inputData){

    
    const url = `https://api.github.com/users/${inputData}`;
  
    fetch(url, {
        method: 'GET',
      }).then(res => res.text())
        .then(body => this.updateUserData((JSON.parse(body)))) 
        .catch(error => console.error(error));
  
  }


  onHandleChange = event => {
    const inputvalue = event.target.value;
    
    this.setState(() =>({
      input: inputvalue,
    }));

    this.fetchData(inputvalue);

  }

  render(){

    var toRender;

    if (this.state.input && !this.state.data){
        toRender = <Loading> </Loading>
    }else if(this.state.input && this.state.data){
      toRender = <PaperSheet data={this.state.data}/>
    } else {
      toRender = <div></div>
    }


    return(
      <div>
        <NavBar/>
        <div className="searchbar">
          <input type="text" placeholder="Search.." value={this.state.input}
                                   onChange={this.onHandleChange} />
        </div>
        <Grid container direction="row" justify="center" >
          <Grid item xs={8}>
            {toRender}
          </Grid>
        </Grid>
      </div>
    )
  }

}

export default UserProfile;