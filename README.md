### The problem is:

+ create production build
+ run production server
+ open app [http://localhost:3001/activities](http://localhost:3001/activities)
+ refresh page (works normal)
+ click on *Link to id 1* (works normal)
+ refresh page (not work, because **1.bundle.js** file not sent correctly, css too)

What is **1.bundle.js**? I think it is localization file. ([some info](https://monosnap.com/file/bTcLVZRfcbO6QDyAEkYBmJASwASgC0)). How I can fix it?

### Install
````bash
npm install
````

### Run Dev
````bash
npm start
````
Open [http://localhost:3000](http://localhost:3000)

### Run Prod
````bash
npm run build
node production/production-server.js
````
Open [http://localhost:3001](http://localhost:3001)
