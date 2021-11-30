import React from 'react';

class Follower extends React.Component {
    render() {
        const { follower } = this.props;
        console.log(`Poki ${this.props.follower}: Renders DOM`);
        return (
            <div key={follower.id} className="followerContainer">
                <img src={follower.avatar_url} alt="follower profile headshot"/>
            </div>
        )
    }
}

export default Follower;