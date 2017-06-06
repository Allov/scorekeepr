# general site structure

```
/ --> home, create game and list popular games or latest created public games
/g/{shareId} --> game screen (view mode) redirect to /games/{id}
/games --> list of games sorted by popularity, created date or activity
/games/{id} --> game screen (viewer mode)
/games/{id}/admin --> admin mode (for game with user accounts)
/games/{id}/admin/{secret} --> admin mode (for game without user accounts)
/me --> my account
/me/games --> my games (remove and create)
```
