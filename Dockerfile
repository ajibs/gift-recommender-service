FROM node:8.12.0

RUN mkdir /src
WORKDIR /src

COPY package*.json ./

RUN npm install

RUN npm install -g nodemon@1.18.4

COPY . .

EXPOSE 8080

CMD ["nodemon", "server.js"]
