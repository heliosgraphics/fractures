import chalk from "chalk";
import fs from "fs";
import gzipSize from "gzip-size";

// Creates a folder and writes the file
export const writeFile = (openFolder: string, contents: string): void => {
  if (!openFolder) return;
  if (!contents) return;

  try {
    const f: Array<string> = openFolder.split("/");
    const fileName: string = f.pop() || "";
    const folder: string = f.join("/");
    const hasFolder: boolean = fs.existsSync(folder);

    if (!hasFolder) {
      fs.mkdirSync(folder);
    }

    fs.writeFileSync(openFolder, contents);

    return getStats(openFolder, fileName, contents);
  } catch (error) {
    return console.error(error);
  }
};

// Gets the file statistics
export const getStats = (folder: string, fileName: string, content: string) => {
  fs.stat(folder, (error: any, stats: any) => {
    if (error) return console.log(chalk.red(`File doesn't exist.`));

    const kbSize: number = Math.round(stats?.size / 1024);
    const kbGzip: number = Math.round(gzipSize.sync(content) / 1024);

    console.log(
      chalk.green(
        `⤒ ${fileName}: ${stats?.size} bytes ${kbSize} KB | gzip: ${kbGzip} KB`
      )
    );
  });
};
