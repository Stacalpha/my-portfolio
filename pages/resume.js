// import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/resume.module.scss';
// import EmailIcon from '../components/icons/email';
import MailIcon from '../components/icons/mail';
import GitHubIcon from '../components/icons/github';
import LinkedInIcon from '../components/icons/linkedin';
// import LocationIcon from '../components/icons/location';
// import WebsiteIcon from '../components/icons/website';
// import ProfileWebsiteIcon from '../components/icons/profile-website';
import TwitterIcon from '../components/icons/twitter';
import HyperlinkIcon from '../components/icons/hyperlink';
import LocationPinIcon from '../components/icons/pin-location';
import InstagramIcon from '../components/icons/instagram';

const Resume = ()=> {
    return <>
        <Head key={'<head> content'}>
            <title>Feranmi's Resume</title>
            <link rel="icon" href="/favicon.png" type="image/png" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
        </Head>

        <main key={'Main content'} className={styles['main-content']}>
            <div className={styles['inner-wrapper']}>
                <section className={styles['main-section']}>
                    <h1 className={styles.h1 + ' mb-xl'}>
                        Feranmi Akinlade
                        <small>Senior Frontend Engineer</small>
                    </h1>

                    <section>
                        <h2 className={styles.h2 + ' mb-s'}>ABOUT</h2>
                        <p>
                            I'm a Frontend Engineer with experience in developing responsive, performant and
                            accessible user interfaces. I have a deep understanding of the Open Web Stack of technologies,
                            and I'm passionate about creating satisfying user experiences that are accessible
                            to as many people as possible.
                        </p>
                    </section>

                    <section>
                        <h2 className={styles.h2 + ' mb'}>EXPERIENCE</h2>

                        <h3 className={styles.h3 + ' mb-s'}>
                            SENIOR FRONTEND ENGINEER <br />
                            <small>
                                <span className='italic'>
                                    <a href='https://helicarrier.studio'
                                            target='_blank'
                                            rel='noreferrer noopener'
                                            className='color-unset hover-underline'>
                                        Helicarrier
                                    </a>
                                </span>
                                <span> | </span>
                                <span>Nov 2021 &ndash; Present</span>
                            </small>
                        </h3>
                        <p className='mb-s'>
                            As a Senior Engineer, I am leading the architecture and development
                            of <a href='https://sendcash.africa'
                                target='_blank'
                                rel='noreferrer noopener'
                                className='color-unset hover-underline fw-normal'
                            >Sendcash</a>&mdash;a hybrid web and mobile consumer app for
                            cryptocurrency-powered cross-border remittance.
                        </p>
                        <ul className='mb-l'>
                            <li className='mb-xs'>
                                Set up a frontend architecture optimized for high performance,
                                with code splitting, asset preloading and server-side rendering
                            </li>
                            <li className='mb-xs'>
                                Conducting code reviews, driving a high standard of code quality
                                and user experience
                            </li>
                            <li className='mb-xs'>
                                Pioneered and maintaining internal documentaion of the frontend codebase.
                            </li>
                            <li className='mb-xs'>
                                Evangelizing accessibility standards in product
                            </li>
                            <li className='mb-xs'>
                                Coordinating a distributed team to develop and ship new features
                                in a timely manner
                            </li>
                            <li className='mb-xs'>
                                Providing support and guidance to other team members
                            </li>
                            <li>
                                Conducted interviews and worked with the VP of Engineering
                                to find the best talent to grow the Frontend team
                            </li>
                        </ul>

                        <h3 className={styles.h3 + ' mb-s'}>
                            FRONTEND ENGINEER <br />
                            <small>
                                <span className='italic'>
                                    <a href='https://helicarrier.studio'
                                            target='_blank'
                                            rel='noreferrer noopener'
                                            className='color-unset hover-underline'>
                                        Helicarrier
                                    </a>
                                </span>
                                <span> | </span>
                                <span>Jan 2020 &ndash; Nov 2021</span>
                            </small>
                        </h3>
                        <ul className='mb-l'>
                            <li className='mb-xs'>
                                Worked across multiple products with a varied tech stack that
                                included React, React Native, Vue.js, Angular, Ionic, Node.js, EJS, and more.
                            </li>
                            <li className='mb-xs'>
                                Conducted accessibility tests and implement necessary improvements
                            </li>
                            <li className='mb-xs'>
                                Collaborated with peers and stakeholders in a fast-paced distributed team.
                            </li>
                            <li className='mb-xs'>
                                Developed hybrid mobile apps with Ionic and React Native.
                            </li>
                            <li>
                                Wrote technical articles for the company blog
                            </li>
                        </ul>

                        <h3 className={styles.h3 + ' mb-s'}>
                            WEB DEVELOPER <br />
                            <small>
                                <span className='italic'>Freelance</span>
                                <span> | </span>
                                <span>Jan 2019 &ndash; Jan 2020</span>
                            </small>
                        </h3>
                        <p className='mb-s'>
                            As a freelance web developer my goal was to create an online presence
                            for small businesses, helping them expand their reach.
                        </p>
                        <ul>
                            <li className='mb-xs'>
                                Communicating effectively with the client to scope out project requirements
                            </li>
                            <li className='mb-xs'>
                                Created fully responsive layouts, ensuring a
                                great viewing experience for both mobile and desktop users
                            </li>
                            <li className='mb-xs'>
                                Used semantic markup to create accessible web pages
                            </li>
                            <li className='mb-xs'>
                                Consumed third-party REST APIs to facilitate collection of data from users via web
                                forms without a server-side
                            </li>
                            <li className='mb-xs'>
                                Favored the Jamstack principle of prerendered static pages for improved load
                                performance
                            </li>
                            <li className='mb-xs'>
                                Worked with WordPress and the WooCommerce API to build a fully
                                customized UI for an online store
                            </li>
                        </ul>
                    </section>
                </section>

                <aside key={'Sidebar'} className={styles['sidebar']}>
                    <img src="/assets/dp.jpg" className={styles['display-picture']} />

                    <h2 className={styles.sidebar_h2}>CONTACT</h2>
                    <dl>
                        <div className='flex align-center mb'>
                            <dt className='inline-icon'>
                                <span className='sr-only'>Email:</span>
                                {/* <EmailIcon /> */}
                                <MailIcon />
                            </dt>
                            <dd>
                                <a href="mailto:hello@feranmi.dev"
                                        target='_blank'
                                        rel='noreferrer noopener'>
                                    hello@feranmi.dev
                                </a>
                            </dd>
                        </div>

                        <div className='flex align-center mb'>
                            <dt className='inline-icon'>
                                <span className='sr-only'>Personal Website:</span>
                                {/* <WebsiteIcon /> */}
                                <HyperlinkIcon />
                            </dt>
                            <dd>
                                <a href="https://feranmi.dev"
                                        target='_blank'
                                        rel='noreferrer noopener'>
                                    https://feranmi.dev
                                </a>
                            </dd>
                        </div>

                        <div className='flex align-center mb'>
                            <dt className='inline-icon'>
                                <span className='sr-only'>Location:</span>
                                {/* <LocationIcon /> */}
                                <LocationPinIcon />
                            </dt>
                            <dd>Lagos, Nigeria</dd>
                        </div>
                    </dl>

                    <h2 className={styles.sidebar_h2}>SKILLS</h2>
                    <ul>
                        <li className='mb-xs'>
                            HTML
                        </li>
                        <li className='mb-xs'>
                            CSS, SCSS
                        </li>
                        <li className='mb-xs'>
                            JavaScript
                        </li>
                        <li className='mb-xs'>
                            WAI-ARIA
                        </li>
                        <li className='mb-xs'>
                            React, Next.js, Vue.js
                        </li>
                        <li className='mb-xs'>
                            Webpack, Babel
                        </li>
                        <li className='mb-xs'>
                            Node.js
                        </li>
                        <li className='mb-xs'>
                            React Native
                        </li>
                        <li className='mb-xs'>
                            Technical Writing
                        </li>
                    </ul>

                    <h2 className={styles.sidebar_h2}>EDUCATION</h2>
                    <ul className='list-unstyled'>
                        <li>
                            <span className='d-block text-bold mb-xs'>
                                NATIONAL DIPLOMA: COMPUTER SCIENCE
                            </span>
                            <span>
                                <span className='d-block mb-xs italic'>2015</span>
                                Yaba College of Technology, <br />
                                Lagos, Nigeria.
                            </span>
                        </li>
                    </ul>

                    <h2 className={styles.sidebar_h2}>TRAINING</h2>
                    <ul>
                        <li className='mb'>
                            <a href='https://help.pluralsight.com/help/google-africa-developer-scholarship-2021'
                                    target="_blank"
                                    rel='noreferrer noopener'
                                    className='d-block mb-s'>
                                Google Africa Developer Scholarship
                            </a>
                            <span className='d-block mb-xs'>
                                Mobile Web Specialist
                            </span>
                            <span className='italic'>
                                <a href="https://www.pluralsight.com/"
                                        target="_blank"
                                        rel='noreferrer noopener'>
                                    Pluralsight
                                </a> | 2019
                            </span>
                        </li>
                        <li className='mb'>
                            <a href='https://internship.zuri.team/'
                                    target="_blank"
                                    rel='noreferrer noopener'
                                    className='d-block mb-s'>
                                HNG Internship
                            </a>
                            <span className='d-block mb-xs'>
                                Frontend Development
                            </span>
                            <span className='italic'>2019</span>
                        </li>
                        <li className='mb'>
                            <a href='https://andela.com/alc/devc-training-with-andela-2019/'
                                    target="_blank"
                                    rel='noreferrer noopener'
                                    className='d-block mb-s'>
                                DevC Training with Facebook and Andela
                            </a>
                            <span className='d-block mb-xs'>
                                Core track, Web
                            </span>
                            <span className='italic'>
                                <a href="https://openclassrooms.com"
                                        target="_blank"
                                        rel='noreferrer noopener'>
                                    OpenClassrooms
                                </a> | 2019
                            </span>
                        </li>
                    </ul>

                    <h2 className={styles.sidebar_h2}>SOCIAL</h2>
                    <dl className='socials'>
                        <div className='flex align-center mb'>
                            <dt className='inline-icon'>
                                <span className='sr-only'>LinkedIn:</span>
                                <span className='inline-icon__icon'
                                        style={{
                                            backgroundColor: 'white',
                                            borderRadius: '1000px',
                                        }}>
                                    <LinkedInIcon />
                                </span>
                            </dt>
                            <dd>
                                <a href="https://linkedin.com/in/uxFeranmi"
                                        target='_blank'
                                        rel='noreferrer noopener'>
                                    @uxFeranmi
                                </a>
                            </dd>
                        </div>

                        <div className='flex align-center mb'>
                            <dt className='inline-icon'>
                                <span className='sr-only'>GitHub:</span>
                                <GitHubIcon />
                            </dt>
                            <dd>
                                <a href="https://github.com/uxFeranmi"
                                        target='_blank'
                                        rel='noreferrer noopener'>
                                    @uxFeranmi
                                </a>
                            </dd>
                        </div>

                        <div className='flex align-center mb'>
                            <dt className='inline-icon'>
                                <span className='sr-only'>Twitter:</span>
                                <span className='inline-icon__icon'
                                        style={{
                                            backgroundColor: 'white',
                                            borderRadius: '1000px',
                                        }}>
                                    <TwitterIcon />
                                </span>
                            </dt>
                            <dd>
                                <a href="https://twitter.com/uxFeranmi"
                                        target='_blank'
                                        rel='noreferrer noopener'>
                                    @uxFeranmi
                                </a>
                            </dd>
                        </div>

                        <div className='flex align-center mb'>
                            <dt className='inline-icon'>
                                <span className='sr-only'>Instagram:</span>
                                <span className='inline-icon__icon'
                                        style={{
                                            backgroundColor: 'white',
                                            borderRadius: '1000px',
                                        }}>
                                    <InstagramIcon />
                                </span>
                            </dt>
                            <dd>
                                <a href="https://instagram.com/feranmi.dev"
                                        target='_blank'
                                        rel='noreferrer noopener'>
                                    @feranmi.dev
                                </a>
                            </dd>
                        </div>
                    </dl>
                </aside>
            </div>
        </main>
    </>;
};

export default Resume;
