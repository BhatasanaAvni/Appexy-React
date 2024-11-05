import { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { user1 } from '../../../../assets/Image/users/User';
const UserDropdown = () => {
    const [show, setShow] = useState(false);

    const handleToggle = () => {
        setShow(!show);
    };

    return (
        <NavDropdown
            title={
                <div className="d-flex align-items-center" onClick={handleToggle}>
                    <img 
                        src={user1} 
                        className="avatar-xs rounded-circle me-2" 
                        style={avatarStyle} 
                        alt="" 
                    />
                    <div className="lh-base">
                        <span className="fw-semibold fs-13 d-block">Jesica B</span>
                        <span className="text-muted fs-13">Admin</span>
                    </div>
                </div>
            }
            id="user"
            show={show}
            onToggle={handleToggle}
            drop="down" 
        >
            <NavDropdown.Item href="#">
                <i className="mdi mdi-account-outline fs-20 me-1"></i>
                Profile
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
                <i className="mdi mdi-cog-outline fs-20 me-1"></i>
                Settings
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
                <i className="mdi mdi-microphone fs-20 me-1"></i>
                Support
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">
                <i className="mdi mdi-lock-open-outline fs-20 me-1"></i>
                Sign Out
            </NavDropdown.Item>
        </NavDropdown>
    );
};

export default UserDropdown;
const avatarStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '2rem',
    width: '2rem',
    borderRadius: '50%',
    boxShadow: '0px 5px 14px rgba(31, 97, 235, 0.08)',
    backgroundColor: '#fff'
};
