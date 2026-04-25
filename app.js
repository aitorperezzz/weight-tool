import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }

  console.log(`Server running at http://localhost:${PORT}`);
});
