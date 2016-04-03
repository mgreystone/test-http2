FROM heroku/cedar:14

# Port of nginx image
# https://github.com/nginxinc/docker-nginx/blob/f48d943038eaafd1f69cb14d86db95b3044bd4d8/mainline/jessie/Dockerfile
ENV NGINX_VERSION 1.9.12-0+trusty0

RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys C300EE8C \
  && echo "deb http://ppa.launchpad.net/nginx/development/ubuntu trusty main" >> /etc/apt/sources.list \
  && apt-get update \
  && apt-get install -y \
            ca-certificates \
            nginx=${NGINX_VERSION} \
            nginx-extras \
            gettext-base \
  && rm -rf /var/lib/apt/lists/*

# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
  && ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 80 443

COPY ./app /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/sites-available/default
COPY ./server.crt /etc/nginx/server.crt
COPY ./server.key /etc/nginx/server.key
