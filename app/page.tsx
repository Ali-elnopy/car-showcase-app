import { CustomFilter, Hero, SearchBar } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h2 className="text-4xl font-extrabold">Car Catalogue</h2>
          <p>Explore the cars you might like our wide range of premium vehicles</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filters-container">
            <CustomFilter title="fuel" options={[]} />
            <CustomFilter title="year" options={[]} />
          </div>
        </div>
      </div>
    </main>
  );
}
