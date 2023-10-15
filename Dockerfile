FROM golang:1.8
ADD . /go/src/dota666
RUN mkdir /app
RUN mkdir -p /app/log
ADD conf /app/conf
ADD static /app/static
ADD views /app/views
RUN go install dota666
RUN mv /go/bin/dota666 /app
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
EXPOSE 5000
WORKDIR /app
ENTRYPOINT ./dota666
