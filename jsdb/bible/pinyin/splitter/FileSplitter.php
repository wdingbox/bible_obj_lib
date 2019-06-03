
<?php
set_time_limit(9999999);

//header("Content-Type: text/html; charset=UTF-8"); 



class FileSplitter{
	private $fidex=-1;
    private $ftext="";
	public $DirSmaller="";
	public $LastLine="//TotalLines=";
	private function get_lines_of_all_in_one_1($HugeFileName){    
		$lines=file($HugeFileName);
		echo "<hr/>all in one total lines=" . count($lines) . "<br><hr/>";
		return $lines;
	}
	private function small_save(){    
				$this->fidex+=1;        
				$fname = sprintf($this->DirSmaller."PinyinBible_%03d.js", $this->fidex);
				file_put_contents($fname, "\xEF\xBB\xBF".$this->ftext);
				$this->ftext="";    
				echo "$fname<br/>";
	}	
	public function start($HugeFileName, $spilttedSize=20000){
		$allin1= $this->get_lines_of_all_in_one_1($HugeFileName);
		$count=0;
		foreach($allin1 as $i=>$line){
			$ln = trim($line);
			if(strlen($ln)===0) continue;
			$count++;
			$this->ftext .= $ln . "\r\n";			
			if(strlen($this->ftext) > $spilttedSize ) {//20k
				$this->small_save();
			}
		}		
		$this->ftext .= "\r\n".$this->LastLine ." $count.\r\n";
		$this->small_save();
	}
}//class


?>
</body></html>