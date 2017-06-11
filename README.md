React Todo app
===================

This is a simple react application for beginners. 

---------

How to install/run 
-------------

To build the application, nodejs should be install on your machine 

Install Node in **Ubuntu**:

    $ sudo apt-get install python-software-properties
    $ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -

After adding required PPA file lets install Node package. NPM will also be installed with node.js. This command will also install many other dependent packages on your system.

    $ sudo apt-get install nodejs

If you are using other OS, you can download node from https://nodejs.org/en/download/

Download or clone this repo  to the specific folder.

    $ git clone https://github.com/emgk/ReactTodo.git ReactTodo
    $ cd ReactTodo

Now we will have to download the require node package as per package.json. 

    $ npm install 

After all successfully updated we will have to run **webpack-dev-server** to build and run the application.

    $ ./node_modules/.bin/webpack-dev-server

Now, open http://localhost:8080 


