import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap py-32 text-center">
      <div className="eyebrow justify-center">404</div>
      <h1 className="text-4xl mb-4">Signal lost.</h1>
      <p className="text-muted mb-8">That page doesn&apos;t exist — or hasn&apos;t been built yet.</p>
      <Link href="/" className="btn btn-primary">
        Back to home
      </Link>
    </div>
  );
}
