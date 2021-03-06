# general ideas

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
  * have a list of template for known games
    * get scoring schemes for games like Agricola and other board games
    * get scoring schemes for card games (Hearts, Release!, etc.)
    * create your own?
    * submit scheme?
    * scheme creator?
* light and dark theme
* think about landscape mode? should it be any different?
* associate image with a player (team logo, sponsors, profile picture)
  * implement email linking to get a profile picture? (gravatar)
  * random image generated from name? (http://identicon.net/)
* join a game as a player
  * as admin, send an invite and have player enter their informations

# brainstorming

* should notification or event log area be able to display pictures or general medias?
* custom theming (custom events, sponsorship)
* be able to share a static version as facebook post / twitter cards
* feed event log from different sources (twitter, facebook, slack, etc.)
