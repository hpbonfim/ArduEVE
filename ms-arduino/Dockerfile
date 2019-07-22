#Dockerfile
FROM node:10.15

# create a worker folder
WORKDIR /usr/src/ms-arduino

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# If you are building your code for production
RUN npm ci --only=production

# Bundle app source
COPY . .

# Inject entrypoint script to docker location
RUN cp docker-entrypoint.sh /usr/local/bin/ && \
    chmod +x /usr/local/bin/docker-entrypoint.sh

# Start the app with secure shell cmd
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
