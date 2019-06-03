<!DOCTYPE html>
<HTML>
<HEAD>
<META http-equiv="Content-Type" content="text/html; charset=gb2312">
</HEAD>
<body>
<?php
set_time_limit(9999999);
echo "split chunk file into smaller files<br>";
//header("Content-Type: text/html; charset=UTF-8"); 


function get_lines_of_all_in_one_1(){    
    $lines=file("./pinyin_allin1_improved.js");
    echo "<hr/>all in one total lines=" . count($lines) . "<br><hr/>";
    return $lines;
}
//get_lines_of_all_in_one();
//get_lines_of_all_in_one_1();

function split_one_file_into_small(){
    $allin1= get_lines_of_all_in_one_1();
    
    $fidex=-1;
    $ftext="";
    foreach($allin1 as $i=>$line){
        $ln = trim($line);
        if(strlen($ln)===0) continue;
        $ftext .= $ln . "\r\n";
        if(strlen($ftext)>20000) {
            $fidex+=1;        
            $fname = sprintf("PinyinBible_%03d.js", $fidex);
            file_put_contents($fname, $ftext);
            $ftext="";    
            echo "$fname<br/>";
        }
    }
    
    
    $fidex+=1;        
            $fname = sprintf("PinyinBible_%03d.js", $fidex);
            file_put_contents($fname, $ftext);
            $ftext="";    
            echo "$fname<br/>";
}
split_one_file_into_small();



?>
</body></html>