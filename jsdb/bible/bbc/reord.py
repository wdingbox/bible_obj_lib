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
import shutil
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
            #if self.bbi_inc_js == fname: continue
            #if fname[-3:]!=".js" : continue

            print fname
            if(fname[0:4]== "bbi_"):
                self.keysList.append(fname)
            
            #self.bbc_keyNme_check(fname)
            #pf.write("<script language=\"javascript\" src=\"%s\"></script>\n" % fname)
        print self.keysList
        self.bbc_keyNme_check("")
            
    def bbc_keyNme_check(self,oldfile):
        idx=0
        for fname in self.keysList:
            padstr="000" + str(idx)
            #print idx, fname
            fname2="cuv_" + padstr[-3:] + ".js"
            print fname2, fname
            shutil.copyfile(fname, fname2)

            idx=idx+1
        
        


if "__main__" == __name__ :   
    t = BibleReader()
    t.bbi_gen_js()
    
    
    
    
    
    
    
    
    
    
    
    
    
    