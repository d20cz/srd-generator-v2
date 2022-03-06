#!/usr/bin/env sh

SRD_DEPLOY_DATE=$(date +"%d. %m. %Y")
SELECT_SRD=$1
DEPLOY_VERSION=2022.1

find ./builds/ -type f -exec sed -i -e "s/##SRD_DEPLOY_VERSION##/$DEPLOY_VERSION/g" {} \;
find ./builds/ -type f -exec sed -i -e "s/##SRD_DEPLOY_DATE##/$SRD_DEPLOY_DATE/g" {} \;

cd builds/$SELECT_SRD
zip -r ../$SELECT_SRD-$DEPLOY_VERSION.zip public/*;