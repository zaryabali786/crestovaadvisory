import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-blue-950 px-6 pt-24 text-white text-center">
      <div>
        <p className="font-serif text-8xl font-semibold text-blue-400">404</p>
        <h1 className="mt-2 text-4xl !text-white">This page could not be found.</h1>
        <Link href="/" className="btn btn-primary mt-8">Back to home</Link>
      </div>
    </section>
  );
}
