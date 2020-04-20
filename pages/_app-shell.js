//import axios from 'axios'
//import Link from 'next/link'
//import { withRouter } from 'next/router'
import Head from 'next/head';
import './_styles/app-shell.scss';

const AppShell = (props)=> {
  return [
    <Head key={'Site-wide <head> content'}>
      <title>Next on Netlify</title>
    </Head>,

    <main key={'Main content'} id="landing-section" className={`slides ${position}-slides`} onClick={this.props.onClick}>
      {props.children}
    </main>
  ];
};

export default AppShell; //withRouter(Home);
