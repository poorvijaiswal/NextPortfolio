"use client"
import Image from "next/image";
import bg from '../../public/background/HomeBg.jpg'
import Navigation from '../app/portcomponents/Navigation/index'
import RenderModel from '../app/portcomponents/RenderModel'
import Model from '../app/portcomponents/portmodels/homemodel'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
import FireFliesBg from "./portcomponents/FireFliesBg";


export default function Home() {
  const [typeEffect] = useTypewriter({
    words: ['Web Developer', 'Web Designer', 'UI/UX Designer'],
    loop: true,
    typeSpeed: 90,
    deleteSpeed: 40,
    delaySpeed: 1500,
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="BackgroundImage" fill className="w-full h-screen object-cover object-center " />
      <FireFliesBg />
      <div className="w-full h-screen z-50 ">
        <Navigation />
        <RenderModel className={"w-full h-full"}>
          <Model />
        </RenderModel>
      </div>
      <div className="absolute top-1/3 z-50 min-w-80 left-[780px] -translate-y-1/2 bg-transparent p-4">
        <div className="py-6">
          <span className=" py-4 text-3xl tracking-wide">HELLO WORLD!!</span>
          <span className="blog-title-emoji text-3xl py-4">👋</span><br />
        </div>
        <div className='mt-4'>
          <span className="tracking-wide py-4 text-4xl">I'm </span>
          <span><Link href={'/about'} className="tracking-wide cursor-pointer py-4 text-4xl text-accent font-extrabold">Pawan Kumar Gupta</Link></span>
        </div>
        <div>
          <h1 className=" py-4 text-3xl text-accent h-2"><span className='text-3xl text-white'>I am a</span> {typeEffect}<Cursor cursorColor='text-accent' /></h1>
        </div>
      </div>
    </main>
  );
}