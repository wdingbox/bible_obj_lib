// Version 2021-10-19
//

const fs = require('fs');
var path = require('path');


var Uti = {
    proc_argv2obj: function () {
        var argv = process.argv.slice(2);
        var obj = {};
        argv.forEach(function (str) {
            var pos = str.indexOf(":");
            if (pos > 0) {
                var key = str.substr(0, pos);
                var val = str.substr(1 + pos);
                obj[key] = val;
            }
            else {
                console.log("err:" + str);
            }
        });
        return { obj: obj, argv: argv };
    }
}

var DirFileUti = {
    readBibleObjFile: function (fname) {
        var txt = fs.readFileSync(fname, "utf8")
        var pos = 1 + txt.indexOf("=");
        var jstxt = txt.substring(pos)
        var jsdat = JSON.parse(jstxt)
        console.log(jsdat)
        return jsdat;
    },

    calcTotWords: function (obj) {
        var BkTotWords = {}
        for (bk in obj) {
            console.log(bk)
            BkTotWords[bk] = 0
            for (chp in obj[bk]) {
                console.log("chp:", chp)
                for (vrs in obj[bk][chp]) {
                    var ct = obj[bk][chp][vrs].split(" ").length
                    console.log("..ver:", vrs, ct, obj[bk][chp][vrs])
                    obj[bk][chp][vrs] = ct
                    BkTotWords[bk] += ct
                }
            }
        }
        return BkTotWords
    },
    output: function (obj, fname) {
        var str = JSON.stringify(obj, "", 4)
        fs.writeFileSync(fname, `var TotWords=${str}`, "utf8")
    },
    run: function (dir, fname) {
        var obj = this.readBibleObjFile(dir + fname)
        var ob2 = this.calcTotWords(obj)
        this.output(ob2, `../${fname}`)
    }
}




DirFileUti.run("../../../jsBibleObj/", "H_G.json.js");


console.log("v2022")

