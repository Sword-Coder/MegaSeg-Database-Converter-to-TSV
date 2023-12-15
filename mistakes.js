//Code Mistakes
/*
function convertMegaSegToTsv(contents) {
  const lines = contents.split("\n");
  const headers = lines[0].trim().split("\t");
  let tsvData = "";

  // Remove the first line (header) from the MegaSeg data
  lines.shift();

  // Convert each line to TSV format
  lines.forEach((line) => {
    const columns = line.trim().split("\t");
    tsvData += columns.join("\t") + "\n";
  });

  return headers.join("\t") + "\n" + tsvData;
}*/
/*
function convertMegaSegToTsv(contents) {
  const lines = contents.split("\n");
  const headers = ["Title", "Artist", "Artist last name"];
  let tsvData = "";

  for (let i = 0; i < lines.length; i += 10) {
    const title = lines[i + 1].trim();
    const artist = lines[i + 2].trim();
    const artistLastName = lines[i + 8].trim();

    tsvData += `${title}\t${artist}\t${artistLastName}\n`;
  }

  return headers.join("\t") + "\n" + tsvData;
}*/
/*
function convertMegaSegToTsv(contents) {
  const lines = contents.split("\n");
  const headers = ["Title", "Artist", "Artist last name"];
  let tsvData = "";

  for (let i = 0; i < lines.length; i += 10) {
    const title = lines[i + 1]?.trim() || "";
    const artist = lines[i + 2]?.trim() || "";
    const artistLastName = lines[i + 8]?.trim() || "";

    tsvData += `${title}\t${artist}\t${artistLastName}\n`;
  }

  return headers.join("\t") + "\n" + tsvData;
}*/
/*
function convertMegaSegToTsv(contents) {
  const lines = contents.split("\n");
  console.log(lines);
  const headers = ["Title", "Artist", "Artist last name"];
  let tsvData = "";

  for (let i = 0; i < lines.length; i += 4) {
    const title = getValue(lines[i + 1]);
    const artist = getValue(lines[i + 2]);
    const artistLastName = getValue(lines[i + 3]);

    tsvData += `${title}\t${artist}\t${artistLastName}\n`;
  }

  return headers.join("\t") + "\n" + tsvData;
}
*/

// if (isDataSection) {
//   tsvData += `${title}\t${artist}\t${artistLastName}\t${album}\t${category}\t${year}\t${intro}\t${cueintime}\t${seguetime}\t${BPM}\t${volume}\t${path}\t${mixerMemory}\t${fileid}\t${pitch}\t${playcount}\t${lastplayed}\t${fadeoverride}\t${notes}\t${vocalist}\t${endingtype}\t${restrictplayenable}\t${startdate}\t${stopdate}\t${relatedartist}\t${composer}\t${lyricist}\t${publisher}\t${recordid}\t${highestchart}\t${popularity}\t${energymood}\t${uniqueid}\t${color}\t${colorOn}\t${restrictdayparts}\t${starttime}\t${stoptime}\t${bitrate}\t${chapters}\n`;
//   clear();
// }
// Check if the line indicates the end of the data section
/*
    if (isDataSection) {
      // Process the line if it's within the data section
      
      const title = getValue(lines[i]);
      console.log("This is  a title>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  " + title);

      const artist = getValue(lines[i + 1]);
      const artistLastName = getValue(lines[i + 2]);
      const album = getValue(lines[i + 8]);
      const category = getValue(line[i + 5]);
      //Start here
      const year = getValue(line[i + 9]);
      const intro = getValue(line[i + 3]);
      const cueintime = getValue(line[i + 6]);
      const seguetime = getValue(line[i + 4]);
      const BPM = getValue(line[i + 10]);
      const volume = getValue(line[i + 12]);
      const path = getValue(line[i + 48]);
      const mixerMemory = "0|0|0|0|0|";
      const fileid = getValue(line[i + 47]);
      const pitch = 0;
      const playcount = getValue(line[i + 13]);
      const lastplayed = getValue(line[i + 14]);
      const hotkey = "";
      const fadeoverride = 0;
      const notes = "";
      const vocalist = "";
      const endingtype = getValue(line[i + 17]);
      const restrictplayenable = "";
      const startdate = getValue(line[i + 18]);
      const stopdate = getValue(line[i + 28]);
      const relatedartist = getValue(line[i + 20]);
      const composer = getValue(line[i + 21]);
      const lyricist = getValue(line[i + 23]);
      const publisher = getValue(line[i + 23]);
      const recordid = getValue(line[i + 24]);
      const highestchart = "";
      const popularity = "";
      const energymood = "";
      const uniqueid = getValue(line[i + 44]);
      const color = "&h00000000";
      const colorOn = "";
      const restrictdayparts = "";
      const starttime = "";
      const stoptime = "";
      const bitrate = "";
      const chapters = "";

      //tsvData += `${title}\t${artist}\t${artistLastName}${album}\t${category}\t${year}\t${intro}\t${cueintime}\t${seguetime}\t${BPM}\t${volume}\t${path}\t${mixerMemory}\t${fileid}\t${pitch}\t${playcount}\t${lastplayed}\t${hotkey}\t${fadeoverride}\t${notes}\t${vocalist}\t${endingtype}\t${restrictplayenable}\t${startdate}\t${stopdate}\t${relatedartist}\t${composer}\t${lyricist}\t${publisher}\t${recordid}\t${highestchart}\t${popularity}\t${energymood}\t${uniqueid}\t${color}\t${colorOn}\t${restrictdayparts}\t${starttime}\t${stoptime}\t${bitrate}t${chapters}\n`;
      // Skip the next two lines since they are already processed
      //i += 2;
    }*/
