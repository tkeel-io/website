FROM node:lts

WORKDIR /tkeel-docs

COPY ./ ./

RUN npm install --legacy-peer-deps

EXPOSE 80

CMD ["npm", "run", "serve", "--", "--host", "0.0.0.0", "--port", "80"]
