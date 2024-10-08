import { Progress } from "~/components/ui/progress";

export default function PersonalProgress() {
  const progress = 75;

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold">Personal Progress</h2>
      <p className="mb-4 text-lg font-medium">Current Goal: Read 30 minutes daily</p>
      <div className="mb-4 flex items-center justify-center">
        <div className="relative h-40 w-40">
          <Progress value={progress} className="h-full w-full rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold">{progress}%</span>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-muted-foreground">5 day streak</p>
    </div>
  );
}