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
        <p>Full-Stack Developer // Proficient in Typescript, Javascript, HTML, CSS, and many more.</p>
        {/* <span style={{
          padding: "5px",
          fontWeight: "200"
        }}>Scroll for more.</span> */}
      </div>
    </>
  );
}

export default App;
