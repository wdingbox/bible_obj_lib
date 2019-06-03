<!DOCTYPE html>
<HTML>
<HEAD>
<META http-equiv="Content-Type" content="text/html; charset=gb2312">
</HEAD>
<body>
<?php
include("FileSplitter.php");

$fs = new FileSplitter();
$fs->DirSmaller="./2015/";

$fs->start("2015.js",25000);

//http://localhost/tool/ham12/jsdb/bible/pinyin/file_splitter_2015.php
?>
</body></html>