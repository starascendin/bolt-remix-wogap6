import { Progress } from "~/components/ui/progress";

export default function GroupProgress() {
  const groupProgress = 65;
  const totalParticipants = 50;

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold">Group Progress</h2>
      <p className="mb-2 text-lg">Total Participants: {totalParticipants}</p>
      <Progress value={groupProgress} className="mb-2 h-4" />
      <p className="text-sm text-muted-foreground">
        {groupProgress}% of group on track
      </p>
    </div>
  );
}