import Link from 'next/link';
import Head from 'next/head';
import styles from './_styles/app-shell.module.scss';

const AppShell = (props)=> {
  return <>
    <Head key={'Site-wide <head> content'}>
      <title>Fẹranmi Akinlade | Front-end Engineer</title>
    </Head>

    <header key={'Titlebar'} className={styles['site-header']}>
      <h1 className={styles['page-title']}>
        <Link href={{ pathname: '/', hash: '#about' }}>
          <a>Fẹranmi Akinlade</a>
        </Link>
      </h1>

      <nav className={styles['main-nav']}>
        <ul className={styles['main-nav__list']}>
          <li className={styles['main-nav__item']}>
            <Link href={{ pathname: '/', hash: '#speaking' }}>
              <a>Speaking</a>
            </Link>
          </li>
          <li className={styles['main-nav__item']}>
            <Link href={{ pathname: '/', hash: '#writing' }}>
              <a>Writing</a>
            </Link>
          </li>
          <li className={styles['main-nav__item']}>
            <a href="mailto:uxFeranmi@gmail.com" title="Send me an email">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <main key={'Main content'} className={styles['main-content']}>
      {props.children}
    </main>

    <footer key={'Site footer'} className={styles['site-footer']}>
      <address>
        <a href="https://twitter.com/uxFeranmi" title="Find me on Twitter"
            target="_blank" rel="noopener noreferrer">
          Twitter
        </a> &nbsp;
        <a href="https://github.com/uxFeranmi" title="My GitHub profile"
            target="_blank" rel="noopener noreferrer">
          GitHub
        </a> &nbsp;
        <a href="https://stackoverflow.com/users/story/7665742"
            target="_blank" rel="noopener noreferrer"
            title="My developer story on Stack Overflow">
          Stack Overflow
        </a> &nbsp;
        <a href="https://www.linkedin.com/in/akinlade-feranmi-0b6bbb170"
            target="_blank" rel="noopener noreferrer" title="My LinkedIn profile">
          LinkedIn
        </a> &nbsp;
        <a href="mailto:uxFeranmi@gmail.com" title="Send me an email">
          Contact me
        </a> &nbsp;
      </address>
    </footer>
  </>;
};

export default AppShell;
