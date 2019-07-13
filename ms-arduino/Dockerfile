#Dockerfile
FROM node:10.15

# create a worker folder
WORKDIR /usr/src/ms-arduino

# add all files to mainwork
ADD . /usr/src/ms-arduino

# Entrypoint script
RUN cp docker-entrypoint.sh /usr/local/bin/ && \
    chmod +x /usr/local/bin/docker-entrypoint.sh

# Start the app with secure shell cmd
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
