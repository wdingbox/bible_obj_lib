var dbgout_inc_BiblePinyin=""; 
function _inc_BiblePinyin(sdir){ 
  
    for( var i=0; i<=214; i++) {
        var sname = ""+i;
        while(sname.length<3){
             sname = "0"  + sname;
        }
        var jsfile = sdir + "PinyinBible_"+sname+".js";
        
        var s="<";
        s = s+ "script language=\'javascript\' src=\'" + jsfile + "\'";
        s = s + "\'>";
        s = s + "</";
        s = s + "script";
        s = s + ">";
        
        document.write(s);
        dbgout_inc_BiblePinyin+=jsfile+"<br>";
    }
}

function _inc_BiblePinyin_test(sdir){ 
    var dbgout="";   
    for( var i=0; i<=23; i++) {
        var sname = ""+i;
        while(sname.length<3){
             sname = "0"  + sname;
        }
        var jsfile = sdir + "PinyinBible_"+sname+".js";
        
        var s="<";
        s = s+ "script language=\'javascript\' src=\'" + jsfile + "\'";
        s = s + "\'>";
        s = s + "</";
        s = s + "script";
        s = s + ">";
        
        document.write(s);
        dbgout+=s+"<br>";
    }
    return dbgout; 
}