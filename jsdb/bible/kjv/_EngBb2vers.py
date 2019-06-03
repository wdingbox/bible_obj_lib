#! /usr/bin/env python
# 
# In order to maintain all catalog api functions all the time, this clitester tool is helpful.
# 
#
#
# wei.ding@emerson.com
sREVISON="rev:12/08/2011"


import pdb
import os, os.path
import sys, string
#import filecmp #Appliance doesn't support this. 
import time
from datetime import datetime , timedelta


import re


import socket 




############################################################
#
############################################################
class clitester:

    def main(self) :
        cnb = BibleReader()
        cnb.bb2_cp2_bbc()

        
  
        #//return
        
        brBBe = BibleReader()
        brBBe.fullpathFileScr="bbe.txt"
        brBBe.readFileScript()
        
        brKjv = BibleReader()
        brKjv.fullpathFileScr="kjv.txt"
        brKjv.readFileScript()
        
        
        #######/////////////////////////////
        kks=brKjv.keysList;
        kbs=brBBe.keysList;
        
        if len(kks) !=  len(kbs):
            print "******************************* "
            
        i=0
        while i < len(kks):
            if kks[i] != kbs[i] :
                print "KJM: ", kks[i],"\nBBE: " , kbs[i]
            i+=1
            
        #######/////////////////////////////
        kks=cnb.keysList;
        kbs=brBBe.keysList;
        
        print "bbiLeng=%d"%len(kks)
        if len(kks) !=  len(kbs):
            print "******************************* "
            
        i=0
        while i < len(kks):
            if kks[i] != kbs[i] :
                print "bbi: ", kks[i],"\nBBE: " , kbs[i]
                print "bbi: ", len(kks[i]),"\nBBE: " , len(kbs[i])
                break
            i += 1

        return
        
        
        
    
