import React from 'react';

const TopicsListItem = () => {
    return (
        <li>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" />
                <div>
                    <h2>Prénom Nom</h2>
                    <h3>
                        <span className="status orange"/>
                        offline
                    </h3>
                </div>
        </li>
    );
};

export default TopicsListItem;