const lines = []; // The lines of the MegaSeg database

const data = []; // Array to store the objects

let object = {}; // Object to store the current data
let isDataSection = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();

  if (line.startsWith("01]")) {
    object.Title = line.substring(4).trim();
  }
  if (line.startsWith("02]")) {
    object.Artist = line.substring(4).trim();
  }
  if (line.startsWith("12]")) {
    const parts = line.substring(4).trim().split(" ");
    object["Artist last name"] = parts[parts.length - 1];
    object.Album = parts.slice(0, -1).join(" ");
  }
  if (line.startsWith("06]")) {
    object.Category = line.substring(4).trim();
  }
  if (line.startsWith("09]")) {
    object.Year = line.substring(4).trim();
  }
  if (line.startsWith("07]")) {
    object.Intro = line.substring(4).trim();
  }
  if (line.startsWith("05]")) {
    object["Cue-in Time"] = line.substring(4).trim();
  }
  if (line.startsWith("13]")) {
    object["Segue Time"] = line.substring(4).trim();
  }
  if (line.startsWith("13]")) {
    object["BPM"] = line.substring(4).trim();
  }
  if (line.startsWith("14]")) {
    object["Volume"] = line.substring(4).trim();
  }
  if (line.startsWith("45]")) {
    object["File ID"] = line.substring(4).trim();
  }
  if (line.startsWith("49]")) {
    object.Path = line.substring(4).trim();
  }
  if (line.startsWith("99* ----")) {
    if (Object.keys(object).length > 0) {
      data.push(object); // Store the current object in the array
    }
    isDataSection = false;
    break;
  }
  if (isDataSection) {
    // Store other properties of the object if needed
  }
  if (line.startsWith("90* ----")) {
    isDataSection = true;
    object = {}; // Create a new object for the next set of data
  }
}
/*
function getValue(line) {
  if (line) {
    const value = line.substring(line.indexOf("]") + 1).trim();
    //console.log("This is the value---------" + value);
    return value || "";
  }
  return "";
}
*/

// Loop through the array of objects
data.forEach((obj) => {
  console.log(
    obj.Title,
    obj.Artist,
    obj["Artist last name"],
    obj.Album,
    obj.Category,
    obj.Year,
    obj.Intro,
    obj["Cue-in Time"],
    obj["Segue Time"],
    obj.BPM,
    obj.Volume,
    obj.Path,
    obj["Mixer Memory"],
    obj["File ID"],
    obj.Pitch,
    obj["Play Count"],
    obj["Last Played"],
    obj["Hot Key"],
    obj["Fade Override"],
    obj.Notes,
    obj.Vocalist,
    obj["Ending Type"],
    obj["Restrict Play Enable"],
    obj["Start Date"],
    obj["Stop Date"],
    obj["Related Artist"],
    obj.Composer,
    obj.Lyricist,
    obj.Publisher,
    obj["Record ID"],
    obj["Highest Chart"],
    obj.Popularity,
    obj["Energy/Mood"],
    obj["Unique ID"],
    obj.Color,
    obj["Color On"],
    obj["Restrict Dayparts"],
    obj["Start Time"],
    obj["Stop Time"],
    obj.Bitrate,
    obj.Chapters
  );
});

// const data = []; // Array to store the objects
// var object = {}; // Object to store the current data

// let isDataSection = false;
// for (let i = 0; i < lines.length; i++) {
//   const line = lines[i];

//   if (line.startsWith("01]")) {
//     // Check if the line indicates the start of the data section
//     // const obj = line;
//     // var x = obj.split("]");
//     // var a = x[0];
//     // object.a = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("02]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // artist = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("03]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // artistLastName = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("04]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // intro = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("05]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // seguetime = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("06]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // category = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("07]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // cueintime = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("08]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // pitch = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("09]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // album = x[1].trim();
//   }
//   if (line.startsWith("10]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // year = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("11]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // BPM = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("13]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // volume = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("14]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // playcount = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("15]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // lastplayed = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("16]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // vocalist = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("17]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // endingtype = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("18]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // restrictplayenable = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("19]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // startdate = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("20]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // notes = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("21]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // relatedartist = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("22]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // composer = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("23]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // lyricist = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("24]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // publisher = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("25]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // recordid = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("26]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // highestchart = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("27]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // popularity = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("28]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // energymood = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("29]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // stopdate = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("30]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // restrictdayparts = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("31]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // starttime = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("32]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // stoptime = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("44]")) {
//     //   const object = line;
//     //   var x = object.split("]");
//     //   bitrate = x[1].trim();
//     //
//     data.push(line);
//   }
//   if (line.startsWith("45]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // uniqueid = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("46]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // colorOn = x[1].trim(); //If true then Y
//     data.push(line);
//   }
//   if (line.startsWith("47]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // color = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("48]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // fileid = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("49]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // path = x[1].trim();
//     data.push(line);
//   }
//   if (line.startsWith("52]")) {
//     // const object = line;
//     // var x = object.split("]");
//     // fadeoverride = x[1].trim();
//     // isDataSection = true;
//     data.push(line);
//   }
//   if (line.startsWith("99*")) {
//     console.log("working");
//     object = data;
//   }
// }
// for (let i = 0; i < object.length; i++) {
//   console.log(object[i]);
// }
// console.log(extractedDATA);
//console.log(tsvData);
