import React from 'react';

import Follower from './Follower';

class FollowerList extends React.Component {
    render() {
        return (
            <div id="followerGallery">
                <h3>FOLLOWERS:</h3>
                {this.props.followers.map(follower => (
                    <Follower key={follower.id} follower={follower} />
                ))}
            </div>
        )
    }
}

export default FollowerList;