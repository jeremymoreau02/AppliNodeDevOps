FROM mimir02/httpdalpinegitnode
MAINTAINER Jeremy MOREAU

RUN apk add openrc --no-cache && apk add apache2 && rc-update add apache2 default \
&& touch /run/openrc/softlevel

RUN cd /usr/local/apache2/htdocs \
&& git clone https://github.com/mimir02/AppliNodeDevOps.git \
&& cd AppliNodeDevOps \
&& git checkout docker-prod


WORKDIR /usr/local/apache2/htdocs/AppliNodeDevOps