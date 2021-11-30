import React from 'react';

class User extends React.Component {
    render() {
        return (
            <div>
                <div id={this.props.userData.id} >
                    <img src={this.props.userData.avatar_url} alt="user github headshot" />
                    <div>
                        <h3>{this.props.userData.name}</h3>
                        <p>({this.props.userData.bio})</p>
                        <p>TOTAL REPOS: {this.props.userData.public_repos}</p>
                        <p>TOTAL FOLLOWERS: {this.props.userData.followers}</p>
                    </div>
                    <div>FOLLOWERS</div>
                </div>
            </div>
        )
    }
}

export default User;