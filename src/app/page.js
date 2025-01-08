"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [cities, setCities] = useState([]);
  const [searched, setSearched] = useState([]);

  async function getData() {
    const result = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await result.json();
    let incomeCities = data.data.map((country) => {
      return country.cities;
    });
    incomeCities = incomeCities.flat();
    setCities(incomeCities);
  }

  useEffect(() => {
    getData();
  }, []);

  const searchHandler = (e) => {
    const search = e.target.value;
    const filtered = cities.filter((city) => {
      return city.includes(search);
    });
    setSearched(filtered);
  };
  return (
    <div className="flex gap-10 relative h-[100vh] w-[100vw]">
      <div className="absolute p-10">
        <input
          type="text"
          className="border-2 border-black"
          onChange={searchHandler}
        />
        {searched.length > 0 &&
          searched.slice(0, 10).map((city) => <p>{city}</p>)}
      </div>
      {/* <LeftSide />
      <RightSide /> */}
      <div className="absolute border-2 border-muted-foreground/20 rounded-full h-[100px] w-[100px]">
        middle circle
      </div>
    </div>
  );
}
