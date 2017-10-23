# Usage Insructions:

To run this app first install npm, node and bower. Then resolve all dependecies using following command:

```bash
npm install
bower install
```

## To run the App in development mode:

```basg
npm start
```

> It will open browser in live reload mode.


# Docker

```bash
# clone repo.
git clone https://github.com/mabdullah353/Newsletter2go.git
cd Newsletter2go/

# build the container.
docker build -t mabdullah353:Newsletter2go .

# Chek all images.
docker images

# Run the image.
docker run -w /Newsletter2go -p 3000:3000 -d mabdullah353:Newsletter2go
```

> visit http://localhost:3000/ to see in action.
