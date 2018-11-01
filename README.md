# About the project

It's a search engine that fetches User data from GitHub using their Restful API. If a user is found against the queried username, their data is shown, otherwise, a message is displayed reporting that no user was found. It's a dynamic search so as you write on the search bar, API calls are made and results are retrieved.

# React and Redux FTW

Initially the project was developed only using React and data was managed using local states of the components as my earlier commits would show. 
Redux was incorporated later to create and manage a global store and use action-dispatch paradigm to access the data store. 

# How to run the project

First clone the project into your local machine. cd into the working directory and then execute the following commands:

    npm install
    npm start

That should get the program running on localhost:3000
