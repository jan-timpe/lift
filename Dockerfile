FROM node:alpine

# install yarn
# RUN apk add yarn
RUN npm install -g -s yarn

# set working dir
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install and cache dependencies
COPY package.json /usr/src/app/package.json

RUN yarn
RUN yarn global add react-scripts

# add node_modules/.bin to PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH