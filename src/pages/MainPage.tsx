import React from "react";
import { AirportCard } from "../components/AirportCard";
import { AirportFilter } from "../components/AirportFilter";
import { AirportSearch } from "../components/AirportSearch";

export function MainPage() {
  return (
    <div className="container mx-auto  max-w-[750px] pt-5">
      <AirportSearch />
      <AirportFilter />
      <AirportCard />
    </div>
  );
}
