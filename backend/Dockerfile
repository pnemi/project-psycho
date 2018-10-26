# use latest node image
FROM node:10

# install yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

# create app directory
RUN mkdir -p /app

# use app directory
WORKDIR /app

# copy module
COPY package.json yarn.lock /app/

# install dependencies
RUN cd /app \
    && yarn install --pure-lockfile

# copy app source
COPY . /app

EXPOSE 8888
