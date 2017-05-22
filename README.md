# scorekeepr

This application will help you share and keep the score of any game where you have to add or substract points. Originally, I made this app for the card game [Release!](http://inedo.com/release), but I decided to generalise it a bit as it can be useful for any kind of game (e.g.: Scrabble, random hockey game, anything where you need to add and substract points from player or teams, really).

# todo

## next steps

* (done) implement redux
* (done) rest api
* (in progress) update score (counter and hard set)
* global loading solution
* reset scores
* reset game
* remove a player (edit mode)
* tabs should create history to use browser back feature
* mongodb
* websockets for viewers
* general github setup
  * build statuses
  * create issues as work items (use trello?)

## general ideas

* setup screen
  * set game name
  * set default increment value
  * set default sort direction
  * set total number of periods, turns, laps
  * disable sort (i.e. sport event where team A visits team B, order is important)
* viewer's view
  * tabbed view with
    * sortable score (where applicable)
    * event log
  * share game
* home page
  * create game
* login
  * google, facebook
  * creating account should be optional, benefits are
    * finding my games
    * other? think about it
* most popular games
* implement public / private game
* sharing (unique url, don't use game name)
  * permanent vs temporary urls? what are the benefits of temporary urls?
  * share admin rights
* hybrid admin mode (permit players to update their score)
  * approval pending mode?
* game name should not be unique
* take snapshots or periods, turns or laps
* my games
  * end a game (archive)
  * create a new game
* internationalize app
* progressive web app
* offline mode
* think about ads, monetization
* search games (name, user, theme, tags)
* push notifications
  * score updates
  * end of turn, period, laps, etc.
  * admin general message
* event log
  * log all actions (using redux state?)
  * display notifications
* events
  * new leader
  * phase started / ended
  * game started / ended
* game templates
  * be able to setup game default structure
  * set default increment value
  * set default number of periods, phases, laps, turns, etc.
* light and dark theme
* think about landscape mode? should it be any different?
* associate image with a player (team logo, sponsors, profile picture)
  * implement email linking to get a profile picture? (gravatar)
  * random image generated from name? (http://identicon.net/)
* join a game as a player
  * as admin, send an invite and have player enter their informations

## brainstorming

* should notification or event log area be able to display pictures or general medias?
* custom theming (custom events, sponsorship)
* be able to share a static version as facebook post / twitter cards
* feed event log from different sources (twitter, facebook, slack, etc.)

## general todos

* Terms and Conditions
* Google Analytics
* Sitemap
* FAQ

## general site structure

/ --> home, create game and list popular games or latest created public games
/games --> list of games sorted by popularity, created date or activity
/games/{id} --> game screen (viewer mode)
/games/{id}/admin --> admin mode (for game with user accounts)
/games/{id}/admin/{secret} --> admin mode (for game without user accounts)
/me --> my account
/me/games --> my games (remove and create)
