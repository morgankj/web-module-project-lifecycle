import React from 'react';

class User extends React.Component {
    render() {
        const { user } = this.props;
        
        return(
            <div id="currentUser">
                <img src={user.avatar_url} />
                <div id="userInfo">
                    <a target="_blank" rel="noreferrer" href={user.html_url} ><h2>{user.name}</h2></a>
                    <p>({user.login})</p>
                    <p>Total Repos: {user.public_repos}</p>
                    <p>Total Followers: {user.followers}</p>
                </div>
            </div>
        );
    }
}

export default User;