FROM node:22.17.0

WORKDIR /var/www/html

ENV TZ=Europe/Prague
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update && apt-get install -y yarn zip unzip rsync