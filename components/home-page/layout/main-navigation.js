import Link from 'next/link';
import Logo from '../layout/logo';
import classes from '../layout/main-navigation.module.css';
function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/posts'>post</Link>
          </li>
          <li>
            <Link href='/contacts'>contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
