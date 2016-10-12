--- 
customlog: 
  - 
    format: combined
    target: /usr/local/apache/domlogs/whatithinkwhenilisten.com
  - 
    format: "\"%{%s}t %I .\\n%{%s}t %O .\""
    target: /usr/local/apache/domlogs/whatithinkwhenilisten.com-bytes_log
documentroot: /home/samuelhu92/public_html
group: samuelhu92
hascgi: 1
homedir: /home/samuelhu92
ifmodulealiasmodule: 
  scriptalias: 
    - 
      path: /home/samuelhu92/public_html/cgi-bin/
      url: /cgi-bin/
ifmoduleincludemodule: 
  directoryhomesamuelhupublichtml: 
    ssilegacyexprparser: 
      - 
        value: " On"
ifmoduleitkc: {}

ifmodulemodincludec: 
  directoryhomesamuelhupublichtml: 
    ssilegacyexprparser: 
      - 
        value: " On"
ifmoduleuserdirmodule: 
  ifmodulempmitkc: 
    ifmoduleruidmodule: {}

ip: 107.180.29.216
owner: gdresell
phpopenbasedirprotect: 1
port: 80
scriptalias: 
  - 
    path: /home/samuelhu92/public_html/cgi-bin
    url: /cgi-bin/
  - 
    path: /home/samuelhu92/public_html/cgi-bin/
    url: /cgi-bin/
serveradmin: webmaster@whatithinkwhenilisten.com
serveralias: www.whatithinkwhenilisten.com
servername: whatithinkwhenilisten.com
usecanonicalname: 'Off'
user: samuelhu92
userdirprotect: ''
