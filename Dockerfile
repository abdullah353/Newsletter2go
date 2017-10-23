# NodejS latest version.
FROM node:latest

# Set environment variables
ENV PORT 3000

COPY ./ /Newsletter2go/
WORKDIR /Newsletter2go

# Clearing dependencies folder as we copied complete
# folder to docker container.
RUN rm -rf node_modules/; exit 0
RUN rm -rf bower_components/; exit 0

RUN ls -alh
RUN npm install
RUN npm install -g bower
RUN echo '{ "allow_root": true }' > /root/.bowerrc
RUN bower install

# Default PORT our App start with.
EXPOSE $PORT

CMD ["npm", "start"]
