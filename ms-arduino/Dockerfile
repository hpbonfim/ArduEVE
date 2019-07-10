#Dockerfile
FROM node:10.15

# copy package.json to a temporary folder
ADD package.json /tmp/package.json

# installing the node_modules 
RUN cd /tmp && npm install --only=production && \
    npm cache clean --force

# "layer" thats been cached will be used if possible
RUN mkdir -p /usr/src/ms-arduino && cp -a /tmp/node_modules /usr/src/ms-arduino

# create a worker folder and add all files to mainwork
WORKDIR /usr/src/ms-arduino

# created a directory and copy all nedded files
ADD . /usr/src/ms-arduino

# Entrypoint script
RUN cp docker-entrypoint.sh /usr/local/bin/ && \
    chmod +x /usr/local/bin/docker-entrypoint.sh

# Start the app with secure shell cmd
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
