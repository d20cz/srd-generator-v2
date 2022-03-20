#!/usr/bin/env bash

SRD_DEPLOY_DATE=$(date +"%d. %m. %Y")
SELECT_SRD=$1
version_env_name=$2
DEPLOY_VERSION="${!version_env_name}"

find ./builds/ -type f -exec sed -i -e "s/##SRD_DEPLOY_VERSION##/$DEPLOY_VERSION/g" {} \;
find ./builds/ -type f -exec sed -i -e "s/##SRD_DEPLOY_DATE##/$SRD_DEPLOY_DATE/g" {} \;

cd builds/$SELECT_SRD || { echo "cd Failure"; exit 1; }
zip -r ../$SELECT_SRD-$DEPLOY_VERSION.zip public/*;