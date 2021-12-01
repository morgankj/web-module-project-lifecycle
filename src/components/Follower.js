import React from 'react';

class Follower extends React.Component {
    render() {
        const { follower } = this.props;
        
        return (
            <div key={follower.key} className="followerContainer">
                <img src={follower.avatar_url} alt="follower profile headshot" className="followerImg" />
                <h3>{follower.login}</h3>
            </div>
        )
    }
}

export default Follower;