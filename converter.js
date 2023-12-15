const date = new Date();
const y = date.toISOString();
const ymd = y.split("T");
const newdate = ymd[0];
const stopandstart = newdate + " " + "00:00:00";

//Global Variabls
var title = ``;
var artist = ``;
var artistLastName = ``;
var album = ``;
var category = ``;
var year = ``;
var intro = ``;
var cueintime = ``;
var seguetime = ``;
var BPM = ``;
var volume = 255;
var path = ``;
var mixerMemory = "0|0|0|0|0|";
var fileid = ``;
var pitch = ``;
var playcount = ``;
var lastplayed = `\t`;
var hotkey = `\t`;
var fadeoverride = 0;
var notes = ``;
var vocalist = ``;
var endingtype = ``;
var restrictplayenable = ``;
var startdate = ``;
var stopdate = ``;
var relatedartist = ``;
var composer = ``;
var lyricist = ``;
var publisher = ``;
var recordid = ``;
var highestchart = ``;
var popularity = ``;
var energymood = ``;
var uniqueid = ``;
var color = "&h00000000";
var colorOn = ``;
var restrictdayparts = ``;
var starttime = stopandstart;
var stoptime = stopandstart;
var bitrate = ``;
var chapters = ``;

function convertToTsv() {
  const input = document.getElementById("databaseFile");
  const file = input.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const contents = e.target.result;
      const tsvData = convertMegaSegToTsv(contents);
      downloadTsv(tsvData);
    };

    reader.readAsText(file);
  }
}

function convertMegaSegToTsv(contents) {
  const lines = contents.split("\n");
  const headers = [
    "Title",
    "Artist",
    "Artist last name",
    "Album",
    "Category",
    "Year",
    "Intro",
    "Cue-in Time",
    "Segue Time",
    "BPM",
    "Volume",
    "Path",
    "Mixer Memory",
    "File ID",
    "Pitch",
    "Play Count",
    "Last Played",
    "Hot Key",
    "Fade Override",
    "Notes",
    "Vocalist",
    "Ending Type",
    "Restrict Play Enable",
    "Start Date",
    "Stop Date",
    "Related Artist",
    "Composer",
    "Lyricist",
    "Publisher",
    "Record ID",
    "Highest Chart",
    "Popularity",
    "Energy/Mood",
    "Unique ID",
    "Color",
    "Color On",
    "Restirct Dayparts",
    "Start Time",
    "Stop Time",
    "Bitrate",
    "Chapters",
  ];
  let tsvData = "";
  const extractedDATA = extractData(lines);
  for (let i = 0; i < extractedDATA.length; i++) {
    title = extractedDATA[i].title;
    console.log(title);
    artist = extractedDATA[i].artist;
    artistLastName = extractedDATA[i].artistLastName;
    album = extractedDATA[i].album;
    category = extractedDATA[i].category;
    year = extractedDATA[i].year;
    intro = extractedDATA[i].intro;
    cueintime = extractedDATA[i].cueintime;
    seguetime = extractedDATA[i].seguetime;
    BPM = extractedDATA[i].bpm;
    volume = extractedDATA[i].volume;
    path = extractedDATA[i].path;
    mixerMemory = extractedDATA[i].mixerMemory;
    fileid = extractedDATA[i].fileid;
    pitch = extractedDATA[i].pitch;
    playcount = extractedDATA[i].playcount;
    lastplayed = extractedDATA[i].lastplayed;
    hotkey = extractedDATA[i].hotkey;
    fadeoverride = extractedDATA[i].fadeoverride;
    notes = extractedDATA[i].notes;
    vocalist = extractedDATA[i].vocalist;
    endingtype = extractedDATA[i].endingtype;
    restrictplayenable = extractedDATA[i].restrictplayenable;
    startdate = extractedDATA[i].startdate;
    stopdate = extractedDATA[i].stopdate;
    relatedartist = extractedDATA[i].relatedartist;
    composer = extractedDATA[i].composer;
    lyricist = extractedDATA[i].lyricist;
    publisher = extractedDATA[i].publisher;
    recordid = extractedDATA[i].recordid;
    highestchart = extractedDATA[i].highestchart;
    popularity = extractedDATA[i].popularity;
    energymood = extractedDATA[i].energymood;
    uniqueid = extractedDATA[i].uniqueid;
    color = extractedDATA[i].color;
    colorOn = extractedDATA[i].colorOn;
    restrictdayparts = extractedDATA[i].restrictdayparts;
    starttime = extractedDATA[i].starttime;
    stoptime = extractedDATA[i].stoptime;
    bitrate = extractedDATA[i].bitrate;
    chapters = extractedDATA[i].chapters;
    tsvData += `${title}\t${artist}\t${artistLastName}\t${album}\t${category}\t${year}\t${intro}\t${cueintime}\t${seguetime}\t${BPM}\t${volume}\t${path}\t${mixerMemory}\t${fileid}\t${pitch}\t${playcount}\t${lastplayed}\t${hotkey}\t${fadeoverride}\t${notes}\t${vocalist}\t${endingtype}\t${restrictplayenable}\t${startdate}\t${stopdate}\t${relatedartist}\t${composer}\t${lyricist}\t${publisher}\t${recordid}\t${highestchart}\t${popularity}\t${energymood}\t${uniqueid}\t${color}\t${colorOn}\t${restrictdayparts}\t${starttime}\t${stoptime}\t${bitrate}\t${chapters}\n`;
  }
  return headers.join("\t") + "\n" + tsvData;
}

