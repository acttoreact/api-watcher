FROM node:12-alpine
WORKDIR /usr/src/app
LABEL Description="A2R Watcher"
# Production packages install
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent
# Copy the source code and build the solution
COPY ./bin ./bin
# Enviroment por production
ENV NODE_ENV production
# Vulumes for mapping
VOLUME ["/usr/src/app/bin/server"]
# Start command
CMD npm start