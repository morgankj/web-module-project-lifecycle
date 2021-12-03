import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {
    render() {
        const { followers } = this.props;
        
        return(
            <div id="followerContainer" >
                <h2>FOLLOWERS:</h2>
                <div id="followers">
                    {followers.map(follower => {
                        return(<Follower follower={follower} key={follower.id} />)
                    })}
                </div>
            </div>
        );
    }
}

export default FollowerList;