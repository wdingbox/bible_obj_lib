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
        
    
#Validation check if scrip match dat. If not, dat file need updat.
class BibleReader:
    fullpathFileScr="bbe.txt"
    bbi_inc_js="_inc.js"
    keysList=[]
    
    keyindex=0
    def bbi_gen_js(self):
        DirOld="./"
        dirList = os.listdir( DirOld )
        dirList.sort()     
        idx=0
        self.keysList=[]
        pf=open(self.bbi_inc_js,"w")
        for fname in dirList:     
            if self.bbi_inc_js == fname: continue
            if fname[-3:]!=".js" : continue
            
            self.bbc_keyNme_check(fname)
            pf.write("<script language=\"javascript\" src=\"%s\"></script>\n" % fname)
            
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
            
            print self.keyindex,":", key   #, ",",len(key), ",pos1=",pos1,",pos2=",pos2
            self.keyindex+=1
        return self.keysList
        
        


if "__main__" == __name__ :   
    t = BibleReader()
    t.bbi_gen_js()
    
    
    
    
    
    
    
    
    
    
    
    
    
    