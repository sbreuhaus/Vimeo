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
            <li className='menu-text'>Vimeo</li>
            <li>
              <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Get videos</IndexLink>
            </li>
            <li>
              <Link to='/about' activeClassName='active' activeStyle={{fontWeight:'bold'}}>About</Link>
            </li>
            <li>
              <Link to='/examples' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
