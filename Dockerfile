FROM node:22-alpine as build

WORKDIR /app

COPY package*.json /app/

RUN npm install -g ionic


RUN npm install --legacy-peer-deps

COPY ./ /app/

RUN npm run build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/www/ /usr/share/nginx/html/