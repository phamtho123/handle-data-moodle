// Requiring the module
const reader = require("xlsx");
const fs = require("fs");

// Reading our test file
const file = reader.readFile("./data.xlsx");

let data = [];

const sheets = file.SheetNames;

for (let i = 0; i < sheets.length; i++) {
  const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
  temp.forEach((res) => {
    if(res['Answer']){
        res['Answer'] = 'ANSWER: '+res['Answer']+"\n";
        res['Answer'] = res['Answer'].replace(/\n+/g, '\n');
    }
    if(res['Question']){
        res['Question'] = res['Question'].replace(/\n+/g, ' ');
        res['Question'] = "\n"+res['Question']+"\n";
    }
    if(res['Option A']){
        res['Option A'] = res['Option A']+"\n";
        res['Option A'] = res['Option A'].replace(/\n+/g, '\n');
    }
    if(res['Option B']){
        res['Option B'] = res['Option B']+"\n";
        res['Option B'] = res['Option B'].replace(/\n+/g, '\n');
    }
    if(res['Option C']){
        res['Option C'] = res['Option C']+"\n";
        res['Option C'] = res['Option C'].replace(/\n+/g, '\n');
    }
    if(res['Option D']){
        res['Option D'] = res['Option D']+"\n";
        res['Option D'] = res['Option D'].replace(/\n+/g, '\n');
    }
    data.push(res);
  });
  temp.forEach((res) => {
    for (const [key, value] of Object.entries(res)) {
        console.log(`${value}`);
        fs.appendFileSync("./data.txt",value);
      }
  });
}

fs.writeFileSync("./datajson.json", JSON.stringify(data, null, 1));

