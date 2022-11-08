import Head from "./components/head";
import { useState, useEffect } from 'react';

function App() {
  const [dev,setDev] = useState();
  useEffect(() => {
    if (location.href.includes("dev")) {
      setDev(true);
    }
  }, []);
  return (
    <>
      <Head />
<div class="flex h-full w-full flex-col gap-5 bg-[#121212] p-5 md:p-14 lg:p-24 overflow-auto">
  <div class="flex h-auto w-full flex-col items-center text-center md:text-left md:flex-row md:items-center gap-10 rounded-xl border border-zinc-700 bg-[#242424] p-9 shadow-lg">
    <img src="https://bddy.lol/favicon.png" class="h-24 w-24 rounded-full" alt="" />
    <div class="flex h-full w-full flex-col gap-2">
      <span class="text-3xl font-semibold">bddy</span>
      <div class="flex w-full flex-wrap gap-1 justify-center md:justify-start">
        <div class="rounded-xl border border-zinc-700 bg-[#121212] px-5 py-2">Full-Stack</div>
        <div class="rounded-xl border border-zinc-700 bg-[#121212] px-5 py-2">VSCode</div>
        <div class="rounded-xl border border-zinc-700 bg-[#121212] px-5 py-2">Replit</div>
        <div class="rounded-xl border border-zinc-700 bg-[#121212] px-5 py-2">GitHub</div>
        <div class="rounded-xl border border-zinc-700 bg-[#121212] px-5 py-2">Discord</div>
        <div class="rounded-xl border border-zinc-700 bg-[#121212] px-5 py-2">Slack</div>
      </div>
    </div>
  </div>

  <div class="flex h-auto w-full flex-col gap-2 rounded-xl border border-zinc-700 bg-[#242424] p-9 shadow-lg">
    <div class="text-2xl font-semibold">About Me</div>
    <p>I'm bddy. I enjoy programming and playing video games. I'm a Full-Stack Developer & Proficient in Typescript, Javascript, HTML, CSS, and many more languages!</p>
  </div>

  <div class="flex h-auto w-full flex-col gap-3 rounded-xl border border-zinc-700 bg-[#242424] p-9 shadow-lg">
    <div class="text-2xl font-semibold">Projects</div>
    <div class="flex h-full w-full flex-col gap-2">
      <div class="flex w-full flex-wrap gap-1">
        <div class="rounded-xl border border-zinc-700 bg-[#121212] px-5 py-2">Replchat</div>
        <div class="rounded-xl border border-zinc-700 bg-[#121212] px-5 py-2">2chat</div>
        <div class="rounded-xl border border-zinc-700 bg-[#121212] px-5 py-2">bddy.lol</div>
      </div>
    </div>
  </div>
  <div class="w-full flex justify-end text-zinc-700">v3 {dev ? "(dev)" : "(main)"}</div>
</div>


    </>
  );
}

export default App;
