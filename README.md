# scorekeepr

This application will help you share and keep the score of any game where you have to add or substract points. Originally, I made this app for the card game [Release!](http://inedo.com/release), but I decided to generalise it a bit as it can be useful for any kind of game (e.g.: Scrabble, random hockey game, anything where you need to add and substract points from player or teams, really).

<div align="center">
  <!-- Dependency Status -->
  <a href="https://david-dm.org/Allov/scorekeepr">
    <img src="https://david-dm.org/Allov/scorekeepr.svg" alt="Dependency Status" />
  </a>
  <!-- devDependency Status -->
  <a href="https://david-dm.org/Allov/scorekeepr#info=devDependencies">
    <img src="https://david-dm.org/Allov/scorekeepr/dev-status.svg" alt="devDependency Status" />
  </a>
  <!-- Build Status -->
  <a href="https://travis-ci.org/Allov/scorekeepr">
    <img src="https://travis-ci.org/Allov/scorekeepr.svg" alt="Build Status" />
  </a>
  <!-- Test Coverage -->
  <a href="https://coveralls.io/r/Allov/scorekeepr">
    <img src="https://coveralls.io/repos/github/Allov/scorekeepr/badge.svg" alt="Test Coverage" />
  </a>
</div>

Want to [contibute](.github/CONTRIBUTING.md)?

# todos

## next steps

* [x] implement redux
* [x] rest api
* [x] mongodb
* [x] general error handling
* [x] global loading solution
* [x] general github setup
* [ ] viewer's view using the shareId
  * [ ] handle error and loading with App actions
  * [ ] Add Share button
  * [ ] shared game URL shouldn't be at the root (do /g/{shareId} instead or something)
* [ ] Game Admin
  * [ ] reset scores
  * [ ] update score (fix input)
  * [ ] update name
  * [ ] when adding a player, a sillyname should be generated (using api or client side?)
  * [ ] review the sagas to simplify functions (can these be merged?)
  * [ ] edit player list mode (to remove a player)
* [ ] Game Admin - Setup
  * [ ] reset game (clear player)
  * [ ] change default increment (is this really needed?)
  * [ ] change game name
  * [ ] set public and private game
* [ ] General UI (nav & footer)
  * [ ] Menu (account, my games, etc.)
  * [ ] Terms and conditions in footer (create page)
* [ ] Genral API
  * [ ] Supply a random userId (token?) to prevent random people doing admin mode (not really secure)
  * [ ] oauth2 (facebook & google)
* [ ] Game API
  * [ ] view my games (with login)
* [ ] dev mode (log and stuff)
  * [x] log to console
  * [ ] log to file (prod)
* [ ] tabs should create history to use browser back feature
* [ ] websockets for viewers

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

```
/ --> home, create game and list popular games or latest created public games
/{shareId} --> game screen (view mode) should redirect to /games/{id} ?
/games --> list of games sorted by popularity, created date or activity
/games/{id} --> game screen (viewer mode)
/games/{id}/admin --> admin mode (for game with user accounts)
/games/{id}/admin/{secret} --> admin mode (for game without user accounts)
/me --> my account
/me/games --> my games (remove and create)
```

## questions

* is there a better way to handle actions in an array? see [bindIndexToActionCreator](http://blog.scottlogic.com/2016/05/19/redux-reducer-arrays.html)
* how to load content from an url change? I'm using componentWillMount, but is there a way to do this even before that?
* actions for every button or manage a bigger slice of the state and update it at once?

