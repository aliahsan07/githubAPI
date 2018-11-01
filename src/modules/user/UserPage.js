import React from 'react';
import UserProfile from './components/UserProfile';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/ActionCreators';

const mapStateToProps = state => {

  return {
    data: state.user.data,
    isLoading: state.user.isLoading,
    errMess: state.user.errMess
  }

}

const mapDispatchToProps = (dispatch) => ({
  
  fetchUser : (inputData) => dispatch(fetchData(inputData))

});

class UserPage extends React.Component{


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
            <UserProfile data={this.props.data} isLoading={this.props.isLoading} 
                          err={this.props.errMess} text={this.searchText}
                          extractData={this.extractData} updateSearch={this.updateSearch}
                          toggleLoading = {this.toggleLoading} fetchUser={this.props.fetchUser}
            />    
        </div>
      )

        
    

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserPage);