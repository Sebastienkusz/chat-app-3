import './Contact.css';

function Contact() {
    const name = 'Sally Diaz';
    const avatar = 'https://randomuser.me/api/portraits/women/93.jpg';
    const online = true;
    return (
        <figure className="Contact">
            <img className="avatar" src={avatar} alt={name} />
            <div>
                <h4 className="name">{name}</h4>
                <div className="status">
                    <div className={online ? 'status-online' : 'status-offline'}></div>
                    <div className="status-text">{online ? "Online" : "Offline"}</div>
                </div>
            </div>
        </figure>
    );
}
export default Contact;