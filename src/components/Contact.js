import PropTypes from 'prop-types';
import React from 'react';
import './Contact.css';

function Contact(props) {
    
    return (
        <figure className="Contact">
            <img className="avatar" src={props.avatar} alt={props.name} />
            <div>
                <h4 className="name">{props.name}</h4>
                <div className="status">
                    <div className={props.online ? 'status-online' : 'status-offline'}></div>
                    <div className="status-text">{props.online ? "Online" : "Offline"}</div>
                </div>
            </div>
        </figure>
    );
}

Contact.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    online: PropTypes.bool,
};

export default Contact;