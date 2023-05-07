FROM node:18-alpine AS buildStage

ENV TERM=xterm \
    HOME=/srv/package

RUN apk update \
    && apk add nano

WORKDIR ${HOME}

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

RUN npm install --loglevel info

COPY tsconfig.json ./tsconfig.json
COPY src ./src
COPY tools ./tools
COPY .eslintrc ./.eslintrc
COPY .eslintignore ./.eslintignore

RUN npm run build

FROM node:18-alpine

MAINTAINER Erik Hage <ehage4@gmail.com>
LABEL "Description" = "Personal Website"

ENV HOME=/srv/package

WORKDIR ${HOME}

COPY --from=buildStage ${HOME}/node_modules ./node_modules
COPY package.json ./package.json
COPY dist ./dist
COPY public ./public

RUN ls -la

EXPOSE 3000

CMD [ "npm", "start" ]
