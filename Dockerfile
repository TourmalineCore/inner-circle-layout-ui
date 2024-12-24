FROM node:20.11.1-alpine3.19 as build
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN npm run build -- --base=/layout

FROM nginx:1.26.0-alpine3.19-slim
COPY /ci/nginx.conf /data/conf/nginx.conf
COPY --from=build /dist /usr/share/nginx/html

EXPOSE 80

WORKDIR /usr/share/nginx/html
RUN apk add --no-cache bash

CMD nginx -g "daemon off;" -c "/data/conf/nginx.conf"
