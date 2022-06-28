import logo from './logo.svg';
import './assets/css/main.css';

function App() {
  const github = new URL('./images/github-logo.png', import.meta.url)
  const circle = new URL('./images/pic01.jpg', import.meta.url)
  const store = new URL('./images/ecommerce-site-thumbnail.jpg', import.meta.url)
  const restaurant = new URL('./images/restaurant-finder-thumbnail.jpg', import.meta.url)
  const airbnb = new URL('./images/airbnb-thumbnail.jpg', import.meta.url)
  return (

    <div id="page-wrapper">

        <header id="header" class="alt">
          <h1><a href="index.html">Portfolio</a></h1>
        </header>


        <section id="banner">
          <div class="inner">
            <h2>Hello, I'm Jamal Davis!</h2>
            <p>A man with a passion for learning and problem solving.</p>
          </div>
        </section>


        <section id="wrapper">


            <section id="one" class="wrapper spotlight style1">
              <div class="inner">
                <a href="#" class="image"><img src={circle} alt="" /></a>
                <div class="content">
                  <h2 class="major">About me</h2>
                  <p>I can work with Javascript, node.js, html, css, bootstrap, react and am always up for learning new skills and technologies.</p>
                  <a href="#" class="special">Learn more</a>
                </div>
              </div>
            </section>

            <section id="two" class="wrapper alt spotlight style2">
              <div class="inner">
                <a href="#" class="image"><img src={circle} alt="" /></a>
                <div class="content">
                  <p>I'll typically be building a new thing, learning a software/framework or staying up to date with the latest news and events via articles. 
                    Otherwise, I enjoy spending time with friends when I can.</p>
                  <a href="#" class="special">Learn more</a>
                </div>
              </div>
            </section>


            <section id="three" class="wrapper spotlight style3">
              <div class="inner">
                <a href='https://github.com/Jay3162' class="image"><img src={github} alt="" /></a>
                <div class="content">
                  <h2 class="major">Github</h2>
                  <a href='https://github.com/Jay3162' class="special">Learn more</a>
                </div>
              </div>
            </section>


            <section id="four" class="wrapper alt style1">
              <div class="inner">
                <h2 class="major">Projects</h2>
                <section class="features">
                  <article>
                    <a href="#" class="image"><img src={store} alt="" /></a>
                    <h3 class="major">Instant (ecommerce-site)</h3>
                    <p>An ecommerce-site based off Amazon which lets users create an account, view products, add them to a basket and checkout.</p>
                    <a href='https://github.com/Jay3162/Instant' class="special">Code</a>
                  </article>
                  <article>
                    <a href="https://jocular-pothos-2817b5.netlify.app/" class="image"><img src={restaurant} alt="" /></a>
                    <h3 class="major">Restaurant Finder</h3>
                    <p>This restaurant finder takes in a type of food and a location and serves you plenty of dining options in that location.</p>
                    <a href='https://github.com/Jay3162/Restaurant-finder' class="special">Code</a>
                  </article>
                  <article>
                    <a href="https://airbnb-emulated.netlify.app/" class="image"><img src={airbnb} alt="" /></a>
                    <h3 class="major">Airbnb Clone</h3>
                    <p>A clone of Airbnb's home page matching the site's layout and design 1 for 1, made in react with css and hosted on Netlify.</p>
                    <a href='https://github.com/Jay3162/airbnb-clone' class="special">Code</a>
                  </article>
                </section>
              </div>
            </section>

        </section>

        <section id="footer">
          <div class="inner">
            <h2 class="major">Get in touch</h2>
            <ul class="contact">
              <li class="icon solid fa-envelope"><a href="#">davisjamal647@gmail.com</a></li>
            </ul>
          </div>
        </section>

    </div>
  );
}

export default App;
