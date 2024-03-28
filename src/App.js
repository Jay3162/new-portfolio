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
  const profile = new URL('./images/pro_pic.jpg', import.meta.url);
  const gbnews = new URL('./images/gbn_image_2.png', import.meta.url);

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
          <div className="inner" onMouseMove={MoveEye} id="intro-header">
            <h2>Hello, I'm Jamal Davis!</h2>
            <p>Passionate Front End Web Developer specialising in high-quality websites and web apps.</p>
            
          </div>
        </section>


        <section id="wrapper">

            {/* About me */}
            <section id="one" className="wrapper spotlight style1">
              <div className="inner">
                <a href="#" className="image"><img src={profile} alt="" /></a>
                <div className="content">
                  <h2 className="major">About me</h2>
                  <p>
In terms of my skillset, I possess expertise in a wide range of technologies, including but not limited to Javascript, HTML, CSS, Bootstrap, React, and WordPress. Furthermore, I am always keen on expanding my knowledge and mastering new skills and technologies.</p>
                </div>
              </div>
            </section>

            <section id="two" className="wrapper alt spotlight style2">
              <div className="inner">
                <a href="#" className="image"><img src={codeLogo} alt="" /></a>
                <div className="content">
                  <p>Typically, I am engrossed in either developing a new project, exploring and mastering a new software or framework, or staying abreast of the latest industry news and events by reading articles. When I'm not doing any of these, I relish spending quality time with my friends whenever possible.</p>
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
                  {/* <article>
                    <a href="https://reports.proofinsight.com/" className="image"><img src={proof} alt="Solblue's portfolio" /></a>
                    <h3 className="major">Proof Insight Reports Revamp</h3>
                    <p>During my tenure at Proof Insight, I spearheaded the revamp of the reports page on WordPress and PHP. This redesign entailed creating a fully responsive page that incorporated various new features, such as an informative trends section, intuitive pop-ups, and a dynamic carousel.</p>
                  </article> */}
                  <article>
                    <a href="https://www.gbnews.com/" className="image"><img src={gbnews} alt="gbnews" /></a>
                    <h3 className="major">GB News</h3>
                    <p>I'm currently part of the GB News development team, maintaining and updating the website with new features, functionality and improvements.</p>
                    {/* <a href='https://github.com/Jay3162/BenPortfolio' className="special">Code</a> */}
                  </article>
                  <article>
                    <a href="https://solblue.netlify.app/" className="image"><img src={solblue} alt="Solblue's portfolio" /></a>
                    <h3 className="major">Client's Portfolio</h3>
                    <p>I developed a visually appealing portfolio website for my client using React and hosted it on Netlify. The website was designed to meet my client's specific requirements and included an intuitive light theme toggle. Additionally, the website provided visitors with the opportunity to play my client's videos and songs.</p>
                    <a href='https://github.com/Jay3162/BenPortfolio' className="special">Code</a>
                  </article>
                  <article>
                    <a href="https://airbnb-emulated.netlify.app/" className="image"><img src={airbnb} alt="Airbnb's landing page from 2021" /></a>
                    <h3 className="major">Airbnb Clone</h3>
                    <p>Using React and CSS, I created a faithful 1-for-1 replica of Airbnb's home page, complete with matching layout and design. This demo was hosted on Netlify and served as a showcase of my ability to replicate the design of existing websites. While it lacked any advanced features or functionality, it provided a glimpse into my proficiency with React and CSS.</p>
                    <a href='https://github.com/Jay3162/airbnb-clone' className="special">Code</a>
                  </article>
                  {/* <article>
                    <a href="https://synthetix-article-finder.netlify.app/" className="image"><img src={article} alt="Solblue's portfolio" /></a>
                    <h3 className="major">Synthetix Article Finder</h3>
                    <p>A simple Article finding tool, enter a term into the search bar and have related results generated on screen.</p>
                    <a href='https://github.com/Jay3162/Article-Finder' className="special">Code</a>
                  </article>  */}
                  <article>
                    <a href="https://melodic-pegasus-7703e5.netlify.app/" className="image"><img src={store} alt="E-commerce site" /></a>
                    <h3 className="major">Instant (ecommerce-site)</h3>
                    <p>I built an e-commerce website that enables users to create an account, view products, add them to a basket, and complete the checkout process. The website utilized an API to generate products dynamically, and it also incorporated robust sign-up and login functionality for users. The website was designed to provide a seamless shopping experience.</p>
                    <a href='https://github.com/Jay3162/Instant' className="special">Code</a>
                  </article>
                  <article>
                    <a href="https://jocular-pothos-2817b5.netlify.app/" className="image"><img src={restaurant} alt="A restaurant finder" /></a>
                    <h3 className="major">Restaurant Finder</h3>
                    <p>I developed a restaurant finder that leverages Yelp's API to enable users to search for dining options based on their preferred type of cuisine and location. The website delivers a plethora of dining options in the specified area, making it an ideal tool for those seeking to explore new culinary experiences.</p>
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
