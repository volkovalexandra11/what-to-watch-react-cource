export function getRunTime(runTime: number): string {
  const minutes = runTime % 60;
  const hours = Math.floor(runTime / 60);

  return `${hours}h ${minutes}m`;
}
