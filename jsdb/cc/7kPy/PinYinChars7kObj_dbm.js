function PinYinChars7kObj_dbm() {
    this.m_PinYinChars7kObj = PinYinChars7kObj
}
PinYinChars7kObj_dbm.prototype.stats = function () {
    var uniqObj = {}, totChars = 0
    for (let [py, str] of Object.entries(this.m_PinYinChars7kObj)) {
        totChars += str.length
        for (i = 0; i < str.length; i++) {
            uniqObj[str[i]] = 1
        }
    }
    return {uniqTot: Object.keys(uniqObj).length, totChars:totChars, uniqObj:uniqObj}
}