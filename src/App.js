import Head from "./components/head";

function App() {
  return (
    <>
      <Head />
      <nav>
        <a href="#about">about</a>
        <a href="#projects" style={{ textDecoration: "line-through" }}>projects</a>
      </nav>
      <div id="about" class="container">
        <h1>bddy</h1>
        <p>Full-Stack Developer // Efficient in Typescript, Javascript, HTML, CSS, and many more.</p>
        {/* <span style={{
          padding: "5px",
          fontWeight: "200"
        }}>Scroll for more.</span> */}
      </div>
      {/* <div id="projects" class="containerauto">
        <h1>Projects</h1>
        <div id="wrapper">
          <div id="project">
            <h3>Replchat</h3>
            <p>Another replit chat app that reached the peak of trending in April.</p>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
