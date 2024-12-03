const text = await Deno.readTextFile("puzzle-input.txt");

const reports = text.split("\n");

let safeReports = 0;

for (const report of reports) {
  const levels = report.split(" ").map((level) => parseInt(level));

  let isReportSafe = true;
  let pattern;

  // Determine if the levels are increasing or decreasing by comparing the first two levels, if they are the same, skip the report
  if (levels[0] < levels[1]) {
    pattern = "increasing";
  } else if (levels[0] > levels[1]) {
    pattern = "decreasing";
  } else {
    continue;
  }

  for (let i = 0; i < levels.length - 1; i++) {
    const currentLevel = levels[i];
    const nextLevel = levels[i + 1];

    // Check if the levels are following the pattern
    if (
      (pattern === "increasing" && currentLevel > nextLevel) ||
      (pattern === "decreasing" && currentLevel < nextLevel) ||
      currentLevel === nextLevel
    ) {
      isReportSafe = false;
      break;
    }

    // Check if the difference between the levels is more than 3, if it is, the report is not safe
    const difference = Math.abs(currentLevel - nextLevel);

    if (difference > 3) {
      isReportSafe = false;
      break;
    }
  }

  if (isReportSafe) {
    safeReports++;
  }
}

console.log(safeReports);
