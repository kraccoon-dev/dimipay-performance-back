FROM node:16-alpine

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm cache clean --force 
RUN npm ci

COPY . .

VOLUME [ "/app/node_modules" ]

CMD ["npm", "run", "serve"]