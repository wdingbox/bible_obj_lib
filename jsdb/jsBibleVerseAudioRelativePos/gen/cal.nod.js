
//var Uti = require("../Uti.Module").Uti
const fs = require('fs');
var path = require('path');


//require("../../jsBibleObj/NIV.json")
function cal_relativePosi(bname) {

    var fname = `../../jsBibleObj/${bname}.json.js`;
    var txt = fs.readFileSync(fname, "utf8")
    var eqp = txt.indexOf("=")
    var txt = txt.substr(1 + eqp)
    var biObj = JSON.parse(txt)

    for (let Bk in biObj) {
        if (biObj.hasOwnProperty(Bk)) {
            //console.log(Bk, biObj[Bk]);
            for (let Chp in biObj[Bk]) {
                if (biObj[Bk].hasOwnProperty(Chp)) {
                    //console.log(Bk, biObj[Bk][Chp]);

                    var chapterStarter = BkID_to_AudioName[Bk][1] + Chp
                    //cal tot len;
                    var vrslenTot = 0;
                    for (let Vrs in biObj[Bk][Chp]) {
                        if (biObj[Bk][Chp].hasOwnProperty(Vrs)) {
                            vrslenTot += biObj[Bk][Chp][Vrs].length
                            console.log(Bk, Chp, Vrs, vrslenTot, biObj[Bk][Chp][Vrs]);
                        }
                    }

                    //cal relative posi for each verse.
                    var vrslen = 0;
                    for (let Vrs in biObj[Bk][Chp]) {
                        if (biObj[Bk][Chp].hasOwnProperty(Vrs)) {
                            var relativePos = vrslen / vrslenTot
                            console.log(Bk, Chp, Vrs, relativePos, biObj[Bk][Chp][Vrs]);
                            var vtx = biObj[Bk][Chp][Vrs]
                            if (0 === vrslen) vtx += chapterStarter;
                            vrslen += vtx.length;
                            var relativeLen = vtx.length / vrslenTot
                            biObj[Bk][Chp][Vrs] = [relativePos.toFixed(4), relativeLen.toFixed(4)]
                        }
                    }
                }
            }
        }
    }

    var out = `var VrsAudioRelativePosLen_${bname}=\n` + JSON.stringify(biObj, null, 4)
    fs.writeFileSync(`../VrsAudioRelativePosLen_${bname}.json.js`, out, "utf8");

    return
}



const BkID_to_AudioName = {
    "Gen": ['Genesis', 'genesis', '创世纪',],
    "Exo": ['Exodus', 'exodus', '出埃及记',],
    "Lev": ['Leviticus', 'leviticus', '利未记',],
    "Num": ['Numbers', 'numbers', '民数记',],
    "Deu": ['Deuteronomy', 'deuteronomy', '申命记',],
    "Jos": ['Joshua', 'joshua', '约书亚记',],
    "Jug": ['Judges', 'judges', '士师记',],
    "Rut": ['Ruth', 'ruth', '路得记',],
    "1Sa": ['Samuel1', '1-samuel', '撒母耳记上',],
    "2Sa": ['Samuel2', '2-samuel', '撒母耳记下',],
    "1Ki": ['Kings1', '1-kings', '列王记上',],
    "2Ki": ['Kings2', '2-kings', '列王记下',],
    "1Ch": ['Chronicles1', '1-chronicles', '历代志上',],
    "2Ch": ['Chronicles2', '2-chronicles', '历代志下',],
    "Ezr": ['Ezra', 'ezra', '以斯拉记',],
    "Neh": ['Nehemiah', 'nehemiah', '尼希米记',],
    "Est": ['Esther', 'esther', '以斯帖记',],
    "Job": ['Job', 'job', '约伯记',],
    "Psm": ['Psalm', 'psalm', '诗篇',],
    "Pro": ['Proverbs', 'proverbs', '箴言',],
    "Ecc": ['Ecclesiastes', 'ecclesiastes', '传道书',],
    "Son": ['SongOfSolomon', 'song-of-solomon', '雅歌',],
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
    "1Co": ['Corinthians1', '1-corinthians', '哥林多前书',],
    "2Co": ['Corinthians2', '2-corinthians', '哥林多后书',],
    "Gal": ['Galatians', 'galatians', '加拉太书',],
    "Eph": ['Ephesians', 'ephesians', '以弗所书',],
    "Phl": ['Philippians', 'philippians', '腓立比书',],
    "Col": ['Colossians', 'colossians', '歌罗西书',],
    "1Ts": ['Thessalonians1', '1-thessalonians', '帖撒罗尼迦前书',],
    "2Ts": ['Thessalonians2', '2-thessalonians', '帖撒罗尼迦后书',],
    "1Ti": ['Timothy1', '1-timothy', '提摩太前书',],
    "2Ti": ['Timothy2', '2-timothy', '提摩太后书',],
    "Tit": ['Titus', 'titus', '提多书',],
    "Phm": ['Philemon', 'philemon', '腓利门书',],
    "Heb": ['Hebrews', 'hebrews', '希伯来书',],
    "Jas": ['James', 'james', '雅各书',],
    "1Pe": ['Peter1', '1-peter', '彼得前书',],
    "2Pe": ['Peter2', '2-peter', '彼得后书',],
    "1Jn": ['John1', '1-john', '约翰一书',],
    "2Jn": ['John2', '2-john', '约翰二书',],
    "3Jn": ['John3', '3-john', '约翰三书',],
    "Jud": ['Jude', 'jude', '犹大书',],
    "Rev": ['Revelation', 'revelation', '启示录',],
};


cal_relativePosi("NIV");


