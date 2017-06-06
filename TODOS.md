# todos

## MVP

* [x] implement redux
* [x] rest api
* [x] mongodb
* [x] general error handling
* [x] global loading solution
* [x] general github setup
* [ ] Game Admin
  * [x] reset scores
  * [x] update score (fix input)
  * [x] update name
  * [x] when adding a player, a sillyname should be generated (using api or client side?)
  * [ ] review the sagas to simplify functions (can these be merged?)
  * [ ] edit player list mode (to remove a player)
* [x] websockets
* [ ] viewer's view using the shareId
  * [x] do a redirect in express instead of the client side.
  * [ ] Add Share button
  * [x] shared game URL shouldn't be at the root (do /g/{shareId} instead or something)
* [ ] Game Admin - Setup
  * [ ] reset game (clear player)
  * [ ] change default increment (is this really needed?)
  * [ ] change game name
  * [ ] set public and private game
* [ ] Genral API
  * [ ] Supply a random userId (token?) to prevent random people doing admin mode (not really secure)
* [ ] dev mode (log and stuff)
  * [x] log to console
  * [ ] log to file (prod)

## phase II

* [ ] tabs should create history to use browser back feature
* [ ] event log
* [ ] General UI (nav & footer)
  * [ ] Menu (account, my games, etc.)
  * [ ] Terms and conditions in footer (create page)
* [ ] oauth2 (facebook & google)
* [ ] Game API
  * [ ] view my games (with login)
  * [ ] implement game switch (leave and join game closing web sockets) will be useful when a game list is available.
  * [ ] should admin connect to the channel? (right now they join the room and receive updates, which is weird)
* [ ] Terms and Conditions
* [ ] Google Analytics
* [ ] Sitemap
* [ ] FAQ
