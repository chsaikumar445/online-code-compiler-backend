import express, { json } from "express";
import { PythonShell } from "python-shell";
import { writeFile } from "fs";
import { spawn } from "child_process";

const port = process.env.PORT || 4000;
const app = express();
app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const code = req.body.code;
    // const intput = req.body.input;

    await writeFile(
      "C:/Users/chsai/OneDrive/Desktop/React/online compiler/server/src/script.py",
      code,
      "utf8",
      (error) => {
        // console.log(code);
        if (error) {
          throw error;
        }
      }
    );

    const pythonProcess = await spawn("python", [
      "C:/Users/chsai/OneDrive/Desktop/React/online compiler/server/src/script.py",
    ]);

    pythonProcess.stdout.on("data", (data) => {
      // Do something with the data returned from python script
      // console.log("test");

      console.log(data.toString());
      res
        .status(200)
        .send(JSON.stringify({ message: "success", output: data.toString() }));
    });
  } catch (error) {
    res.status(400).send(JSON.stringify({ message: "Error" }));
  }
});

app.listen(port, () => {
  console.log("server running");
});
