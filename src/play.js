// import { PythonShell } from "python-shell";

// const options = {
//   scriptPath:
//     "C:/Users/chsai/OneDrive/Desktop/React/online compiler/server/src/",
// };

// await PythonShell.run("script.py", options, (err, res) => {
//   console.log(err);
//   if (err) {
//     console.log(err);
//   }
//   if (res) {
//     console.log(res);
//   }
// });
import { spawn } from "child_process";
// const spawn = require("child_process").spawn;
// scriptPath =
//   "C:/Users/chsai/OneDrive/Desktop/React/online compiler/server/src/";
const pythonProcess = spawn("python", [
  "C:/Users/chsai/OneDrive/Desktop/React/online compiler/server/src/script.py",
]);

pythonProcess.stdout.on("data", (data) => {
  // Do something with the data returned from python script
  console.log(data.toString());
});
