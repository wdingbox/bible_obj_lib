
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
                            vrslen += biObj[Bk][Chp][Vrs].length
                            var relativeLen = biObj[Bk][Chp][Vrs].length / vrslenTot
                            biObj[Bk][Chp][Vrs] = [relativePos.toFixed(2), relativeLen.toFixed(2)]
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





cal_relativePosi("NIV");


