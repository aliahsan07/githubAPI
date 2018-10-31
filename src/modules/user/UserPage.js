import React from 'react';
import UserProfile from './components/UserProfile';
import Loading from './components/Loading';

class UserPage extends React.Component{


  constructor(props){

    super(props);
    this.state = {
      data: null,
      loading: false,
      searchText: ''
    }
  }


  extractData = data => {

    this.setState({data: data});

  }

  render(){


      return(
        <div>
            <UserProfile data={this.state.data}
            />    
        </div>
      )

        
    

  }
}


export default UserPage;