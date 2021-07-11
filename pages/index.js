import styles from '../styles/home.module.scss';

const Home = ()=> {
  return <>
    <section className={[styles.section, styles['is-hero']].join(' ')} id="about">
      <div className={styles['section__wrapper']}>
        <h2>Hi 👋</h2>
        <p>I'm Feranmi, a Web Developer from Lagos, Nigeria.</p>
        <p>
          Currently, I develop great user experiences as a Front-end Engineer
          at <a href="https://buycoins.africa" target="_blank" rel="noopener noreferrer">
            Buycoins
          </a>.
        </p>
        <p>
          Buycoins is a cryptocurrency exchange for Africa, where we also
          develop <a href="https://sendcash.africa/" target="_blank" rel="noopener noreferrer">
            Sendcash
          </a> — a platform for users in Africa
          to send and receive money from around the world.
        </p>
        <p>
          I am passionate about user experience and web accessibility,
          and I enjoy writing about useful tips and tricks for developing web applications
          on my blog, <a href="http://webapp.tips">
            Web App Tips
          </a>.
        </p>

        <p>
          <button className={styles.button}>
            Click me
          </button>
        </p>
      </div>
      <img src="/assets/dp.jpg" className={styles['display-picture']} />
    </section>

    <hr className={styles.hr} />

    <section className={styles.section} id="speaking">
      <div className={styles['section__wrapper']}>
        <h2>Speaking</h2>
        <p>
          I enjoyed speaking at
          the <a href="https://medium.com/frontstackio/frontstack-event-recap-frontend-favourites-d0a7845e4039" target="_blank" rel="noopener noreferrer">
            Frontstack
          </a> conference where I talked about creating a better web for everyone
          by <a href="https://docs.google.com/presentation/d/1hl9zaoHPyiGaimguZ0JZShqFuAx2ORyloBltaV7g6ik/embed" target="_blank" rel="noopener noreferrer">
            building accessible websites
          </a>.
        </p>
        <p>
          I am passionate about web accessibility and user experience in general,
          and I love to talk about these things! <br />
        </p>
        <p>
          I would love to speak at your event. Do contact me if you're organising one.
        </p>
      </div>
    </section>

    <section className={styles.section} id="writing">
      <div className={styles['section__wrapper']}>
        <h2>Writing</h2>
        <p>
          I love to write about web apps and how to build them. I'm currently building
          out <a href="http://webapp.tips">webapp.tips</a> — a new home for all of my articles
          where I'll share little tips and tricks for building awesome web applications. <br />
        </p>
        <p>
          I also have a bunch of new content I'm excited to publish once it's live.
          Watch this space 😉. <br />
        </p>
        <p>
          If you would like me to write for your publication or some such,
          please <a href="mailto:uxFeranmi@gmail.com">contact me</a>.
        </p>
        
        <p>
          <button className={styles.button}>
            Click me
          </button>
          <button className={styles.button2}>
            Click me
          </button>
        </p>
        <p>
          <button className={styles.button3}>
            Click me
          </button>
          <button className={styles.button4}>
            Click me
          </button>
        </p>
      </div>
    </section>
  </>
}

/*Home.getInitialProps = async (context)=> {
  if (context.res) {
    console.log('setHeader')
    context.res.setHeader('Cache-Control', 'public, s-maxage=30, stale-while-revalidate')
  }

  console.log(context.asPath, context.query)

  const { data } = await axios.get('https://netlify-json-api.netlify.com/posts')

  return { posts: data }
}*/

export default Home;