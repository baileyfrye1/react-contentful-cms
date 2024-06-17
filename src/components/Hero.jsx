import heroSVG from '../assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            quo. Odio magnam similique dicta nobis porro obcaecati molestias
            ipsa doloribus. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Possimus earum corporis iure dolore obcaecati alias quos quam
            animi, laborum repellat.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroSVG} alt='Woman and the browser' className='img' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
