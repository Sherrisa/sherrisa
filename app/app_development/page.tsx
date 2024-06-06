import { oswald } from "../fonts";
import Image from "next/image";
import musicquiz from "../../public/images/mockupMusicQuiz.png";
import chordspeller from "../../public/images/mockupChordSpeller.png";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AppDevelopment(): JSX.Element {
  return (
    <div className="max-w-6xl mx-auto">
      <header>
        <h1
          className={`text-6xl sm:text-9xl ${oswald.className} text-wildflowergreen text-bold pt-10 px-6`}
        >
          <span id="app">App</span> <br />
          Development
        </h1>
      </header>
      <main>
        <section className="grid xl:grid-cols-3 pt-40">
          <div className="xl:col-span-2 items-center justify-center px-6">
            <Link href="https://music-quiz-liart.vercel.app/" target="_blank">
              <Image
                src={musicquiz}
                alt="Music Quiz App screen"
                className="w-3/4 sm:w-full mx-auto"
              />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center px-8">
            <h2 className="flex items-center justify-center text-2xl font-bold py-4">
              Music Quiz App
            </h2>
            <p className="max-w-3xl mx-auto text-xl">
              Interactive music quiz built in Next.js.
            </p>
            <div className="flex items-center justify-center">
              <Button asChild className="my-4 bg-black text-white text-lg mt-8">
                <Link
                  href="https://music-quiz-liart.vercel.app/"
                  target="_blank"
                >
                  View Project
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="grid xl:grid-cols-3 py-40">
          <div className="xl:col-span-2 items-center justify-center px-6">
            <Link
              href="https://sherrisa.github.io/chord-speller/"
              target="_blank"
            >
              <Image
                src={chordspeller}
                alt="Chord Speller App screen"
                className="w-3/4 sm:w-full mx-auto"
              />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center px-8">
            <h2 className="flex items-center justify-center text-2xl font-bold py-4">
              Chord Speller App
            </h2>
            <p className="max-w-3xl mx-auto text-xl">
              Enter a chord root and quality and receive the notes of the chord
              from the Piano Chords API from rapidapi.com.
            </p>
            <div className="flex items-center justify-center">
              <Button asChild className="my-4 bg-black text-white text-lg mt-8">
                <Link
                  href="https://sherrisa.github.io/chord-speller/"
                  target="_blank"
                >
                  View Project
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
