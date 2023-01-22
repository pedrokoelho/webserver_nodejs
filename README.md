# Express JS Crash Course

Exploring Express, during IBM Course on EDEX => Application Development with Node.Js & Express

Following Express JS Crash Course by Traversy Media
// thank you Brad!

## PART I - CREATE A STATIC WEB SERVER

// following Brad course steps
// created 3 js files to see the diferent approaches

1. npm init -y
  create package.json without answering questions

2. npm i express
  Install Express

3. Create index_basic_server.js
  Create our main entry point file

4. node index_basic_server
  Run the server

5. Check the message on the console => Server started on 5000

6. Open the browser and go to localhost:5000

7. Check the message on the page => Cannot GET /
  We get that because we didn't create a route yet

8. Ctlr + c => to stop the server

9. Create index_response_send_txt.js
  Copy/paste index_basic_server.js code 

10. Create a Router

11. node index_response_send_txt
  Run the server

12. Check the updated page => Hello Kitty

13. Ctlr + c => to stop the server

14. nmp i -D nodemon
  Install nodemon as a DEV dependency
  Nodemon is going to constantly watch our server
  so we don't have to restart our server at every change we make

15. Create a script in package.json
  "scripts": {
      "start": "node index_response_send_txt",
      "dev": "nodemon index_response_send_txt"
  }

16. npm run dev
  Start the server with nodemon

17. Create index_response_file.js
  Stop the server => Ctrl + c
  Copy/paste index_response_send_txt code
  Update the file name in the script on package.json

18. Import path

19. In the router use res.sendFile()

20. Create index_response_static_folder.js
  It´s better if we use a static folder
  Stop the server => Ctrl + c
  Copy/paste index_response_send_file code
  Update the file name in the script on package.json

21. Set a static folder
  So we can access all the files that are inside this folder

22. Create about.html inside public folder

23. go to localhost:5000/about.html

24. about page is displayed!

// we now have a static web server
// we can create and add into the public folder a site with html and css
