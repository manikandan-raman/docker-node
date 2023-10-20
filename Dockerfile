FROM node:18-alpine3.18

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci

COPY . .

EXPOSE 5000

RUN npm run build

CMD [ "npm", "start" ]