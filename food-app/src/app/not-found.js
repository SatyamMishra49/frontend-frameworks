import Link from "next/link";

export default function NotFound() {

    return (
        <div>
            <p>Page Not Found</p>
            <Link href={'/'}>Go to Home</Link>
        </div>
    )
}