Simplified_Traditional_2kAry_dbm = function () {
    this.m_Simplified_Traditional_2kAry = Simplified_Traditional_2kAry
}
Simplified_Traditional_2kAry_dbm.prototype.stats = function () {
    var uniqObj = {}, simTraObj = {}
    for (var i = 0; i < this.m_Simplified_Traditional_2kAry.length; i++) {
        simTraObj[this.m_Simplified_Traditional_2kAry[i][0]] = this.m_Simplified_Traditional_2kAry[i].slice(1)
        for (var k = 0; k < this.m_Simplified_Traditional_2kAry[i].length; k++) {
            uniqObj[this.m_Simplified_Traditional_2kAry[i][k]] = 1
        }
    }
    return { uniqObj: uniqObj, simTraObj: simTraObj }
}