import React from 'react';

class Follower extends React.Component {
    render() {
        const { follower } = this.props;
        
        return (
            <div key={follower.key} className="followerContainer">
                <img src={follower.avatar_url} alt="follower profile headshot" className="followerImg" />
                <p>{follower.login}</p>
            </div>
        )
    }
}

export default Follower;