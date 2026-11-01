// Sandbox for proving the GitHub "required status check" before paying for GitHub Pro.
// Change BROKEN to true in a pull request: the "tests" check fails and the Merge button must be blocked.
const BROKEN = true;
if (BROKEN) { console.log("tests FAILED (on purpose)"); process.exit(1); }
console.log("tests passed");
