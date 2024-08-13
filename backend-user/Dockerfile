FROM node:18.20.4-alpine

WORKDIR /usr/src/app

COPY package*.json ./ 

RUN npm install

COPY . . 

EXPOSE 3020

CMD ["npm", "start"]