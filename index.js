// Requiring the module
const reader = require("xlsx");
const fs = require("fs");

try {
  // Check file exist

  let file_level_1 = fs.existsSync("./Java-PTTK-CTDL_Question/data-level-1.txt");
  let file_level_2 = fs.existsSync("./Java-PTTK-CTDL_Question/data-level-2.txt");
  let file_level_3 = fs.existsSync("./Java-PTTK-CTDL_Question/data-level-3.txt");
  let file_level_4 = fs.existsSync("./Java-PTTK-CTDL_Question/data-level-4.txt");
  let file_level_5 = fs.existsSync("./Java-PTTK-CTDL_Question/data-level-5.txt");
  let file_not_level = fs.existsSync("./Java-PTTK-CTDL_Question/data-not-level.txt");

  // Remove file exist
  if(file_level_1){
    fs.unlinkSync("./Java-PTTK-CTDL_Question/data-level-1.txt");
  }
  if(file_level_2) {
    fs.unlinkSync("./Java-PTTK-CTDL_Question/data-level-2.txt");
  }
  if(file_level_3) {
    fs.unlinkSync("./Java-PTTK-CTDL_Question/data-level-3.txt");
  }
  if(file_level_4){
    fs.unlinkSync("./Java-PTTK-CTDL_Question/data-level-4.txt");
  }
  if(file_level_5){
    fs.unlinkSync("./Java-PTTK-CTDL_Question/data-level-5.txt");
  }
  if(file_not_level){
    fs.unlinkSync("./Java-PTTK-CTDL_Question/data-not-level.txt");
  }
 
  // Reading our test file
  const file = reader.readFile("./Java-PTTK-CTDL_Question/data-full-level.xlsx");

  let data = [];

  const sheets = file.SheetNames;

  for (let i = 0; i < sheets.length; i++) {
    const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
    temp.forEach((res) => {
      if (res["Answer"]) {
        res["Answer"] = "ANSWER: " + res["Answer"] + "\n";
        res["Answer"] = res["Answer"].replace(/\n+/g, "\n");
      }
      if (res["Question"]) {
        res["Question"] = res["Question"].replace(/\n+/g, " ");
        res["Question"] = "\n" + res["Question"] + "\n";
      }
      if (res["Option A"]) {
        res["Option A"] = res["Option A"] + "\n";
        res["Option A"] = res["Option A"].replace(/\n+/g, "\n");
      }
      if (res["Option B"]) {
        res["Option B"] = res["Option B"] + "\n";
        res["Option B"] = res["Option B"].replace(/\n+/g, "\n");
      }
      if (res["Option C"]) {
        res["Option C"] = res["Option C"] + "\n";
        res["Option C"] = res["Option C"].replace(/\n+/g, "\n");
      }
      if (res["Option D"]) {
        res["Option D"] = res["Option D"] + "\n";
        res["Option D"] = res["Option D"].replace(/\n+/g, "\n");
      }
      if (res["Level"]) {
        res["Level"] = res["Level"].toString();
      } else {
        res["Level"] = "No Level";
      }
      data.push(res);
    });
    temp.forEach((res) => {
      switch (res["Level"]) {
        case "1": {
          for (const [key, value] of Object.entries(res)) {
            if (key === "Level" || key === "STT") {
              continue;
            } else {
              fs.appendFileSync("./Java-PTTK-CTDL_Question/data-level-1.txt", value);
            }
          }
          break;
        }

        case "2": {
          for (const [key, value] of Object.entries(res)) {
            if (key === "Level" || key === "STT") {
              continue;
            } else {
              fs.appendFileSync("./Java-PTTK-CTDL_Question/data-level-2.txt", value);
            }
          }
          break;
        }
        case "3": {
          for (const [key, value] of Object.entries(res)) {
            if (key === "Level" || key === "STT") {
              continue;
            } else {
              fs.appendFileSync("./Java-PTTK-CTDL_Question/data-level-3.txt", value);
            }
          }
          break;
        }
        case "4": {
          for (const [key, value] of Object.entries(res)) {
            if (key === "Level" || key === "STT") {
              continue;
            } else {
              fs.appendFileSync("./Java-PTTK-CTDL_Question/data-level-4.txt", value);
            }
          }
          break;
        }
        case "5": {
          for (const [key, value] of Object.entries(res)) {
            if (key === "Level" || key === "STT") {
              continue;
            } else {
              fs.appendFileSync("./Java-PTTK-CTDL_Question/data-level-5.txt", value);
            }
          }
          break;
        }
        case "No Level": {
          for (const [key, value] of Object.entries(res)) {
            if (key === "Level" || key === "STT") {
              continue;
            } else {
              fs.appendFileSync("./Java-PTTK-CTDL_Question/data-not-level.txt", value);
            }
          }
        }
        default: {
        //   console.log("error");
        }
      }
    });
  }
  fs.writeFileSync("./Java-PTTK-CTDL_Question/datajson.json", JSON.stringify(data, null, 1));
} catch (error) {
  console.log(error, "\nCheck please !!!");
}
