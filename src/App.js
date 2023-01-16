import logo from './logo.svg';
import './assets/css/main.css';

function App() {
  const github = new URL('./images/github-logo.png', import.meta.url)
  const circle = new URL('./images/pic01.jpg', import.meta.url)
  const store = new URL('./images/ecommerce-site-thumbnail.jpg', import.meta.url)
  const restaurant = new URL('./images/restaurant-finder-thumbnail.jpg', import.meta.url)
  const airbnb = new URL('./images/airbnb-thumbnail.jpg', import.meta.url)
  const chat = new URL('./images/chat-app-thumbnail.png', import.meta.url)
  return (

    <div id="page-wrapper">

        <header id="header" className="alt">
          <h1><a href="index.html">Portfolio</a></h1>
          
        </header>

        {/* Intro */}
        <section id="banner">
          <div className="inner">
            <h2>Hello, I'm Jamal Davis!</h2>
            <p>A man with a passion for learning and problem solving.</p>
            
          </div>
        </section>


        <section id="wrapper">

            {/* About me */}
            <section id="one" className="wrapper spotlight style1">
              <div className="inner">
                <a href="#" className="image"><img src={circle} alt="" /></a>
                <div className="content">
                  <h2 className="major">About me</h2>
                  <p>I can work with Javascript, node.js, html, css, bootstrap, react and am always up for learning new skills and technologies.</p>
                  <a href="#" className="special">Learn more</a>
                </div>
              </div>
            </section>

            <section id="two" className="wrapper alt spotlight style2">
              <div className="inner">
                <a href="#" className="image"><img src={circle} alt="" /></a>
                <div className="content">
                  <p>I'll typically be building a new thing, learning a software/framework or staying up to date with the latest news and events via articles. 
                    Otherwise, I enjoy spending time with friends when I can.</p>
                  <a href="#" className="special">Learn more</a>
                </div>
              </div>
            </section>

            {/* Github Link */}
            <section id="three" className="wrapper spotlight style3">
              <div className="inner">
                <a href='https://github.com/Jay3162' className="image"><img src={github} alt="" /></a>
                <div className="content">
                  <h2 className="major">Github</h2>
                  <a href='https://github.com/Jay3162' className="special">Learn more</a>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section id="four" className="wrapper alt style1">
              <div className="inner">
                <h2 className="major">Projects</h2>
                <section className="features">
                  <article>
                    <a href="https://melodic-pegasus-7703e5.netlify.app/" className="image"><img src={store} alt="" /></a>
                    <h3 className="major">Instant (ecommerce-site)</h3>
                    <p>An ecommerce-site based off Amazon which lets users create an account, view products, add them to a basket and checkout.</p>
                    <a href='https://github.com/Jay3162/Instant' className="special">Code</a>
                  </article>
                  <article>
                    <a href="https://jocular-pothos-2817b5.netlify.app/" className="image"><img src={restaurant} alt="" /></a>
                    <h3 className="major">Restaurant Finder</h3>
                    <p>This restaurant finder takes in a type of food and a location and serves you plenty of dining options in that location.</p>
                    <a href='https://github.com/Jay3162/Restaurant-finder' className="special">Code</a>
                  </article>
                  <article>
                    <a href="https://unique-figolla-069883.netlify.app/" className="image"><img src={chat} alt="" /></a>
                    <h3 className="major">Chat App</h3>
                    <p>Chat app built with Socket.io and Node.js on the backend and React on the front end, firebase for user logins.</p>
                    <a href='https://github.com/Jay3162/chat-app' className="special">Code</a>
                    <a href='https://github.com/Jay3162/chat-app-server' className="special">Code</a>
                  </article>
                  <article>
                    <a href="https://airbnb-emulated.netlify.app/" className="image"><img src={airbnb} alt="" /></a>
                    <h3 className="major">Airbnb Clone</h3>
                    <p>A clone of Airbnb's home page matching the site's layout and design 1 for 1, made in react with css and hosted on Netlify.</p>
                    <a href='https://github.com/Jay3162/airbnb-clone' className="special">Code</a>
                  </article>
                </section>
              </div>
            </section>

        </section>

        {/* Footer and contact */}
        <section id="footer">
          <div className="inner">
            <h2 className="major">Get in touch</h2>
            <ul className="contact">
              <li className="icon solid fa-envelope"><a href="#">davisjamal647@gmail.com</a></li>
            </ul>
          </div>
        </section>

    </div>
  );
}

export default App;
