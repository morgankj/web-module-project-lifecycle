import React from 'react';

import Follower from './Follower';

class Followers extends React.Component {
    render() {
        return (
            <div id="followerGallery">
                {this.props.followers.map(follower => {
                    <Follower key={follower.id} follower={follower} />
                })}
            </div>
        )
    }
}

export default Followers;