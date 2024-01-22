Linee guida per far partire la simulazione:

1. Creare un database ‘DynamicDatabase’ con MongoCompass e creare le collezioni
(appearances, game_events, game_lineups, games, club_games). Successivamente
importare I le CSV per popolare il database.

2. Far partire I server:

1. Frontend/bin/www (porta: 3000)

2. Backend/serverMongo/bin/www (porta: 3001)

3. Backend/servePostgres/src/main/java/ium/tweb/serverpostgres/
ServerPostgresApplication (porta: 8081)

4. Backend/ askServer/app.py (porta: 127.0.0.1:5000)

3. Iniziare la simulazione da localhost:3000<img width="436" alt="image" src="https://github.com/ZakAbourida/IUM-TWEB-UniTo/assets/94913167/56b68635-94a6-48aa-a552-aaf8e849a7e5">
