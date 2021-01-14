FROM node:14.13.0-stretch 

WORKDIR /authback

COPY ./package*.json /authback/

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "node","index.js" ]