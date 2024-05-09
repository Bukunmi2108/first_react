import './Style.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <h3 className='logo'>Procerum</h3>
      <ul className='navlink'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>

      </ul>
      <div className='btns'>
        <button className='btn-p'>login</button>
        <button className='btn-p'>Signup</button>
      </div>
    </nav>
  );
}



export default Navbar;
