import React from 'react';

class Follower extends React.Component {
    componentDidMount() {
        console.log(`Follower ${this.props.follower.login}: Component Has Mounted`);
    }
    
    render() {
        const { key, follower } = this.props;

        console.log(this.props.follower);
        
        return (
            <div key={key} className="followerContainer">
                <img src={follower.avatar_url} alt="follower profile headshot" className="followerImg" />
                <p>{follower.login}</p>
            </div>
        )
    }
}

export default Follower;