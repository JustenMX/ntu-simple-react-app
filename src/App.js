import "./App.css";

import funnyProfile from "./assets/funnyProfile.jpg"; // image import with a variable assigned

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img className="Profile" src={funnyProfile} alt="Profile" />

        <h1>Hi! 👋 I'm Justen Manni</h1>
        <h2>Software Engineer</h2>
        <div className="Text-Border">
          <h3>About Me</h3>
          <hr />
          <p>
            Im from Singapore and I am passionate about software development. I
            am highly self-driven and motivated to continually update my skills
            in an ever-changing technological landscape. I believe that being a
            programmer goes beyond technical skills and requires a pragmatic
            approach to problem-solving and innovation.
          </p>
        </div>
        <div className="Text-Border">
          <h3>Contact Me</h3>
          <hr />
          <p>
            <a href="mailto:me@justenmanni.dev">Email</a> |{" "}
            <a href="https://www.linkedin.com/in/justenmanni">LinkedIn</a>
          </p>
        </div>
        <img
          className="Gif"
          src="https://media.giphy.com/media/pWO49XP9L7TxbgQVib/giphy.gif"
          alt="funnyGif"
        />
        <footer>
          © 2023 JustenMX - "Do whatever you want with this, just dont spam me
          LOL bye!"
        </footer>
      </div>
    </div>
  );
}

export default App;
