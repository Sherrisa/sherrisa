import Image from "next/image";
import wildflowers from "../public/images/wildflowers.jpeg";

import { oswald } from "./fonts";
import { CardTitle, CardDescription, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center px-6">
      <header className="max-w-6xl h-full">
        <h1
          className={`text-6xl sm:text-9xl ${oswald.className} text-wildflowergreen text-bold pt-10`}
        >
          eLearning <br />
          <span id="developer">Developer</span>
        </h1>

        <div className="bg-white">
          <Image
            priority={true}
            src={wildflowers}
            alt="orange watercolor wildflowers"
            className="pt-60
           sm:pt-10"
          />
        </div>
        <div className="bg-wildflowergreen text-md sm:text-xl text-white h-16 flex items-center justify-center">
          Relevant content. Engaging design.
        </div>
      </header>
      <main className="flex-grow w-full max-w-6xl py-20 sm:py-60">
        <section id="services">
          <h2 className={`text-black text-4xl text-center font-bold pb-8 px-2`}>
            Crafting Digital Learning Experiences
          </h2>
          <div className="grid grid-cols-1 gap-8 my-8 md:grid-cols-2 px-4">
            <Card className="flex flex-col items-center p-6 bg-black text-center">
              <CardTitle className="text-white text-xl">
                Instructional Design
              </CardTitle>
              <CardDescription className="my-2 text-white text-lg">
                Engaging and interactive online courses.
              </CardDescription>
              <Button
                asChild
                className="my-4 bg-wildflowergreen text-white text-lg"
              >
                <Link href="/instructional_design">Courses</Link>
              </Button>
            </Card>
            <Card className="flex flex-col items-center p-6 bg-black text-center">
              <CardTitle className="text-white text-xl">
                App Development
              </CardTitle>
              <CardDescription className="my-2 text-white text-lg">
                Custom app solutions for eLearning platforms.
              </CardDescription>
              <Button
                asChild
                className="my-4 bg-wildflowergreen text-white text-lg"
              >
                <Link href="/app_development">Apps</Link>
              </Button>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
