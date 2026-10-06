import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="border-b border-gray-200 bg-white">
            <div className="flex w-full items-center justify-between px-8 py-5">
                <Link href="/" className="text-4xl font-bold tracking-tight text-[var(--primary)]">
                    Comfort Place
                </Link>

                <div className="flex items-center gap-8">
                    <Link href="/" className="text-xl font-medium text-[var(--text)] transition hover:text-[var(--accent)]">
                        Home
                    </Link>

                    <Link href="/hotels" className="text-xl font-medium text-[var(--text)] transition hover:text-[var(--accent)]">
                        Hotels
                    </Link>
                </div>
            </div>
        </nav>
    );
}