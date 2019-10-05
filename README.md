# FALL-O-RADO: THE FALL EVENTS APP
Find your fall spirit with Fall-o-rado! This application allows users to track all events fall happening on the front range. Users can see event descriptions, visit event websites, find their events on a map, add events, and search by the event type of their preference.
## Technologies
  - Ruby on Rails - version 2.6.1
  - Javascript - version ES9
  - Google Maps Javascript API - version 3.38
  - Rack-Cors - version 1.0.3
  
## DEMO
[Fall-o-rado Demo](https://youtu.be/yjdgWm6j870)
## INSTALL INSTRUCTIONS 
Fork and clone the repo to install it locally. Bundle install to acquire the appropriate gems. To set up the database, run:
```ruby
rails db:create
rails db:migrate
rails db:seed
```
In the back end run rails s to start your local server. (Make sure your ports match). 
```ruby
(Opt: PORT=000) rails s
```
In the front end install lite-server:
```javascript
npm install lite-server
```
Run lite-server by typing lite-server in your terminal on the front end.
## Features
 - View a list of all events happening this fall. Includes descriptions, dates, prices, and external websites. 
 - View a map with the locations of each event. Each marker on the map contains info on that event and the option to visit that events website.
 - View and add or search page that allows the user to create an event, or to filter each event by category.
 
 To-do list:
 - Use Google Maps Geocoder Api to process user created events and create markers that will display on the map.

 ## Screenshots 
[screen_shot.png]
[screen_shot2.png]
 
## CONTRIBUTORS GUIDE 
Created by [Arina Victor](https://github.com/arinavictor?tab=repositories) and [Joe Gailey](https://github.com/jgaileyiii?tab=repositories) 
1. Never merge own pull requests, they should be approved by at least one other developer. 
 - commits should be detailed
 - update the README.md with changes made






