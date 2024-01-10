package ium.tweb.serverpostgres.players;

import ium.tweb.serverpostgres.competitions.Competitions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PlayersController {
    private final PlayersService playersService;

    @Autowired
    public PlayersController(PlayersService playersService) {
        this.playersService = playersService;
    }
    @PostMapping("/load_players")
    public void savePlayers(@RequestBody List<Players> players) {
        playersService.savePlayers(players);
    }
}
