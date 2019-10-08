#Dockerfile
FROM node:10.15

# create a worker folder
WORKDIR /usr/src/ms-backend

# install app dependencies
COPY package*.json ./

# building code for production
RUN npm ci --only=production

# Bundle app source
COPY . .

# inject entrypoint script to docker location
RUN cp docker-entrypoint.sh /usr/local/bin/ && \
    chmod +x /usr/local/bin/docker-entrypoint.sh

# start the app with secure shell cmd
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]