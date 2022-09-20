import Head from "./components/head";
import Project from "./components/project";

const projects = [
	{
		"id": "replchat",
		"name": "Replchat",
		"description": "A chat hosted on replit.com. Replchat was a trending chat."
	},
	{
		"id": "2chat",
		"name": "2chat",
		"description": "2chat was also a chat hosted on replit.com and was also trending! 2chat had the ability to voice chat with others."
	},
	{
		"id": "bddylol",
		"name": "bddy.lol",
		"description": "what do you think it is lmao"
	}
]

function App() {
  return (
    <>
      <Head />
<main class="flex h-full w-full flex-col gap-2 overflow-auto bg-gray-900 p-5 text-white transition-all md:p-10 lg:p-14">
  <span class="text-3xl font-semibold"> bddy </span>
  <div class="flex h-full w-full flex-col md:flex-row gap-3 md:gap-2">
    <div class="flex h-full md:w-1/2 w-full flex-col">
      <div class="flex flex-col gap-2">
			<span class="text-xl font-semibold">Hello, World!</span>
      <p>I'm bddy. I enjoy programming and playing video games. I'm a Full-Stack Developer & Proficient in Typescript, Javascript, HTML, CSS, and many more languages!</p>
			</div>
      <div class="mt-2 flex flex-col gap-2">
        <span class="text-xl font-semibold">Projects</span>
				{projects.map(project => {
					return <Project id={project.id} name={project.name} description={project.description} />
				})}
      </div>
    </div>
    <div class="flex h-full md:w-1/2 w-full flex-col">
      <span class="text-xl font-semibold">Q&A (Not Done)</span>
			{/*
	 			<div class="flex-col mt-2">
        <span class="text-lg">Question</span>
        <p>Answer</p>
      </div>
			*/}
		</div>
  </div>
</main>

    </>
  );
}

export default App;
