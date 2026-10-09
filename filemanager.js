const fs = require("fs");

const operation = process.argv[2];
const fileName = process.argv[3];
const content = process.argv[4];

if (operation === "create") {

    fs.writeFileSync(fileName, content);
    console.log("File created successfully.");

}

else if (operation === "read") {

    const data = fs.readFileSync(fileName, "utf8");
    console.log("File content:");
    console.log(data);

}

else if (operation === "update") {

    fs.appendFileSync(fileName, content);
    console.log("File updated successfully.");

}

else if (operation === "delete") {

    fs.unlinkSync(fileName);
    console.log("File deleted successfully.");

}

else {

    console.log("Invalid operation.");
}
