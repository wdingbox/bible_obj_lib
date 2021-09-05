

const fs = require('fs');
const path = require('path');


/*
Catholic Bible


Download data sets for deuterocanonical / apocryphal books at github.com/scrollmapper/bible_databases_deuterocanonical
Catholic Public Domain Version (CPDV) in USFM/PSFM format, in JSON format (sacredbible.org)
Douay Rheims Challoner 1750 Revision in USFM/PSFM format


https://bitbucket.org/sbruno/cpdv-json-encoder/src/master/CPDV-JSON/EntireBible-CPDV.json

****/



var BSNP_STD_BookCode = {
    "Gen": ['Genesis', 'genesis', '创世纪',],
    "Exo": ['Exodus', 'exodus', '出埃及记',],
    "Lev": ['Leviticus', 'leviticus', '利未记',],
    "Num": ['Numbers', 'numbers', '民数记',],
    "Deu": ['Deuteronomy', 'deuteronomy', '申命记',],
    "Jos": ['Joshua', 'joshua', '约书亚记',],
    "Jug": ['Judges', 'judges', '士师记',],
    "Rut": ['Ruth', 'ruth', '路得记',],
    "1Sa": ['1_Samuel', '1-samuel', '撒母耳记上',],
    "2Sa": ['2_Samuel', '2-samuel', '撒母耳记下',],
    "1Ki": ['1_Kings', '1-kings', '列王记上',],
    "2Ki": ['2_Kings', '2-kings', '列王记下',],
    "1Ch": ['1_Chronicles', '1-chronicles', '历代志上',],
    "2Ch": ['2_Chronicles', '2-chronicles', '历代志下',],
    "Ezr": ['Ezra', 'ezra', '以斯拉记',],
    "Neh": ['Nehemiah', 'nehemiah', '尼希米记',],
    "Est": ['Esther', 'esther', '以斯帖记',],
    "Job": ['Job', 'job', '约伯记',],
    "Psm": ['Psalm', 'psalms', '诗篇',],
    "Pro": ['Proverbs', 'proverbs', '箴言',],
    "Ecc": ['Ecclesiastes', 'ecclesiastes', '传道书',],
    "Son": ['SongOfSolomon', 'song2', '雅歌',],
    "Isa": ['Isaiah', 'isaiah', '以赛亚书',],
    "Jer": ['Jeremiah', 'jeremiah', '耶利米书',],
    "Lam": ['Lamentations', 'lamentations', '耶利米哀歌',],
    "Eze": ['Ezekiel', 'ezekiel', '以西结书',],
    "Dan": ['Daniel', 'daniel', '但以理书',],
    "Hos": ['Hosea', 'hosea', '何西阿书',],
    "Joe": ['Joel', 'joel', '约珥书',],
    "Amo": ['Amos', 'amos', '阿摩司书',],
    "Oba": ['Obadiah', 'obadiah', '俄巴底亚书',],
    "Jon": ['Jonah', 'jonah', '约拿书',],
    "Mic": ['Micah', 'micah', '弥迦书',],
    "Nah": ['Nahum', 'nahum', '那鸿书',],
    "Hab": ['Habakkuk', 'habakkuk', '哈巴谷书',],
    "Zep": ['Zephaniah', 'zephaniah', '西番雅书',],
    "Hag": ['Haggai', 'haggai', '哈该书',],
    "Zec": ['Zechariah', 'zechariah', '撒迦利亚',],
    "Mal": ['Malachi', 'malachi', '玛拉基书',],
    "Mat": ['Matthew', 'matthew', '马太福音',],
    "Mak": ['Mark', 'mark', '马可福音',],
    "Luk": ['Luke', 'luke', '路加福音',],
    "Jhn": ['John', 'john', '约翰福音',],
    "Act": ['Acts', 'acts', '使徒行传',],
    "Rom": ['Romans', 'romans', '罗马书',],
    "1Co": ['1_Corinthians', '1-corinthians', '哥林多前书',],
    "2Co": ['2_Corinthians', '2-corinthians', '哥林多后书',],
    "Gal": ['Galatians', 'galatians', '加拉太书',],
    "Eph": ['Ephesians', 'ephesians', '以弗所书',],
    "Phl": ['Philippians', 'philippians', '腓立比书',],
    "Col": ['Colossians', 'colossians', '歌罗西书',],
    "1Ts": ['1_Thessalonians', '1-thessalonians', '帖撒罗尼迦前书',],
    "2Ts": ['2_Thessalonians', '2-thessalonians', '帖撒罗尼迦后书',],
    "1Ti": ['1_Timothy', '1-timothy', '提摩太前书',],
    "2Ti": ['2_Timothy', '2-timothy', '提摩太后书',],
    "Tit": ['Titus', 'titus', '提多书',],
    "Phm": ['Philemon', 'philemon', '腓利门书',],
    "Heb": ['Hebrews', 'hebrews', '希伯来书',],
    "Jas": ['James', 'james', '雅各书',],
    "1Pe": ['1_Peter', '1-peter', '彼得前书',],
    "2Pe": ['2_Peter', '2-peter', '彼得后书',],
    "1Jn": ['1_John', '1-john', '约翰一书',],
    "2Jn": ['2_John', '2-john', '约翰二书',],
    "3Jn": ['3_John', '3-john', '约翰三书',],
    "Jud": ['Jude', 'jude', '犹大书',],
    "Rev": ['Revelation', 'revelation', '启示录',],
};
var BSNP_STD_BookCodeAry = Object.keys(BSNP_STD_BookCode)


//require("../../../jsdb/jsBibleStruct/All_Max_struct_json")
var TmpMaxTxt = fs.readFileSync('../../../jsdb/jsBibleStruct/All_Max_struct_json.js', 'utf-8')
var indx = TmpMaxTxt.indexOf("=")
TmpMaxTxt = TmpMaxTxt.substr(indx + 1)
var TmpObj = JSON.parse(TmpMaxTxt)


var txt = fs.readFileSync('../EntireBible_cpdv.json', 'utf-8')
var CpObj = JSON.parse(txt)
var CpObj_KeyAr = Object.keys(CpObj)


//Catholic Public Domain Version 
var Catholic2Bsnp = {}, out_CpdvObj = {}
for (var i = 0; i < CpObj_KeyAr.length; i++) {
    var catholicfubook = CpObj_KeyAr[i]
    var catholicbkname = catholicfubook.trim().toLowerCase()
    var bsnpbkCode = ""
    Catholic2Bsnp[catholicbkname] = "------------";//CpObj[catholicfubook]
    for (let bsnpbkid in BSNP_STD_BookCode) {
        var snam = BSNP_STD_BookCode[bsnpbkid][1].toLowerCase()
        if (catholicbkname === snam) {
            Catholic2Bsnp[catholicbkname] = bsnpbkid
            out_CpdvObj[bsnpbkid] = CpObj[catholicfubook]
            //delete CpObj[catholicbkname]
        }else{
            //out_CpdvObj[catholicfubook] = CpObj[catholicfubook]
        }
    }

}






console.log("total", Catholic2Bsnp)
console.log(CpObj_KeyAr)
console.log(BSNP_STD_BookCode)

var str = JSON.stringify(out_CpdvObj, null, 4)
str = "var CPDV = \n" + str
fs.writeFileSync("out_CPDV.json.js", str, "utf8")

