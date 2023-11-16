FROM node:latest
WORKDIR /wlbe
COPY . /wlbe
RUN npm install
EXPOSE 3031
CMD node app.js