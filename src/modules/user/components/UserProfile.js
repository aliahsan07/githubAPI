import React from 'react';
import NavBar from './NavBar';
import UserCard from './UserCard';
import PaperSheet from './PaperSheet';
import Grid from '@material-ui/core/Grid';
import SearchBar from '@opuscapita/react-searchbar';


class UserProfile extends React.Component{

  render(){

    return(
      <div>
        <NavBar/>
        <SearchBar className="searchbar"
                onSearch={this.handleSearch}
                // value={this.state.searchValue}
        />
        <Grid container direction="row" justify="center" >
          <Grid item xs={4}>
            <UserCard image={this.props.image} name={this.props.name} bio={this.props.bio}/>
          </Grid>
          <Grid item xs={8}>
            <PaperSheet text='email' email={this.props.data.email}/>
            <PaperSheet text='followers' email={this.props.data.followers.totalCount}/>
            <PaperSheet text='following' email={this.props.data.following.totalCount}/>
          </Grid>
        </Grid>
      </div>
    )
  }

}

export default UserProfile;