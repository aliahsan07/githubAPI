import React from 'react';
import UserProfile from './components/UserProfile';



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
              
          </div>
        )
      }else{
        return <div></div>
      }

        
    

  }
}


export default UserPage;