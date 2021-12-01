import React from 'react';

import Follower from './Follower';

class FollowerList extends React.Component {
    render() {
        return (
            <div>
                <h2>FOLLOWERS:</h2>
                <div id="followerGallery">
                    {this.props.followers.map(follower => (
                        <Follower key={follower.id} follower={follower} />
                    ))}
                </div>
            </div>
        )
    }
}

export default FollowerList;