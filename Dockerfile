FROM mimir02/httpdalpinegitnode
MAINTAINER Jeremy MOREAU

RUN cd /usr/local/apache2/htdocs \
&& git clone https://github.com/mimir02/AppliNodeDevOps.git \
&& cd AppliNodeDevOps \
&& npm install

WORKDIR /usr/local/apache2/htdocs/AppliNodeDevOps