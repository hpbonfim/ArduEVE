# Create the container from the alpine linux image
FROM alpine:3.7

# Add nginx
RUN apk add --update nginx

# Create the directories workflow
RUN mkdir -p /tmp/ms-frontend
RUN mkdir -p /var/log/nginx
RUN mkdir -p /var/www/html

# Copy the nginx configuration files
COPY nginx_config/nginx.conf /etc/nginx/nginx.conf
COPY nginx_config/default.conf /etc/nginx/conf.d/default.conf
#COPY nginx_config/server.crt /etc/nginx/ssl/server.crt
#COPY nginx_config/server.key /etc/nginx/ssl/server.key

WORKDIR /tmp/ms-frontend

# Copy our source code into the container
COPY dist ./dist

# copy the built app to our served directory
RUN cp -r dist/* /var/www/html && rm -rf ./* 

# make all files belong to the nginx user
RUN chown nginx:nginx /var/www/html

# start nginx and keep the process from backgrounding and the container from quitting
CMD ["nginx", "-g", "daemon off;"]

# FROM node:10.15.1
# ADD package.json /tmp/package.json
# RUN cd /tmp && npm install
# RUN mkdir -p /usr/src/dist && cp -a /tmp/node_modules /usr/src/dist
# WORKDIR /usr/src/dist
# ADD nodemon.json /usr/src/dist
# ADD . /usr/src/dist
# RUN cp docker-entrypoint.sh /usr/local/bin/ && \
#     chmod +x /usr/local/bin/docker-entrypoint.sh
# RUN npm install && \
#     npm i -g -s @vue/cli && \
#     npm i -g -s @vue/cli-service && \
#     npm run build && \
#     npm cache clean --force && rm -rf ./build \
#     rm -rf ./test \
#     rm -rf ./src
# # EXPOSE 3001
# ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]