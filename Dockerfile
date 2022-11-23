FROM nginx
COPY dist /usr/share/nginx/html
COPY mainpage.conf /etc/nginx/conf.d/
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN echo 'Asia/Shanghai' >/etc/timezone
