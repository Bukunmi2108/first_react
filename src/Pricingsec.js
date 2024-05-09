import './Style.css';

function Pricing() {
  return (
    <section id='pricing' className='pricing'>
      <h3 className='subheading'>Our pricing</h3>
      <div className='pricinggrid'>
        <div className='price'>
          <h4 className='pricetag'>
            free
          </h4>
          <p className='description'>it is free</p>
          <button className='btn-p'>Sign Up</button>
        </div>
        <div className='price'>
          <h4 className='pricetag'>
            free
          </h4>
          <p className='description'>it is free</p>
          <button className='btn-p'>Sign Up</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
