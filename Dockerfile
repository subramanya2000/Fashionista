FROM node:14 as angular
WORKDIR /app
COPY . /app
RUN npm i -g @angular/cli
RUN npm i
RUN npm run build
FROM nginx
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
COPY --from=angular /app/dist/ /usr/share/nginx/html
