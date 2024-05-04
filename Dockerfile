FROM node:14

WORKDIR /node-mongo-docker-refresher
COPY package.json .
RUN npm install
COPY . .
CMD npm start