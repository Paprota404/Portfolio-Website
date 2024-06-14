import "./App.css";
import { motion } from "framer-motion";
import { Skills } from "./Skills.jsx";
import { useState } from "react";

function App() {
  const [imageLoaded, setImageLoaded] = useState(false);
  // why i dont get github streak on side branch
  return (
    <>
      <div className="intro">
        <img
          className="paprota"
          src="/paprota-img.jpg"
          alt="Paprota"
          onLoad={() => setImageLoaded(true)}
        ></img>

        {imageLoaded ? (
          <>
            <motion.div
              className="left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <h1>Hi, I&apos;m Paprota🌿</h1>
              <p>
                My name is Paweł and I’m Full-Stack Developer with .NET and
                React.
              </p>
              <div className="links">
                <a target="blank" href="https://github.com/Paprota404">
                  <img className="icon" src="github-mark-white.png"></img>
                </a>
                <a href="mailto:paprota404@gmail.com">
                  <img className="icon" src="gmail (1).png"></img>
                </a>
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/pawe%C5%82-pro%C4%87-1704702bb/"
                >
                  <img className="icon" src="LinkedIn.svg"></img>
                </a>
              </div>
            </motion.div>
          </>
        ) : (
          <div className="loading-screen">
            <p>Loading...</p>
          </div>
        )}
      </div>

      {imageLoaded ? (
        <>
          <Skills />

          <div className="projects">
            <h1>Projects</h1>

            <div className="directme">
              <h2>DirectMe - Real-time communicator in Cloud</h2>
              <h3>STACK: .NET, SignalR, Azure SQL, React, Next.Js, Tailwind</h3>
              <h3>
                {/* I don't know if i will get commits from side branch */}
                {/* I don't know if i will get commits from side branch */}
                {/* I'm working on DirectMe */}
                {/* I'm working on DirectMe */}
                {/* I'm working on DirectMe */}
                {/* I'm working on DirectMe */}
                {/* I'm working on DirectMe */}
                {/* I'm working on DirectMe */}
                {/* I'm working on DirectMe */}
                {/* I'm working on DirectMe */}
                {/* I'm working on DirectMe */}
                {/* I'm working on DirectMe */}
                {/* I'm working on DirectMe */}
                {/* I'm working on DirectMe */} 
                {/* I'm working on DirectMe */}
                {/* I'm working on DirectMe */}
                {/* I'm working on DirectMe */}
                {/* I'm working on DirectMe */}
                {/* I'm working on DirectMe */}
                {/* Leetcode */}
                {/* Leetcode */}
                {/* Leetcode */}
                {/* Hard days */}
                {/* Audio UI */}
                {/* Leetcode */}
                {/* Leetcode */}
                {/* Leetcode */} 
                {/* Leetcode */}
                {/* I'm working on DirectMe */}
                {/* Leetcode */}
                {/* Leetcode */}
                {/* I'm working on DirectMe */}
                {/* Leetcode */}
                SITE:{" "}
                <a href="https://directme-eta.vercel.app/" target="blank">
                  https://directme-eta.vercel.app/
                </a>
              </h3>
              <img className="audiophile" src="/direct.png"></img>
            </div>

            <div className="audiophile">
              <h2>AUDIOPHILE E-Commerce Site</h2>
              <h3>STACK: NEXT.js, React, Tailwind</h3>
              <h3>
                SITE:{" "}
                <a
                  href="https://audiophile-e-commerce-site.vercel.app/"
                  target="blank"
                >
                  https://audiophile-e-commerce-site.vercel.app/
                </a>
              </h3>
              <img className="audiophile" src="/audioph.png"></img>
            </div>

            <div className="space">
              <h2>SPACE TOURISM WEBSITE</h2>
              <h3>STACK: React</h3>
              <h3>
                SITE:{" "}
                <a
                  href="https://sage-mooncake-7f60eb.netlify.app/"
                  target="blank"
                >
                  https://sage-mooncake-7f60eb.netlify.app/
                </a>
              </h3>
              <img className="audiophile" src="/space.png"></img>
            </div>
          </div>

          <div className="design">Designed by Me :)</div>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default App;
