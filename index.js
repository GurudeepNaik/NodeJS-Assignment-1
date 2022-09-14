const fs = require("fs/promises");

const myFileWriter = async (fileName, fileContent) => {
  await fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

const myFileReader = async (fileName) => {
  function readData(err, data) {
    if (data) {
      console.log(data);
    } else {
      console.log(err);
    }
  }
  fs.readFile(fileName, "utf-8", readData);
};

const myFileUpdater = async (fileName, fileContent) => {
  // const fs = require("fs");
  fs.appendFile(fileName, fileContent, (err) => {
    if (err) throw err;
    console.log("Your File Has Been Updated");
  });
};

const myFileDeleter = async (fileName) => {
  // const fs = require("fs");
  fs.unlinkSync(fileName);
};

// module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
myFileWriter("index.html", "");
// myFileReader("index.html");
// myFileUpdater("index.html", "<p>Hello Guru</p>");
// myFileDeleter("index.html");
