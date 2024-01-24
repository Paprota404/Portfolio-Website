import './App.css'

function App() {


  return (
    <>
      <div className="intro">
        <div className="left">
          <h1>Hi, I&apos;m Paprota🌿</h1>
          <p>My name is Paweł and I’m specializing in Frontend Development but I am currently expanding my skills to become a Fullstack developer.</p>
          <div className="links">
            <a target="blank" href="https://github.com/Paprota404"><img className="icon" src="github-mark-white.png"></img></a>
            <a href="mailto:paprota404@gmail.com"><img className="icon" src="gmail (1).png"></img></a>
          </div>
        </div>
        <img className="paprota" src="/paprota-img.jpg" alt="Paprota"></img>
      </div>

      <div className="projects">

        <div className="audiophile">
          <h1>Projects</h1>
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

        <div className="spotify">
          <h2>SPOTIFY RANDOM PLAYLISTS</h2>
          <h3>STACK: NEXT.js, Spotify API, React</h3>
          <h3>SITE: <a href="https://random-spotify-playlist-from-words.vercel.app/" target="blank">https://random-spotify-playlist-from-words.vercel.app/</a></h3>
          <img className="audiophile" src="/Screenshot_5.png"></img>
        </div>

        

       


      </div>

      <div className="design">
          Designed by Me :)
        </div>
      
    </>
  )
}

export default App
