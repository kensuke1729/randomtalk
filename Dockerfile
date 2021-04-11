FROM httpd:2.4
RUN apt-get update && apt-get -y install vim
#EXPOSE 80
COPY ./conf /usr/local/apache2/conf
COPY ./docs /usr/local/apache2/app/fukama-ru
#RUN git clone https://github.com/kensuke1729/randomtalk.git /usr/local/apache2/app/randomtalk
