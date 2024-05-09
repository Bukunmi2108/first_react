import './Style.css';
import sr from './bukunmi.jpg'

function Profile() {
  return (
    <section id='profile' className='profile'>
      <div className='p'>
        <img alt='image'  className='' src={sr}></img>
        <div className='pro'>
          <h3 className='profilename'>
            Laura Smith
          </h3>
          <p className='title'>
            WEB DEVELOPER
          </p>
          <div className='btns'>
            <button className='btn-p'>Linkedin</button>
            <button className='btn-p'>Twitter</button>
          </div>
        </div>
        <div className='asec'>
          <div className='absec'>
            <h4>About</h4>
            <p className='description'>
              Lorem ipsum resct yure from here hrew
            </p>
          </div>
          <div className='absec'>
            <h4>Interests</h4>
            <p className='description'>
              Lorem ipsum resct yure from here hrew
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
