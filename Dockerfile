FROM nginx
COPY ./app /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
EXPOSE 443
