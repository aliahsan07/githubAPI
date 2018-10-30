import React from 'react';
import UserProfile from './UserProfile';
import SearchBar from '@opuscapita/react-searchbar';


const accessToken = 'ff5ad8ebaf1f8b0e01416772fe6a1fd13a04c2bc';
const query = `{
  repositoryOwner(login: "aliahsan07") {
    login
    ... on User {
      bio
      location
      email
      name
      avatarUrl
      createdAt
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositoriesContributedTo {
        totalCount
        totalDiskUsage
      }
      isEmployee
    }
  }
}`
var img;


class Main extends React.Component{


  constructor(props){

    super(props);
    this.state = {
      data: null
    }
  }


  extractData = data => {
    data = data.repositoryOwner;
    console.log("email: ", data.email);
    console.log("username: ", data.login);
    console.log("bio: ", data.bio);
    console.log("location: ", data.location);
    console.log("url: ", data.avatarUrl);
    console.log("createdAt: ", new Date(data.createdAt));
    console.log("followers: ", data.followers.totalCount);
    console.log("following: ", data.following.totalCount);
    console.log("repos contributed to: ", data.repositoriesContributedTo.totalCount);

    this.setState({data: data});

  }

  componentDidMount(){
    fetch('https://api.github.com/graphql', {
      method: 'POST',
      body: JSON.stringify({query}),
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    }).then(res => res.text())
      .then(body => img = this.extractData(JSON.parse(body).data))  // {"data":{"repository":{"issues":{"totalCount":247}}}}
      .catch(error => console.error(error));
  }

  render(){

      if (this.state.data){
        return(
          <div>

              <UserProfile image={this.state.data.avatarUrl} name={this.state.data.name}
                            bio={this.state.data.bio}
                            data = {this.state.data}
              />
              <SearchBar className="searchbar"
                onSearch={this.handleSearch}
                value={this.state.searchValue}
              />
          </div>
        )
      }else{
        return <div></div>
      }

        
    

  }
}


export default Main;