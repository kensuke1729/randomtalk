FROM httpd:2.4
RUN apt-get update && apt-get -y install vim
COPY ./conf /usr/local/apache2/conf
COPY ./docs /usr/local/apache2/app/randomtalk
