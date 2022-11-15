#!/bin/bash 

#download node and npm 
sudo apt install curl 
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.bashrc
. ~/.nvm/nvm.sh
nvm install node

#create working dir if not created
DIR="/home/ubuntu/express-app"
if [ -d "$DIR" ]; then 
    echo " ${DIR} exist"
else 
    echo " creating ${DIR}" directory
    mkdir ${dir}
fi