import fs from 'fs';


export function readFile(path: string) {
    fs.readFile(path, 'utf8', (err, fileContents) => {
        if (err) {
          console.error(err)
          return
        }
        try {
          // const data = JSON.parse(fileContents)
          return fileContents;
        } catch(err) {
          console.error(err)
        }
    });
}
