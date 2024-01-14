package ium.tweb.serverpostgres.playervaluations;

import ium.tweb.serverpostgres.competitions.Competitions;
import ium.tweb.serverpostgres.players.Players;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
/**
 * <h1>The Player  Valuations controller class</h1>
 * <h3>Manages calls to the server and routes them through the appropriate routes.</h3>
 */
@RestController
public class PlayerValuationsController {
    private final PlayerValuationsService playerValuationsService;

    @Autowired
    public PlayerValuationsController(PlayerValuationsService playerValuationsService) {
        this.playerValuationsService = playerValuationsService;
    }

    /**
     * <li>Paths for loading player valuations into the database</li>
     * @param playerValuations JSON files containing the player valuations
     */
    @PostMapping("/load_playervaluations")
    public void savePlayerValuations(@RequestBody List<PlayerValuations> playerValuations) {
        playerValuationsService.savePlayerValuations(playerValuations);
    }


}
