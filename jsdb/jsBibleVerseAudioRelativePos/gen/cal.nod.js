
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
                    var vrslen = 0, relativePos = 0;
                    for (let Vrs in biObj[Bk][Chp]) {
                        if (biObj[Bk][Chp].hasOwnProperty(Vrs)) {
                            relativePos = vrslen / vrslenTot
                            console.log(Bk, Chp, Vrs, relativePos, biObj[Bk][Chp][Vrs]);
                            vrslen += biObj[Bk][Chp][Vrs].length
                            biObj[Bk][Chp][Vrs] = relativePos
                        }
                    }
                }
            }
        }
    }

    var out = `var ${bname}=\n` + JSON.stringify(biObj, null, 4)
    fs.writeFileSync(`../${bname}.json.js`, out, "utf8");

    return
}





cal_relativePosi("NIV");


