FROM node:14.15.3

RUN mkdir -p /app/client

COPY ["package.json", "package-lock.json", "./"]

WORKDIR /app/client

RUN npm ci --only=production
# RUN npm install --production

COPY . /app/client

EXPOSE 3000

CMD ["npm", "start"]