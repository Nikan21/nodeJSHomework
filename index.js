const fs = require("fs/promises");

/* 1 */
fs.writeFile("file.txt", "Hello From NodeJS");
fs.readFile("file.txt", "utf8").then((file) => {
  console.log(file);
});

/* 2 */
fs.writeFile(
  "file.txt",
  `FILE REWRITE 
   OLD CONTENT: Hello From NodeJS 
   NEW CONTENT: lorem ipsum
   `
);

/* 3 */
fs.appendFile('file.txt', 'добавлено в конец файла')