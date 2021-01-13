#Build the angular project
FROM node:12.7-alpine AS build

WORKDIR /usr/src/app
COPY . ./
RUN npm install
RUN npm run ng build --prod

#Start the angular project served from a nginx server
FROM nginx:1.17.1-alpine

COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist/Forge /usr/share/nginx/html

#This is the port that the angular project listens to
EXPOSE 80
