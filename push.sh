#!/bin/bash
#!/usr/bin/php
# git config --global credential.helper store;
git pull;
# git add build  -f ;
git add . ;
git commit -a -m 'git auto commit'
# git log -1
# git remove add origin https://github.com/lazyTai/demo.git
# git push -u origin master
git push  ;
# git remote -v
git status ;
# sed -i -e 's/\r$//' push.sh
# chmod 777 push.sh