FROM node:10-slim
WORKDIR /usr/src/ms-arduino
COPY package*.json ./
RUN npm ci --only=production
COPY . .

# Inject entrypoint script to docker location
RUN cp docker-entrypoint.sh /usr/local/bin/ && \
    chmod +x /usr/local/bin/docker-entrypoint.sh

# Start the app with secure shell cmd
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
