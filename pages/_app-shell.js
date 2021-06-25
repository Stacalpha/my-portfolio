//import axios from 'axios'
//import Link from 'next/link'
//import { withRouter } from 'next/router'
import Head from 'next/head';
import './_styles/app-shell.scss';

const AppShell = (props)=> {
  return [
    <Head key={'Site-wide <head> content'}>
      <title>Fẹranmi Akinlade | Front-end Engineer</title>
    </Head>,

    <header key={'Titlebar'} className="site-header">
      <h1 className="page-title">
        <a href="#about">Fẹranmi Akinlade</a>
      </h1>

      <nav className="main-nav">
        <ul className="main-nav__list">
          <li className="main-nav__item ">
            <a href="#speaking">Speaking</a>
          </li>
          <li className="main-nav__item ">
            <a href="#writing">Blog</a>
          </li>
          <li className="main-nav__item ">
            <a href="mailto:uxFeranmi@gmail.com" title="Send me an email">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </header>,

    <main key={'Main content'}>
      {props.children}
    </main>,

    <footer key={'Site footer'} className="site-footer">
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
  ];
};

export default AppShell; //withRouter(Home);