function extractData(array) {
  let result = [];
  let currentObject = {};

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (item.startsWith("01]")) {
      if (Object.keys(currentObject).length > 0) {
        result.push(currentObject);
      }
      currentObject = {
        title: item.substring(4),
        artist: ``,
        artistLastName: ``,
        album: ``,
        category: ``,
        year: ``,
        intro: ``,
        cueintime: ``,
        seguetime: ``,
        bpm: ``,
        volume: 255,
        path: ``,
        mixerMemory: "0|0|0|0|0|",
        fileid: ``,
        pitch: ``,
        playcount: ``,
        lastplayed: "",
        hotkey: "",
        fadeoverride: 0,
        notes: ``,
        vocalist: ``,
        endingtype: ``,
        restrictplayenable: ``,
        startdate: ``,
        stopdate: ``,
        relatedartist: ``,
        composer: ``,
        lyricist: ``,
        publisher: ``,
        recordid: ``,
        highestchart: ``,
        popularity: ``,
        energymood: ``,
        uniqueid: ``,
        color: "&h00000000",
        colorOn: ``,
        restrictdayparts: ``,
        starttime: stopandstart,
        stoptime: stopandstart,
        bitrate: ``,
        chapters: ``,
      };
    }
    if (item.startsWith("02]")) {
      currentObject.artist = item.substring(4);
    }
    if (item.startsWith("03]")) {
      currentObject.artistLastName = item.substring(4);
    }
    if (item.startsWith("04]")) {
      currentObject.intro = item.substring(4);
    }
    if (item.startsWith("05]")) {
      currentObject.seguetime = item.substring(4);
    }
    if (item.startsWith("06]")) {
      currentObject.category = item.substring(4);
    }

    if (item.startsWith("07]")) {
      currentObject.cueintime = item.substring(4);
    }
    if (item.startsWith("08]")) {
      currentObject.pitch = item.substring(4);
    }
    if (item.startsWith("09]")) {
      currentObject.album = item.substring(4);
    }
    if (item.startsWith("10]")) {
      currentObject.year = item.substring(4);
    }
    if (item.startsWith("11]")) {
      currentObject.bpm = item.substring(4);
    }
    if (item.startsWith("13]")) {
      currentObject.volume = item.substring(4);
    }
    if (item.startsWith("14]")) {
      currentObject.playcount = item.substring(4);
    }
    if (item.startsWith("15]")) {
      currentObject.lastplayed = item.substring(4);
    }
    if (item.startsWith("16]")) {
      currentObject.vocalist = item.substring(4);
    }
    if (item.startsWith("17]")) {
      currentObject.endingtype = item.substring(4);
    }
    if (item.startsWith("18]")) {
      currentObject.restrictplayenable = item.substring(4);
    }
    if (item.startsWith("19]")) {
      currentObject.startdate = item.substring(4);
    }
    if (item.startsWith("20]")) {
      currentObject.notes = item.substring(4);
    }
    if (item.startsWith("21]")) {
      currentObject.relatedartist = item.substring(4);
    }
    if (item.startsWith("22]")) {
      currentObject.composer = item.substring(4);
    }
    if (item.startsWith("23]")) {
      currentObject.lyricist = item.substring(4);
    }
    if (item.startsWith("24]")) {
      currentObject.publisher = item.substring(4);
    }
    if (item.startsWith("25]")) {
      currentObject.recordid = item.substring(4);
    }
    if (item.startsWith("26]")) {
      currentObject.highestchart = item.substring(4);
    }
    if (item.startsWith("27]")) {
      currentObject.popularity = item.substring(4);
    }
    if (item.startsWith("28]")) {
      currentObject.energymood = item.substring(4);
    }
    if (item.startsWith("29]")) {
      currentObject.stopdate = item.substring(4);
    }
    if (item.startsWith("30]")) {
      currentObject.restrictdayparts = item.substring(4);
    }
    if (item.startsWith("31]")) {
      currentObject.starttime = item.substring(4);
    }
    if (item.startsWith("32]")) {
      currentObject.stoptime = item.substring(4);
    }
    if (item.startsWith("44]")) {
      currentObject.bitrate = item.substring(4);
    }
    if (item.startsWith("45]")) {
      currentObject.uniqueid = item.substring(4);
    }
    if (item.startsWith("46]")) {
      currentObject.colorOn = item.substring(4);
    }
    if (item.startsWith("47]")) {
      currentObject.color = item.substring(4);
    }
    if (item.startsWith("48]")) {
      currentObject.fileid = item.substring(4);
    }
    if (item.startsWith("49]")) {
      currentObject.path = item.substring(4);
    }
    if (item.startsWith("52]")) {
      currentObject.fadeoverride = item.substring(4);
    }
  }
  if (Object.keys(currentObject).length > 0) {
    result.push(currentObject);
  }

  return result;
}

function downloadTsv(data) {
  const blob = new Blob([data], { type: "text/tsv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "MegaSeg Library Export.tsv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
