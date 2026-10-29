import { Suspense } from "react";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { SectionCards, SectionCardsSkeleton } from "@/components/section-cards";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { adminGetBookingStats } from "../data/admin/admin-get-booking-stats";

async function AdminDashboardContent() {
  const bookingData = await adminGetBookingStats();
  return (
    <>
      <SectionCards />
      <div className="px-4 pb-8 lg:px-6">
        <div className="overflow-hidden rounded-2xl border border-border/70 bg-card p-2 shadow-sm sm:p-4">
          <ChartAreaInteractive data={bookingData} />
        </div>
      </div>
    </>
  );
}

function AdminDashboardSkeleton() {
  return (
    <>
      <SectionCardsSkeleton />
      <div className="px-4 lg:px-6">
        <Card className="p-6 space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1.5">
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-4 w-72" />
            </div>
            <Skeleton className="h-9 w-40 rounded-md" />
          </div>
          <Skeleton className="h-[280px] w-full rounded-xl" />
        </Card>
      </div>
    </>
  );
}

export default function AdminIndexPage() {
  return (
    <Suspense fallback={<AdminDashboardSkeleton />}>
      <AdminDashboardContent />
    </Suspense>
  );
}

