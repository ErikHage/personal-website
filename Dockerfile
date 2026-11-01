FROM node:24-alpine AS buildStage

ENV TERM=xterm \
    HOME=/srv/package

WORKDIR ${HOME}

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

RUN npm ci --loglevel info

COPY tsconfig.json ./tsconfig.json
COPY src ./src
COPY tools ./tools
COPY eslint.config.mjs ./eslint.config.mjs

RUN npm run build

FROM node:24-alpine AS dependencyStage

ENV HOME=/srv/package

WORKDIR ${HOME}

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

RUN npm ci --omit=dev

FROM node:24-alpine

LABEL maintainer="Erik Hage <ehage4@gmail.com>"
LABEL "Description" = "Personal Website"

ENV HOME=/srv/package \
    NODE_ENV=production

WORKDIR ${HOME}

COPY --from=dependencyStage ${HOME}/node_modules ./node_modules
COPY --from=buildStage ${HOME}/dist ./dist
COPY package.json ./package.json
COPY public ./public

USER node

EXPOSE 8001

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s \
    CMD node -e "fetch('http://127.0.0.1:' + (process.env.PORT || 8001)).then((r) => process.exit(r.ok ? 0 : 1), () => process.exit(1))"

CMD [ "node", "dist/src/server.js" ]
