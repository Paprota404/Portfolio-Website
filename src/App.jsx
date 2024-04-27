import './App.css'

function App() {


  return (
    <div>
      <div className="intro">
        <div className="left">
          <h1>Hi, I&apos;m Paprota🌿</h1>
          <p>My name is Paweł and I’m Full-Stack Developer with .NET and React.</p>
          <div className="links">
            <a target="blank" href="https://github.com/Paprota404"><img className="icon" src="github-mark-white.png"></img></a>
            <a href="mailto:paprota404@gmail.com"><img className="icon" src="gmail (1).png"></img></a>
            <a target="blank" href="https://www.linkedin.com/in/pawe%C5%82-pro%C4%87-1704702bb/"><img className="icon" src="LinkedIn.svg"></img></a>
          </div>
        </div>
        <img className="paprota" src="/paprota-img.jpg" alt="Paprota"></img>
      </div>

      <div className="skills">
        <h1>My Skills</h1>
        <div className="skill-grid">
          <div className="skill">
            <div className="skill-desc">
              <img className="skill-icon" src="NET core.svg"></img>
              <h3 className="skill-name">.NET</h3>
            </div>
          </div>

          <div className="skill">
            <div className="skill-desc">
              <img className="skill-icon" src="PostgresSQL.svg"></img>
              <h3 className="skill-name">PostgreSQL</h3>
            </div>
          </div>

          <div className="skill">
            <div className="skill-desc">
              <img className="skill-icon" src="React.svg"></img>
              <h3 className="skill-name">React</h3>
            </div>
          </div>

          <div className="skill">
            <div className="skill-desc">
              <img className="skill-icon" src="Next.js.svg"></img>
              <h3 className="skill-name">Next.Js</h3>
            </div>
          </div>

          <div className="skill">
            <div className="skill-desc">
              <img className="skill-icon" src="Tailwind CSS.svg"></img>
              <h3 className="skill-name">Tailwind CSS</h3>
            </div>
          </div>

          <div className="skill">
            <div className="skill-desc">
              <img className="skill-icon" src="Git.svg"></img>
              <h3 className="skill-name">Git</h3>
            </div>
          </div>

          <div className="skill">
            <div className="skill-desc">
              <img className="skill-icon" src="Azure.svg"></img>
              <h3 className="skill-name">Azure</h3>
            </div>
          </div>

          <div className="skill">
            <div className="skill-desc">
              <img className="skill-icon" src="CSharp.svg"></img>
              <h3 className="skill-name">C#</h3>
            </div>
          </div>

         

        </div>
      </div>

      <div className="projects">
        <h1>Projects</h1>

        <div className="directme">
          
          <h2>DirectMe - Real-time communicator in Cloud</h2>
          <h3>STACK: .NET, SignalR, Azure SQL, React, Next.Js, Tailwind</h3>
          <h3>SITE: <a href="https://directme-eta.vercel.app/" target="blank">https://directme-eta.vercel.app/</a></h3>
          <img className="audiophile" src="/direct.png"></img>
        </div>

        <div className="audiophile">
          
          <h2>AUDIOPHILE E-Commerce Site</h2>
          <h3>STACK: NEXT.js, React, Tailwind</h3>
          <h3>SITE: <a href="https://audiophile-e-commerce-site.vercel.app/" target="blank">https://audiophile-e-commerce-site.vercel.app/</a></h3>
          <img className="audiophile" src="/audioph.png"></img>
        </div>

        <div className="space">
          <h2>SPACE TOURISM WEBSITE</h2>
          <h3>STACK: React</h3>
          <h3>SITE: <a href="https://sage-mooncake-7f60eb.netlify.app/" target="blank">https://sage-mooncake-7f60eb.netlify.app/</a></h3>
          <img className="audiophile" src="/space.png"></img>
        </div>

        

        

       


      </div>

      <div className="design">
          Designed by Me :)
        </div>
      
    </div>
  )
}

export default App
