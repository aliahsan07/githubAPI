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



  render(){
      return(
        <div>
            <UserProfile data={this.props.data} isLoading={this.props.isLoading} 
                          err={this.props.errMess}
                         fetchUser={this.props.fetchUser} />    
        </div>
      )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserPage);