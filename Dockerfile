FROM httpd:latest
MAINTAINER Jeremy MOREAU

RUN apt-get update \
&& apt-get install -y curl \
&& rm -rf /var/lib/apt/lists/*

RUN curl -LO "https://nodejs.org/dist/v8.9.4/node-v8.9.4-linux-x64.tar.gz" \
&& tar -xzf node-v8.9.4-linux-x64.tar.gz -C /usr/local --strip-components=1 \
&& rm node-v8.9.4-linux-x64.tar.gz

RUN apt update && apt-get -y install git \
&& cd /usr/local/apache2/htdocs \
&& git clone https://github.com/mimir02/AppliNodeDevOps.git \
&& cd AppliNodeDevOps \
&& npm install

WORKDIR /usr/local/apache2/htdocs/AppliNodeDevOps