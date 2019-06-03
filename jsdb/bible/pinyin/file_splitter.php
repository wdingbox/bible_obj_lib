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

class FolderFiles{
    public $dir = "./language/";
    function FolderFiles($dir){
        $this->dir=$dir;
    }
    public function run(){
        $dh  = opendir($this->dir);
        while (false !== ($filename = readdir($dh))) {
            if("."===($filename)||".."===$filename) continue;
            $pos = strpos($filename, "bbi_");
            if( false === $pos ) continue;
            $files[] = $this->dir."/".$filename;
        }
        sort($files);
        foreach($files as $i=>$f){          
            //print $f."<br>";
        }
        return $files;
    }
}

function show_tiny_files(){
    $ff = new FolderFiles("../bbc/");
    $ffs = $ff->run();
    foreach($ffs as $i=> $finame){
        $fn = basename($finame);
        echo "JsFileAry[$i]=\"".  $fn. "\";<br>";
    }
    echo "<hr/>";
}
show_tiny_files();

function get_lines_of_all_tiny_files(){
    $lines=[];
    $ff = new FolderFiles("../bbc/");
    $ffs = $ff->run();
    foreach($ffs as $i=> $finame){
               
        $lines1 = file($finame);
        $lines = array_merge($lines, $lines1);
        
        echo "read [$i]=\"".  $finame. "\";  lines=" . count($lines1) . "<br>"; 
    }
    echo "<hr/>";
    return $lines;
}
$totlines = get_lines_of_all_tiny_files();
echo "total lines=". count($totlines) . "<br/><hr/>";
    foreach($totlines as $i=>$line){
        $ln = trim(utf8_encode($line));
        if(strlen($ln)===0) continue;
        $arr=explode($ln, "="); 
        $pos=strpos($ln,"=");
        echo $arr[0]."=>$pos=>$line<br/>";
    }
exit(0);

function get_lines_of_all_in_one(){
    
    $pf=fopen("./pinyin_allin1.js", 'r');

    $smalfileData="";
    $idx=0;
    while(!feof($pf)){
        $ln = fgets($pf);
        $ln = trim($ln);
        if(strlen($ln)===0) continue;
        
        $idx += 1;
        $smalfileData .= $ln;
        echo $idx. "--> ". $ln."<br>";
    }
    echo "<hr/>total lines=" . $idx . "<br><hr/>";
}
function get_lines_of_all_in_one_1(){    
    $lines=file("./pinyin_allin1.js");
    echo "<hr/>all in one total lines=" . count($lines) . "<br><hr/>";
    return $lines;
}
//get_lines_of_all_in_one();
get_lines_of_all_in_one_1();

function compare_items(){
    $allin1= get_lines_of_all_in_one_1();
    
    $addin = get_lines_of_all_tiny_files();
    foreach($addin as $i=>$line){
        $ln = trim($line);
        if(strlen($ln)===0) continue;
        $arr=explode($ln, "=");        
    }
}

function lines2arr($lines){
    $ret=[];
    foreach($lines as $i=>$line){
        $ln = trim($line);
        if(strlen($ln)===0) continue;
        echo "$i]]]$lines<br/>";
        continue;
        $arr = explode( "=",$ln);
        if(count($arr) !=2 ) continue;
        preg_match("/[A-Z].(\w+)/", $arr[0], $match) ;        
        
        $val = trim($arr[1], "\";");
        if( 2===count($match) ){
            //print_r( $match );
            //print_r( $arr );
            //echo $val ;
        }
        else{
            echo "<font color='red'>";
            print_r( $match );
            echo "[$i]$line================</font>";
        }
        
        
        $ret[ $match[1] ]=$val;
        //echo "<hr/>";
              
    }    
    return $ret;
}


//echo "<hr/>arr<hr/>";
//$allin1 = get_lines_of_all_in_one_1();
//$retArr = lines2arr( $allin1 );
//echo "<hr/>";
//foreach($retArr as $key=>$val){
    //echo "[$key]=$val<br>";
//}

echo "<hr/>";

$allin1 = get_lines_of_all_tiny_files();
$retArr = lines2arr( $allin1 );
echo "<hr/>";
foreach($retArr as $key=>$val){
    echo "[$key]=$val<br>";
}





?>
</body></html>