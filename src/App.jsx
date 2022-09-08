import Head from "./components/head";

function App() {
  return (
    <>
      <Head />
      <nav>
        <a href="#about">about</a>
				{/* <a href="#projects" style={{ textDecoration: "line-through" }}>projects</a> */}
      </nav>
      <div id="about" class="container">
        <h1>bddy</h1>
        <p>Full-Stack Developer // Proficient in Typescript, Javascript, HTML, CSS, and many more.</p>
        {/* <span style={{
          padding: "5px",
          fontWeight: "200"
        }}>Scroll for more.</span> */}
      </div>
			<div class="containerauto">
				<div class="project" id="replchat">
					<span>Replchat</span>
					<p>Replchat was a #1 trending replit chat application</p>
				</div>
				<div class="project" id="2chat" onclick="location.href = '#2chat'">
					<span>2chat / replrooms</span>
					<p>2chat, also known as replrooms was ALSO a #1 replit chat application, but with voice chat. Was basically replchat remastered.</p>
				</div>
				<div class="project" id="bddylol" onclick="location.href = '#bddylol'">
					<span>bddy.lol</span>
					<p>bascially this website</p>
				</div>
				<div class="project" id="frail" onclick="location.href = '#frail'">
					<span>Frail</span>
					<p>Up and coming discord bot that's in the works.</p>
				</div>
				<div class="project" id="socialtime" onclick="location.href = '#socialtime'">
					<span>SocialTime</span>
					<p>Coming Soon</p>
				</div>
				<div class="project" id="...">
					<span>And, many more to come!</span>
					<p>...</p>
				</div>
			</div>
    </>
  );
}

export default App;
