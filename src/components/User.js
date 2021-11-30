import React from 'react';
import axios from 'axios';

class User extends React.Component {
    state = {
        user: {},
        followers: []
    }
    
    componentDidMount() {
        axios.get("https://api.github.com/users/morgankj")
            .then(res => {
                this.setState({
                    ...this.state,
                    user: res.data
                });
            })
            .catch(err => console.error(err));
        
        axios.get("https://api.github.com/users/morgankj/followers")
            .then(res => {
                this.setState({
                    ...this.state,
                    followers: res.data
                });
            })
            .catch(err => console.error(err));
    }
    
    render() {
        console.log(this.state)
        return (
            <div>
                <div id="PLACEHOLDER User div - which will also call the follower list component">
                    <div>USER</div>
                    <div>FOLLOWERS</div>
                </div>
            </div>
        )
    }
}

export default User;