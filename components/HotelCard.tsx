import Image from "next/image";
import Link from "next/link";

type HotelCardProps = {
    name: string;
    location: string;
    price: number;
    image: string;
    rating: number;
};

export default function HotelCard({
    name,
    location,
    price,
    image,
    rating,
}: HotelCardProps) {
    return (
        <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Image
                src={image}
                alt={name}
                width={600}
                height={400}
                className="h-56 w-full object-cover"
            />

            <div className="bg-white p-6">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-semibold text-[var(--primary)]">
                            {name}
                        </h2>

                        <p className="mt-2 text-sm text-[var(--text-muted)]">
                            {location}
                        </p>
                    </div>

                    <span className="rounded-lg bg-[var(--primary)] px-3 py-1.5 text-sm font-semiold text-white">
                        {rating}
                    </span>
                </div>

                <div className="mt-6 border-t border-gray-100 pt-5">
                    <p className="font-semibold text-[var(--primary)]">
                        ${price.toLocaleString()}{" "}

                        <span className="font-normal text-[var(--text-muted)]">
                            / night
                        </span>

                        <Link 
                            href="/hotels"
                            className="mt-4 block w-full rounded-lg bg-[var(--primary)] px-4 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
                        >
                            View Hotel
                        </Link>
                    </p>
                </div>
            </div>
        </article>
    );
}