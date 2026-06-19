import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase text-primary">404</p>
      <h1 className="mt-3 text-3xl font-semibold">Page not found</h1>
      <p className="mt-3 text-muted-foreground">
        The page you are looking for is not available in this portfolio.
      </p>
      <Button asChild className="mt-6">
        <Link href="/">Back home</Link>
      </Button>
    </div>
  );
}