#Validation check if scrip match dat. If not, dat file need updat.
class BibleReader:
    fullpathFileScr="bbe.txt"
    fullpathFileDat=""
    keysList=[]
    def readFileScript(self):
        self.keysList=[]
        pf=None
        i=0;
        fidx=0
        fsize=0
        for line in open(self.fullpathFileScr,"r"):
            line = line.strip()
            
            if len(line)==0 : continue
            if line[0]=="=" : continue;
            if 'Holy ' == line[0:5] : continue
            
            pos1 = line.find(' ',1);
            pos2 = line.find(' ',pos1+1);
            if self.fullpathFileScr.find("kjv.txt") >=0 :
                pos2=pos1
            
            key=line[0:pos2]
            key=key.replace(" ",'')
            key=key.replace(":",'_')
            
            key=key.replace("Jude","Jud")
            key=key.replace("1Pet","1Pe")#
            key=key.replace("2Pet","2Pe")#
            key=key.replace("Jude","Jud")#
            key=key.replace("Phmn","Phm")#
            key=key.replace("Titus","Tit")#
            key=key.replace("1Tim", "1Ti")#
            key=key.replace("2Tim", "2Ti")#
            key=key.replace("1Th","1Ts")#
            key=key.replace("2Th","2Ts")#
            key=key.replace("Phi","Phl")#
            key=key.replace("1Cor","1Co")#
            key=key.replace("2Cor","2Co")#
               
            key=key.replace("Acts","Act")#
            key=key.replace("John","Jhn")#
            key=key.replace("Luke","Luk")#
            key=key.replace("Mark","Mak")#
            
            key=key.replace("Nahum","Nah")#
            key=key.replace("Jonah","Jon")#
            key=key.replace("Obad", "Oba")#
            key=key.replace("Amos", "Amo")#
            key=key.replace("SSol","Son")#
            key=key.replace("Eccl","Ecc")#
            key=key.replace("Prv","Pro")#
            key=key.replace("Joel","Joe") #
            
            key=key.replace("Psa","Psm")#
            key=key.replace("Ezra","Ezr")#
            key=key.replace("1Chr","1Ch")#
            key=key.replace("2Chr","2Ch")#
            key=key.replace("1Sm","1Sa")#
            key=key.replace("2Sm","2Sa")#
            key=key.replace("Ruth","Rut")#
            key=key.replace("Jdgs","Jug")#
            key=key.replace("Josh","Jos")#
            i=0
            while i<100 :
                key=key.replace("Ge%d"%i,"Gen%d"%i)
                i+=1
            key=key.replace("2Cor","2Co")
            key=key.replace("2Cor","2Co")
            key=key.replace("2Cor","2Co")
            key=key.replace("2Cor","2Co")
            key=key.replace("2Cor","2Co")
            key=key.replace("2Cor","2Co")
            key=key.replace("2Cor","2Co")
            key=key.replace("2Cor","2Co")
            key=key.replace("2Cor","2Co")
            key=key.replace("2Cor","2Co")
            
            
            self.keysList.append(key)
            print "key=", key,",pos1=",pos1,",pos2=",pos1
            
            line = line[pos2:].strip()
            #print key, pos1 , pos2
            #print pos
            if pos1>10: 
                print "***********",pos1
                break
            jsline="K._%s=\"%s\";\n"%(key,line)
            
            if None == pf:
                fname="_%03d.js" % fidx
                fname = self.fullpathFileScr.replace(".txt",fname)
                pf = open(fname,"w")
                fidx+=1
                fsize = 0;
            pf.write(jsline)
            fsize += len( jsline );
            
            if fsize>25000 :
                pf.close()
                pf=None
            
            i+=1;
            #print jsline

        return self.keysList
        
        
    def ChineseBibles(self):
        Dir="../old"
        dirList = os.listdir( Dir )
        dirList.sort()     
        idx=0
        for fname in dirList:      
            idx+=1
            fname2=fname.replace("B_","cnb_")
            oldfile="%s/%s"%(Dir,fname)
            newfile="../cnb/%s"%(fname2)
            cmd = "cp %s %s "%(oldfile,newfile)
            #print cmd
            self.ChineseBibles_Old2New(oldfile, newfile)
            #os.system(cmd)
            
    def bb2_cp2_bbc(self):
        DirOld="../bb2"
        dirList = os.listdir( DirOld )
        dirList.sort()     
        idx=0
        self.keysList=[]
        for fname in dirList:      
            idx+=1
            fname2=fname.replace("B_","bbi_")
            oldfile="%s/%s"%(DirOld,fname)
            newfile="../bbi/%s"%(fname2)
            cmd = "cp %s %s "%(oldfile, newfile)
            #print cmd
            #self.ChineseBibles_Old2New(oldfile, newfile)
            os.system(cmd)
            self.bbc_keyNme_check(oldfile)
            
    def bbc_keyNme_check(self,oldfile):
        Dir="../bb2"    
        i=0;
        fidx=0
        fsize=0

        for line in open(oldfile,"r"):   
            line = line.strip()
            pos1 = line.find('.',0);
            if pos1<0: continue
            pos2 = line.find('=',pos1+1);
            if pos2<0: continue
            key=line[pos1+1:pos2]  
            key=key.strip()
            self.keysList.append(key)
            
            print "+bbi " + key , ",",len(key), ",pos1=",pos1,",pos2=",pos2
        return self.keysList
            
            
    def ChineseBibles_Old2New(self,oldfile, newfile):
        Dir="../old"
        dirList = os.listdir( Dir )
        dirList.sort()     
        idx=0
        self.keysList=[]
        pf=None
        i=0;
        fidx=0
        fsize=0
        fp = open(newfile,"wb")
        for line in open(oldfile,"rb"):    
            pos1 = line.find('\"',1);
            pos2 = line.find(' ',pos1+1);
            pos3 = line.find(' ',pos2+1);
            
            key=line[pos1+1:pos3]
            key=key.replace(" ",'')
            key=key.replace(":",'_')    
                     
            #print key
            #line=line[pos3:]
            #print line
            #fp.write("N."+key+"=\""+line)
            
#sc = convert2compariable()
#sc.subValgrind("./tmp/appliance-all-info-get.valgrind")
#sys.exit(0)
#c2f = Compare2files()
#c2f.compare("./tmp/appliance-all-info-get.valgrind","./tmp/appliance-all-info-get.valgrind")
#sys.exit(0)



if "__main__" == __name__ :   
    t = clitester()
    t.main()
    
    
    
    
    
    
    
    
    
    
    
    
    
    