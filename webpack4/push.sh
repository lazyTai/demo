git config --global credential.helper store
git add .
git pull
git commit -a -m 'git auto commit'
git log -1
git push -u origin master
git remote -v