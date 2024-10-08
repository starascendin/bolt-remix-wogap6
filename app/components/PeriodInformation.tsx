import { Calendar } from "lucide-react";

export default function PeriodInformation() {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold">Period Information</h2>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-medium">October 2024</p>
          <p className="text-sm text-muted-foreground">23 days left</p>
        </div>
        <Calendar className="h-8 w-8 text-muted-foreground" />
      </div>
    </div>
  );
}