import Image from "next/image";

type HotelCardProps = {
    name: string;
    location: string;
    price: number;
    image: string;
};

export default function HotelCard({
    name,
    location,
    price,
    image
}: HotelCardProps) {
    return (
        <article className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <Image
                src={image}
                alt={name}
                width={600}
                height={400}
                className="h-56 w-full object-cover"
            />

            <div className="p-5">
                <h2 className="text-xl font-semibold text-[var(--primary)]">
                    {name}
                </h2>

                <p className="mt-2 text-sm text-[var(--text-muted)]">
                    {location}
                </p>

                <p className="mt-4 font-semibold text-[var(--primary)]">
                    ${price.toLocaleString()}{" "}

                    <span className="font-normal text-[var(--text-muted)]">
                        / night
                    </span>
                </p>
            </div>
        </article>
    );
}