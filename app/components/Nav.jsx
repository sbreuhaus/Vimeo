var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();
  },
  render: function(){
    return(
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu'>
            <li className='menu-text'><i className="fa fa-vimeo-square" aria-hidden="true"></i></li>
            <li>
              <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Vimeo Randomizer</IndexLink>
            </li>
            <li>
              <Link to='/about' activeClassName='active' activeStyle={{fontWeight:'bold'}}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
