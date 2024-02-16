FROM node:alpine

ENV TZ = America/Santiago

RUN apk update && apk add tzdata \
    && ln -sf /usr/share/zoneinfo/${TZ} /etc/localtime \
    && echo $TZ > /etc/timezone

WORKDIR /app