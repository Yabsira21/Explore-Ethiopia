import { Suspense } from "react";
import { adminGetDestinations } from "@/app/data/admin/admin-get-destinations";
import { DestinationCard, DestinationCardSkeleton } from "./_components/DestinationCard";

async function DestinationsContent() {
  const data = await adminGetDestinations();

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
  );
}

function DestinationsGridSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <DestinationCardSkeleton key={i} />
      ))}
    </div>
  );
}

export default function DestinationsPage() {
  return (
  <div className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-10 lg:px-6">
    <div className="border-b border-border/70 pb-6">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C69A45]">
        Explore Ethiopia
      </p>
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Destinations
      </h1>
      <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
        Manage the places travelers can discover across Ethiopia.
      </p>
    </div>
      <Suspense fallback={<DestinationsGridSkeleton />}>
        <DestinationsContent />
      </Suspense>
    </div>
  );
}

