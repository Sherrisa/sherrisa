import { oswald } from "../fonts";
import Image from "next/image";
import coddiwomple from "../../public/images/portfolioCoddiwomple.png";
import jstutorial from "../../public/images/jstutorial.png";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InstructionalDesign(): JSX.Element {
  return (
    <div className="max-w-6xl mx-auto">
      <header>
        <h1
          className={`text-6xl sm:text-9xl ${oswald.className} text-wildflowergreen text-bold pt-10 px-6`}
        >
          Instructional <br />
          <span id="design">Design</span>
        </h1>
      </header>
      <main>
        <section className="grid xl:grid-cols-3 pt-40">
          <div className="xl:col-span-2 items-center justify-center px-6">
            <Link href="https://coddiwomple.art/" target="_blank">
              <Image
                src={coddiwomple}
                alt="Coddiwomple website displayed on a mac desktop computer"
                className="w-full mx-auto"
              />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center px-8">
            <h2 className="flex items-center justify-center text-2xl font-bold py-4">
              Coddiwomple Art
            </h2>
            <p className="max-w-3xl mx-auto text-xl">
              Engage emergent readers through drawing, painting, and creative
              writing.
            </p>
            <div className="flex items-center justify-center">
              <Button asChild className="my-4 bg-black text-white text-lg mt-8">
                <Link href="https://coddiwomple.art/" target="_blank">
                  View Project
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="grid xl:grid-cols-3 py-40">
          <div className="xl:col-span-2 items-center justify-center px-6">
            <Link
              href="https://sherrisa.github.io/js-tutorial/"
              target="_blank"
            >
              <Image
                src={jstutorial}
                alt="Screen shot of the functions page of the JS Tutorial site"
                className="w-3/4 sm:w-full mx-auto"
              />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center px-8">
            <h2 className="flex items-center justify-center text-2xl font-bold py-4">
              JavaScript Tutorial
            </h2>
            <p className="max-w-3xl mx-auto text-xl">
              Learn JavaScript switch statements as you make a simple chord
              calculator.
            </p>
            <div className="flex items-center justify-center">
              <Button asChild className="my-4 bg-black text-white text-lg mt-8">
                <Link
                  href="https://sherrisa.github.io/js-tutorial/"
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
