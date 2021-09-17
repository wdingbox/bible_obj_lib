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

const Audio_Bible_File_Organ = {
    "OT": {
        "FiveMoses": {
            "Gen": ['Genesis', 'genesis', '创世纪',],
            "Exo": ['Exodus', 'exodus', '出埃及记',],
            "Lev": ['Leviticus', 'leviticus', '利未记',],
            "Num": ['Numbers', 'numbers', '民数记',],
            "Deu": ['Deuteronomy', 'deuteronomy', '申命记',],
        },
        "HistoryA": {
            "Jos": ['Joshua', 'joshua', '约书亚记',],
            "Jug": ['Judges', 'judges', '士师记',],
            "Rut": ['Ruth', 'ruth', '路得记',],
            "1Sa": ['1_Samuel', '1-samuel', '撒母耳记上',],
            "2Sa": ['2_Samuel', '2-samuel', '撒母耳记下',],
            "1Ki": ['1_Kings', '1-kings', '列王记上',],
            "2Ki": ['2_Kings', '2-kings', '列王记下',],
        },
        "HistoryB": {
            "1Ch": ['1_Chronicles', '1-chronicles', '历代志上',],
            "2Ch": ['2_Chronicles', '2-chronicles', '历代志下',],
            "Ezr": ['Ezra', 'ezra', '以斯拉记',],
            "Neh": ['Nehemiah', 'nehemiah', '尼希米记',],
            "Est": ['Esther', 'esther', '以斯帖记',],
        },
        "Literature": {
            "Job": ['Job', 'job', '约伯记',],
            "Psm": ['Psalm', 'psalm', '诗篇',],
            "Pro": ['Proverbs', 'proverbs', '箴言',],
            "Ecc": ['Ecclesiastes', 'ecclesiastes', '传道书',],
            "Son": ['SongOfSolomon', 'song-of-solomon', '雅歌',],
        },
        "ProphacyMajor": {
            "Isa": ['Isaiah', 'isaiah', '以赛亚书',],
            "Jer": ['Jeremiah', 'jeremiah', '耶利米书',],
            "Lam": ['Lamentations', 'lamentations', '耶利米哀歌',],
            "Eze": ['Ezekiel', 'ezekiel', '以西结书',],
            "Dan": ['Daniel', 'daniel', '但以理书',],
        },
        "ProphacyMinor": {
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
        }
    },
    "NT": {
        "Gospels": {
            "Mat": ['Matthew', 'matthew', '马太福音',],
            "Mak": ['Mark', 'mark', '马可福音',],
            "Luk": ['Luke', 'luke', '路加福音',],
            "Jhn": ['John', 'john', '约翰福音',],
        },
        "Apostles": {
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
        }
    }
}



var Audio_Bible_Struct = {
    findAudioUrlFolderPath: function (BkCode, Chp) {
        var Chp3 = Chp.padStart(3, "0")
        //https://wdingsoft.github.io/aubiZondervan_OT_FiveMoses/audio/01_Genesis_001.m4a
        const surl = "https://wdingsoft.github.io"
        const sheader = "aubiZondervan"
        var BkIdx = 0
        for (let Test in Audio_Bible_File_Organ) {
            for (let FolderName in Audio_Bible_File_Organ[Test]) {
                for (let Bkey in Audio_Bible_File_Organ[Test][FolderName]) {
                    BkIdx++
                    var audioName = BkID_to_AudioName[Bkey][0]
                    if (Bkey === BkCode) {
                        var BkIdx2 = BkIdx.toString().padStart(2, "0")
                        var folderpath = `${surl}/${sheader}_${Test}_${FolderName}/audio/${BkIdx2}_${audioName}_`
                        console.log("folderpath=", folderpath)
                        return folderpath + Chp3 + ".m4a"
                    }
                }
            }
        }

    }
}

