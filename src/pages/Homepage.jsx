import { MainDiv } from '../elements/mainDiv';
import { Header } from '../elements/header';
function Homepage() {
    return (
        <main className="grid grid-cols-8 gap-4">
          <MainDiv>
            <Header>
              About this site
            </Header>
            <p>
              Created with <a href="https://nodejs.org/en">nodejs</a>, <a href="https://react.dev/">react</a>, the <a href="https://pnpm.io/">pnpm</a> package manager, and <a href="https://vite.dev/">vite</a>. Uses  <a href="https://tailwindcss.com/">tailwindcss</a> for element styling and <a href="https://react-twc.vercel.app/">TWC</a> for tailwind organization, with standard ssr for loading content.
            </p>
            <p>
              "SPW" logo created with SVG editing in <a href="https://krita.org/en/">krita</a>. Hex values for logo from the <a href="https://matplotlib.org/">matplotlib</a> inferno colormap and <a href="https://martin-ueding.de/posts/matplotlib-colors-scales-as-hex-codes/">Martin Euding</a>. 
            </p>     
          </MainDiv>
          <MainDiv>
            <p className="text-2xl">
              Some of my many and profound accomplishments include
            </p>
            <ul>
              <li>Listening to "New Tank" by Playboi Carti at least 40 times consecutively</li>
              <li>High school senior superlative of "best memer"</li>
              <li>Getting over my childhood fear of Diesel 10 from "Thomas the Tank Engine"</li>
              <li>Five-minute mile &#40;on a bike&#41;</li>
              <li>Continuous Duolingo 普通话 streak since 4/26/25</li>
            </ul>
          </MainDiv>
          <MainDiv>
            <p className="text-2xl">
              Hello!
            </p>
            <p>
              I'm Stephen Walsh a civil engineering student at NU McCormick class of 2028. I created this site to store some of my projects, which I may one day get around to finishing.
            </p>
            <p>
              Transportation networks and analysis, rail transportation in general, and rail-related public policy and projects are my main interests. Besides that, other interests include econ, pure and applied math, and computer science.
            </p>
            <p>
              I'll admit I'm not all that good at any of the aforementioned interests, though I suppose practice makes perfect. I also play and practice quizbowl in my free time. &#40;For those interested, my best tossup ever is a "Marge Simpson" firstline.&#41;
            </p>
          </MainDiv>
        </main>
    );
}

export default Homepage
