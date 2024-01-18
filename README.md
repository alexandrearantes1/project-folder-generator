# project-folder-generator

This script generates a simple Node.js project folder, runs npm init -y and install Express, EJS and Mongoose modules.
To use the script simply place it in the root folder where you want the Project Folder to be created and run the following command:

node boilerplate.js "ProjectName"

The folder structure is

- ProjectName
  - index.js
  + views
    - header.ejs
    - nav.ejs
    - footer.ejs
    - styles.css
  + scripts
    - app.js

The only input validation is to check if the user entered a project name and whether the folder already existis or not. 
