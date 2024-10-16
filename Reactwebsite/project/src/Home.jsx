import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsDropdownVisible(false);
  };

  const dropdownStyle = {
    display: isDropdownVisible ? 'block' : 'none',
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
  };

  const dropdownItemStyle = {
    color: 'black',
    padding: '12px 16px',
    textDecoration: 'none',
    display: 'block',
    cursor: 'pointer',
  };

  return (
    <div>
      <h1>Home Page</h1>
      <div
        style={{ position: 'relative', display: 'inline-block' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '16px', fontSize: '16px', border: 'none', cursor: 'pointer' }}>Navigate</button>
        <div style={dropdownStyle}>
          <div style={dropdownItemStyle} onClick={() => handleNavigation('/about')}>About</div>
          <div style={dropdownItemStyle} onClick={() => handleNavigation('/contact')}>Contact</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
