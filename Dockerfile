FROM node:14-alpine

WORKDIR /server

COPY package*.json ./
RUN npm install --production

COPY . ./

CMD [ "node", "index.js" ]