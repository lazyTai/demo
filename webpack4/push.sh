git config --global credential.helper store
git pull
git add .
git commit -a -m 'git auto commit'
git log -1
git push -u origin master
git remote -v
git status