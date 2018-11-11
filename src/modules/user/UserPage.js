import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/ActionCreators';
import NavBar from './components/NavBar';
import Grid from '@material-ui/core/Grid';
import Loading from './components/Loading';
import PaperSheet from './components/PaperSheet';
class UserPage extends React.Component {


  onHandleChange = event => {
    const inputvalue = event.target.value;
    this.props.fetchUser(inputvalue);
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div className="searchbar">
          <input type="text" placeholder="Search.." value={this.props.text}
                                   onChange={this.onHandleChange} />
        </div>
        <Grid container direction="row" justify="center" >
          <Grid item xs={8}>
            {this.props.isLoading? <Loading/> : <PaperSheet data={this.props.data} err={this.props.errMess} />}
      
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {

  return {
    data: state.user.data,
    isLoading: state.user.isLoading,
    errMess: state.user.errMess
  }

}

const mapDispatchToProps = (dispatch) => ({

  fetchUser: (inputData) => dispatch(fetchData(inputData))

});


export default connect(mapStateToProps, mapDispatchToProps)(UserPage);