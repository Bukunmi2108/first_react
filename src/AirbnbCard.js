import './Style.css';
import AirbnbCardProps from './AirbnbCardProps';
import a from './images/a.jpg';
import b from './images/b.jpg';
import c from './images/c.jpg';
import d from './images/d.webp';
import e from './images/e.jpg';
import f from './images/f.jpg';
import g from './images/g.webp';

export default function AirbnbCard(){
  return(
    <section className='airbnb1'>
      <div className='carousel-container'>
        <div className='bnb--carousel'>
          <AirbnbCardProps 
            img = {a}
            tag = 'Premuim'
            rating = '4.7'
            quantity = {10}
            location = 'U.S.A'
            title = "Gary's guitar lessons"
            price = {132} 
          />
          <AirbnbCardProps 
            img = {b}
            tag = 'Free'
            rating = '4.8'
            quantity = '30'
            location = 'Chile'
            title = "Custom Engagement rings"
            price = '0' 
          />
          <AirbnbCardProps 
            img = {d}
            tag = 'Premuim'
            rating = '4.6'
            quantity = '150'
            location = 'Russia'
            title = "Beautiful Scenery"
            price = '176' 
          />
          <AirbnbCardProps 
            img = {e}
            tag = 'Premuim'
            rating = '3.4'
            quantity = {57}
            location = 'Brazil'
            title = "Parcels for birthday"
            price = {441} 
          />
          <AirbnbCardProps 
            img = {f}
            tag = 'Free'
            rating = '4.8'
            quantity = '49'
            location = 'Japan'
            title = "Tours on Mount Gensheng"
            price = '2270' 
          />
        
        </div>
        <h3>TESTING</h3>
      </div>
    </section>
  );
}

