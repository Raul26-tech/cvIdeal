FROM node:20-alpine

WORKDIR /usr/src

COPY package*.json ./

RUN yarn install --silent

COPY . .