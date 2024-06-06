import { oswald } from "../fonts";

export default function Videography(): JSX.Element {
  return (
    <>
      <header className="max-w-6xl mx-auto px-6 h-full">
        <h1
          className={`text-6xl sm:text-9xl ${oswald.className} text-wildflowergreen text-bold pt-10 px-6`}
        >
          Videography
        </h1>
      </header>
      <main className="h-screen"></main>
    </>
  );
}
