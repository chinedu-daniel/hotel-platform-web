import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="mx-auto flex w-full flex-col items-center gap-12 px-8 py-24 md:flex-row">
        <div className="flex-1">
          <p className="mb-4 text-2xl font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Welcome to Comfort Place
          </p>
          
          <h1 className="text-7xl font-bold leading-tight tracking-tight text-[var(--primary)]">
            Find your perfect stay
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--text-muted)]">
            Discover comfortable hotels, explore great destinations
            and book your next stay with ease.
          </p>

          <div className="mt-8 flex gap-4">
            <Link href="/hotels" className="rounded-md bg-[var(--primary)] px-6 py-3 font-medium text-white transition hover:opacity-90">
              Explore Hotels
            </Link>

            <button className="rounded-md border border-gray-300 bg-white px-6 py-3 font-medium text-[var(--primary)] transition hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex-1">
          <Image 
            src="/photos/Hotel3.jpg"
            alt=""
            width={800}
            height={500}
            className="-[500px] w-full rounded-2xl object-cover"
          />
        </div>
      </section>
    </main>
  );
}
