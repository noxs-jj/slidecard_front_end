FROM ubuntu:14.04

MAINTAINER Jean-Jacques MOIROUX <jjmoiroux@gmail.com>

RUN locale-gen en_US.UTF-8 && echo 'LANG="en_US.UTF-8"' > /etc/default/locale

RUN apt-get update ; apt-get install -y curl git-core nano wget nginx \
&& apt-get clean ; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

ADD build_file/default /etc/nginx/sites-enabled/
ADD build_file/nginx.con /etc/nginx/

RUN mkdir /var/www ; chmod 777 /var/www

## Expose http port
EXPOSE 80
