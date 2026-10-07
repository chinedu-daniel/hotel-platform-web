"use client";

import { useState } from "react";
import HotelCard from "@/components/HotelCard";

const hotels = [
  {
    id: 1,
    name: "Comfort Place",
    location: "Lagos, Nigeria",
    price: 85000,
    rating: 4.8,
    image: "/photos/hotel1.jpg"
  },
  {
    id: 2,
    name: "Ocean View Hotel",
    location: "Victoria Island, Lagos",
    price: 120000,
    rating: 4.6,
    image: "/photos/Hotel2.jpg"
  },
  {
    id: 3,
    name: "Royal Stay",
    location: "Ikeja, Lagos",
    price: 95000,
    rating: 4.7,
    image: "/photos/Hotel3.jpg"
  },
  { id: 4,
    name: "Comfort Place",
    location: "Lagos, Nigeria",
    price: 85000,
    rating: 4.8,
    image: "/photos/Hotel4.jpg"
  },
  {
    id: 5,
    name: "Ocean View Hotel",
    location: "Victoria Island, Lagos",
    price: 120000,
    rating: 4.6,
    image: "/photos/Hotel5.jpg"
  },
  {
    id: 6,
    name: "Royal Stay",
    location: "Ikeja, Lagos",
    price: 95000,
    rating: 4.7,
    image: "/photos/Hotel6.jpg"
  },
  {
    id: 7,
    name: "Comfort Place",
    location: "Lagos, Nigeria",
    price: 85000,
    rating: 4.8,
    image: "/photos/Hotel2.jpg"
  },
  {
    id: 8,
    name: "Ocean View Hotel",
    location: "Victoria Island, Lagos",
    price: 120000,
    rating: 4.6,
    image: "/photos/Hotel5.jpg"
  },
  {
    id: 9,
    name: "Royal Stay",
    location: "Ikeja, Lagos",
    price: 95000,
    rating: 4.7,
    image: "/photos/hotel1.jpg"
  },
];

export default function Hotels() {
  const [search, setSearch] = useState("");

  const filteredHotels = hotels.filter((hotel) => {
    const searchTerm = search.toLowerCase();

    return(
      hotel.name.toLowerCase().includes(searchTerm) ||
      hotel.location.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <main className="mx-auto w-full px-8 py-16">
      <section className="mb-12 mx-auto w-full">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Discover your way
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-[var(--primary)]">
          Find a hotel you'll love
        </h1>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
          Explore comfortable stays in great locations and 
          find the rightplace for your next trip
        </p>

        <div className="mt-8 max-w-2xl">
          <input 
          type="text"
          placeholder="Search by hotel name or location..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-[var(--accent)]"
          />
        </div>

        <p>Searching for: {search} | Results: {filteredHotels.length}</p>

        {/* <p className="mt-3 text-sm text-gray-500">
          Searching for: {search}
        </p> */}
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold text-[var(--primary)]">
          Popular Hotels
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredHotels.length > 0 ? (
            filteredHotels.map((hotel) => (
              <HotelCard
                key={hotel.id}
                name={hotel.name}
                location={hotel.location}
                price={hotel.price}
                rating={hotel.rating}
                image={hotel.image}
                />
              ))
            ) : (
            <p className="col-span-full py-12 text-center text-[var(--text-muted)]">
              No hotels found. Try a different search
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
