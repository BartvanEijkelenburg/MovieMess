# create a standard base image that has all the defaults
FROM node:18 as base
ENV NODE_ENV=production
WORKDIR /home/node/app

COPY package.json package-lock.json ./
COPY .env.docker ./.env

COPY . ./

RUN npm install -g blitz && npm ci --ignore-scripts && npm prune --production && npm cache clean --force

FROM base as build
ENV NODE_ENV=production
RUN ./node_modules/.bin/prisma generate && blitz build

FROM build as prod
ENV NODE_ENV=production

ARG DATABASE_URL
ARG PORT=3000
ENV DATABASE_URL ${DATABASE_URL}

CMD blitz db migrate && blitz start
