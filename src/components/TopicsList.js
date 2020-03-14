import React, {useEffect} from 'react';
import {ListItem, ListItemText} from '@material-ui/core';


const TopicsList = ({rooms, setActiveRoom}) => {
    return (
        <ul>
            {/*{rooms.map((room, id) => <ListItem key={id}*/}
            {/*                             button*/}
            {/*                             onClick={e => setActiveRoom(e.target.innerText)}>*/}
            {/*                            <ListItemText primary={room}/>*/}
            {/*                    </ListItem>)}*/}
        </ul>
    );
};

export default TopicsList;