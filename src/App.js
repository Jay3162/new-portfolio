import logo from './logo.svg';
import './assets/css/main.css';
import react, {useState} from 'react';

function App() {
  const github = new URL('./images/github-logo.png', import.meta.url);
  const circle = new URL('./images/pic01.jpg', import.meta.url);
  const store = new URL('./images/ecommerce-site-thumbnail.jpg', import.meta.url);
  const restaurant = new URL('./images/restaurant-finder-thumbnail.jpg', import.meta.url);
  const airbnb = new URL('./images/airbnb-thumbnail.jpg', import.meta.url);
  const chat = new URL('./images/chat-app-thumbnail.png', import.meta.url);
  const solblue = new URL('./images/solblue thumbnail.png', import.meta.url);
  const proof = new URL('./images/proof-thumbnail.jpg', import.meta.url);
  const article = new URL('./images/article-finder-thumbnail.jpg', import.meta.url);
  const jsLogo = new URL('./images/javascript-736400.png', import.meta.url);
  const codeLogo = new URL('./images/coding-7224945.png', import.meta.url);
  const profile = new URL('./images/IMG_20230213_093808 (1).jpg', import.meta.url);

  const [eye, setEye] = useState({ left: 0, top: 0 });

  const MoveEye = (e) => {
    const { clientX, clientY } = e;
    setEye({ left: clientX, top: clientY });
  }
  return (

    <div id="page-wrapper">

        <header id="header" className="alt">
          <h1><a href="index.html">Portfolio</a></h1>
          
        </header>

        {/* Intro */}
        <section id="banner">
          <div id="eye" style={{left: eye.left, top: eye.top}}></div>
          <div className="inner" onMouseMove={MoveEye}>
            <h2>Hello, I'm Jamal Davis!</h2>
            <p>A man with a passion for learning and problem solving.</p>
            
          </div>
        </section>


        <section id="wrapper">

            {/* About me */}
            <section id="one" className="wrapper spotlight style1">
              <div className="inner">
                <a href="#" className="image"><img src={profile} alt="" /></a>
                <div className="content">
                  <h2 className="major">About me</h2>
                  <p>I can work with Javascript, html, css, bootstrap, react, WordPress and am always up for learning new skills and technologies.</p>
                  <a href="#" className="special">Learn more</a>
                </div>
              </div>
            </section>

            <section id="two" className="wrapper alt spotlight style2">
              <div className="inner">
                <a href="#" className="image"><img src={codeLogo} alt="" /></a>
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
              <div className="inner" >
                <div id="eye" style={{left: eye.left, top: eye.top}}></div>
                <h2 className="major">Projects</h2>
                <section className="features" onMouseMove={MoveEye}>
                  <article>
                    <a href="https://reports.proofinsight.com/" className="image"><img src={proof} alt="Solblue's portfolio" /></a>
                    <h3 className="major">Proof Insight Reports Revamp</h3>
                    <p>A redesign of the reports page in WordPress and PHP, that's completely responsive and adds new features such as a trends section and carousel.</p>
                  </article>
                  <article>
                    <a href="https://solblue.netlify.app/" className="image"><img src={solblue} alt="Solblue's portfolio" /></a>
                    <h3 className="major">Client's Portfolio</h3>
                    <p>A beautiful portfolio website built with React and hosted on Netlify according to my client's specifications.</p>
                    <a href='https://github.com/Jay3162/BenPortfolio' className="special">Code</a>
                  </article>
                  <article>
                    <a href="https://airbnb-emulated.netlify.app/" className="image"><img src={airbnb} alt="Airbnb's landing page from 2021" /></a>
                    <h3 className="major">Airbnb Clone</h3>
                    <p>A clone of Airbnb's home page matching the site's layout and design 1 for 1, made in react with css and hosted on Netlify.</p>
                    <a href='https://github.com/Jay3162/airbnb-clone' className="special">Code</a>
                  </article>
                  <article>
                    <a href="https://synthetix-article-finder.netlify.app/" className="image"><img src={article} alt="Solblue's portfolio" /></a>
                    <h3 className="major">Synthetix Article Finder</h3>
                    <p>A simple Article finding tool, enter a term into the search bar and have related results generated on screen.</p>
                    <a href='https://github.com/Jay3162/Article-Finder' className="special">Code</a>
                  </article> 
                  <article>
                    <a href="https://melodic-pegasus-7703e5.netlify.app/" className="image"><img src={store} alt="E-commerce site" /></a>
                    <h3 className="major">Instant (ecommerce-site)</h3>
                    <p>An ecommerce-site based off Amazon which lets users create an account, view products, add them to a basket and checkout.</p>
                    <a href='https://github.com/Jay3162/Instant' className="special">Code</a>
                  </article>
                  <article>
                    <a href="https://jocular-pothos-2817b5.netlify.app/" className="image"><img src={restaurant} alt="A restaurant finder" /></a>
                    <h3 className="major">Restaurant Finder</h3>
                    <p>This restaurant finder takes in a type of food and a location and serves you plenty of dining options in that location.</p>
                    <a href='https://github.com/Jay3162/Restaurant-finder' className="special">Code</a>
                  </article>
                  {/* <article>
                    <a href="https://unique-figolla-069883.netlify.app/" className="image"><img src={chat} alt="A pleasant chat app" /></a>
                    <h3 className="major">Chat App</h3>
                    <p>Chat app built with Socket.io and Node.js on the backend and React on the front end, firebase for user logins.</p>
                    <a href='https://github.com/Jay3162/chat-app' className="special">Code</a>
                    <a href='https://github.com/Jay3162/chat-app-server' className="special">Code</a>
                  </article> */}              
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
