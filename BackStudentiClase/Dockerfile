FROM node:14.15.4

WORKDIR /serverstudenti

COPY ./package*.json /serverstudenti/

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "node","server.js" ]
