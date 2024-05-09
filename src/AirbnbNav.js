import './Style.css';
import src from './Airbnb-Logo.svg';
import a from './images/a.jpg';
import b from './images/b.jpg';
import c from './images/c.jpg';
import d from './images/d.webp';
import e from './images/e.jpg';
import f from './images/f.jpg';
import g from './images/g.webp';

function AirbnbNav() {
  return (
    <div>
      <nav className='airbnbnav'>
        <img src={src}></img>
      </nav>
      <section className='airbnb'>
        <div className='bnbhero'>
          <div className='staticimgs'>
            <div className='imgcon'>
              <img alt='image' src={a}></img>
            </div>
            <div className='imgcon'>
              <img alt='image' src={b}></img>
              <img src={c}></img>
            </div>
            <div className='imgcon'>
              <img alt='image' src={d}></img>
              <img alt='image' src={e}></img>
            </div>
            <div className='imgcon'>
              <img alt='image' src={f}></img>
              <img alt='image' src={g}></img>
            </div>
            <div className='imgcon'>
              <img alt='image' src={b}></img>
              <img alt='image' src={c}></img>
            </div>
          </div>
          <div className='bnbherotext'>
            <h2>Online Experiences</h2>
            <p>Just us for an awesome experience. we give the best</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AirbnbNav;
