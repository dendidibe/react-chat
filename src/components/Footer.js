import React, {useState, useContext} from 'react';
import Context from './Context/Context'

const Footer = ({activeRoom}) => {
    const [textValue, setTextValue] = useState('')
    const {chats, sendMessage, user} = useContext(Context)

    const submitHandler = (e) => {
        e.preventDefault();
        sendMessage({user, text: textValue, room: activeRoom });
        setTextValue('')
    }
    return ( 
        <footer>
            <form
                onSubmit={submitHandler}
            >
                <div>
                    <input placeholder="Type your message" value={textValue} onChange={e => setTextValue(e.target.value)}/>
                </div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png" alt=""/>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png" alt=""/>
                <button type='submit'>Send</button>
            </form>

        </footer>
    );
};

export default Footer;