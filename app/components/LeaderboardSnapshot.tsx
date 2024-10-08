import { Progress } from "~/components/ui/progress";

const leaderboardData = [
  { name: "Alice", rank: 1, progress: 95 },
  { name: "Bob", rank: 2, progress: 90 },
  { name: "Charlie", rank: 3, progress: 85 },
  { name: "David", rank: 4, progress: 80 },
  { name: "Eve", rank: 5, progress: 75 },
];

export default function LeaderboardSnapshot() {
  return (
    <div className="col-span-2 rounded-lg border bg-card p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold">Leaderboard</h2>
      <ul className="space-y-4">
        {leaderboardData.map((user) => (
          <li key={user.rank} className="flex items-center justify-between">
            <span className="w-8 font-medium">{user.rank}.</span>
            <span className="w-24 font-medium">{user.name}</span>
            <Progress value={user.progress} className="h-2 w-32" />
            <span className="w-12 text-right text-sm text-muted-foreground">
              {user.progress}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}