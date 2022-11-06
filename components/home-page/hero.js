import { classicNameResolver } from 'typescript';
import classes from './hero.module.css';
import Image from 'next/image';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/karl.png'
          alt='hihi'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I am karl</h1>
      <p>I BLOG SHIT LOL</p>
    </section>
  );
}

export default Hero;
