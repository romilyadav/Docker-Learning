From node:11-alpine 

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json  ./

RUN npm ci 

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
