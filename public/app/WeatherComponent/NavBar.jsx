var React = require('react');
var { Link, IndexLink } = require('react-router');


var NavBar = React.createClass({
    render: function () {
        return (
            
            <div className="top-bar">
                <h3>NavBar Component</h3>
                <div className="top-bar-left">
                    
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Home</IndexLink>
                        </li>
                        <li>
                            <Link to="/AboutUs" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About Us</Link>
                        </li>
                        <li>
                            <Link to="/Services" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Services</Link>
                        </li>
                        <li>
                            <Link to="/LocateUs" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Locate Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});
module.exports = NavBar;

