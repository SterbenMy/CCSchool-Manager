FROM node:14.13.0-stretch 

WORKDIR /schoolmanager

COPY ./package.json /schoolmanager
COPY ./package-lock.json /schoolmanager

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm","start" ]
