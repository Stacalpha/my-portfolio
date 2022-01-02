// import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/resume.module.scss';

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
                    <h1 className={styles.h1}>
                        Feranmi Akinlade
                        <small>Frontend Engineer &amp; UI Developer</small>
                    </h1>

                    <section>
                        <h2 className={styles.h2}>ABOUT</h2>
                        <p>
                            Feranmi is a Frontend Engineer with experience in developing responsive, performant and
                            accessible user interfaces. He is skilled in the latest web technologies including Javascript,
                            Node.js, GraphQL, React, SCSS, and more. He is passionate about creating
                            satisfying user experiences that are accessible to as many people as possible.
                        </p>
                    </section>

                    <section>
                        <h2 className={styles.h2}>EXPERIENCE</h2>

                        <h3 className={styles.h3}>
                            Senior Frontend Engineer <br />
                            <small>
                                <span>Helicarrier</span>
                                <span>November 2021 - Present (3 months)</span>
                            </small>
                        </h3>
                        <p>
                            Helicarrier is financially connecting Africans across the world
                            with cryptocurrency infrastructure.
                        </p>
                        <ul>
                            <li>
                                Conducted interviews and worked with the VP of Engineering
                                to find the best talent to grow the Frontend team.
                            </li>
                            <li>
                                Conducted code reviews, driving a high standard of code quality
                                for the Sendcash frontend team.
                            </li>
                        </ul>

                        <h3 className={styles.h3}>
                            Frontend Engineer <br />
                            <small>
                                <span>Helicarrier</span>
                                <span>January 2020 - November 2021 (2 Years)</span>
                            </small>
                        </h3>
                        <p>
                            Helicarrier is financially connecting Africans across the world
                            with cryptocurrency infrastructure.
                        </p>
                        <ul>
                            <li>
                                Identified areas for accessibility improvements
                                in our web apps.
                                Implemented and drove these improvements to completion.
                            </li>
                            <li>
                                Collaborated with the product team to scope new features,
                                ensuring that we ship MVPs in the shortest possible time.
                            </li>
                        </ul>

                        <h3 className={styles.h3}>
                            Web Developer <br />
                            <small>
                                <span>Independent Freelancer</span>
                                <span>January 2019 - January 2020 (1 Year)</span>
                            </small>
                        </h3>
                        <p>
                            I worked as a freelance web developer,
                            creating an online presence for small businesses with simple Jamstack websites.
                        </p>
                        <ul>
                            <li>
                                Effective communication with the client to understand the design and content
                                requirements for a website.
                            </li>
                            <li>
                                Created fully responsive layouts, ensuring that each page displayed perfectly across all
                                modern devices with varying screen sizes.
                            </li>
                            <li>
                                Wrote clean, readable and well documented code for easy maintenance and
                                improvement in the future.
                            </li>
                            <li>
                                Leveraged semantic markup to create accessible web pages.
                            </li>
                            <li>
                                Consumed third-party REST APIs to facilitate collection of data from users via web
                                forms without a server-side.
                            </li>
                            <li>
                                Leveraged the Jamstack by serving prerendered static pages for improved load
                                performance.
                            </li>
                        </ul>
                    </section>
                </section>

                <aside key={'Sidebar'} className={styles['sidebar']}>
                <img src="/assets/dp.jpg" className={styles['display-picture']} />

                <h2 className={styles.h2}>CONTACT</h2>
                <dl>
                    <dt>Email: </dt>
                    <dd>laurandidi21@gmail.com</dd>

                    <dt>Website: </dt>
                    <dd>www.giftegwuenu.com</dd>

                    <dt>Location: </dt>
                    <dd>Haarlem, Netherlands</dd>
                </dl>

                <h2 className={styles.h2}>SOCIAL</h2>
                <dl>
                    <dt>Twitter: </dt>
                    <dd>@lauragift21</dd>

                    <dt>GitHub: </dt>
                    <dd>@lauragift_</dd>

                    <dt>LinkedIn: </dt>
                    <dd>@lauragift_</dd>
                </dl>

                <h2 className={styles.h2}>SKILLS &amp; EXPERTISE</h2>
                <p>
                    HTML, CSS, JavaScript,
                    Vue, React, Webpack,
                    GraphQL, Jamstack, Node.js,
                    SQL, Gridsome, Technical Writing,
                    Adobe XD
                </p>

                <h2 className={styles.h2}>EDUCATION</h2>
                <dl>
                    <dt>BSc. COMPUTER SCIENCE | 2015</dt>
                    <dd>Houdegbe North American University, Cotonou, BN.</dd>
                </dl>
            </aside>
            </div>
        </main>
    </>;
};

export default Resume;

/*
Feranmi Akinlade
Frontend Engineer
● Location: Lagos, Nigeria
● Email: uxferanmi@gmail.com
● Phone: +2348179925186
● GitHub
● LinkedIn
● Website

PROFILE
-

WORK EXPERIENCE
-

EDUCATION AND TRAINING
● 2019
○ Google Africa Developer Scholarship
■ Relevant Coursework: Web security, Angular state management with
redux
○ HNG Internship (Finalist, HNGi6)
○ DevC Training with Facebook and Andela
● 2015
○ National Diploma in Computer Science - Yaba College of Technology
TECHNICAL SKILLS
HTML, CSS, JavaScript,
Node.js, React, React Native,
SCSS, GraphQL, Angular, Ionic.
*/
