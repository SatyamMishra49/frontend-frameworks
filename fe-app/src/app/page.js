import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-semibold">NEXT JS</h1>
      <Link href={'product'}>Product Page</Link>
      <Link href={'/account'}>Account Page</Link>
    </div>
  );
}
