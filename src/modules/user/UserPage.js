import React from 'react';
import UserProfile from './components/UserProfile';
import Loading from './components/Loading';

class UserPage extends React.Component{


  constructor(props){

    super(props);
    this.state = {
      data: null,
      isLoading: false,
      searchText: ''
    }
  }


  extractData = data => {

    this.setState({data: data});
    this.toggleLoading();

  }


  updateSearch = (inputvalue) => {
    
    this.setState(() =>({
      searchText: inputvalue,
    }));

  }

  toggleLoading = () => {

    this.setState({isLoading: !this.state.isLoading})

  }

  render(){


      return(
        <div>
            <UserProfile data={this.state.data} isLoading={this.state.isLoading} text={this.searchText}
                          extractData={this.extractData} updateSearch={this.updateSearch}
                          toggleLoading = {this.toggleLoading}
            />    
        </div>
      )

        
    

  }
}


export default UserPage;