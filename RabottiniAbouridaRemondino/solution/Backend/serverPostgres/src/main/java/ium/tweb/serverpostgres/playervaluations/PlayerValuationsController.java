package ium.tweb.serverpostgres.playervaluations;

import ium.tweb.serverpostgres.competitions.Competitions;
import ium.tweb.serverpostgres.players.Players;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PlayerValuationsController {
    private final PlayerValuationsService playerValuationsService;

    @Autowired
    public PlayerValuationsController(PlayerValuationsService playerValuationsService) {
        this.playerValuationsService = playerValuationsService;
    }

    @PostMapping("/load_playervaluations")
    public void savePlayerValuations(@RequestBody List<PlayerValuations> playerValuations) {
        playerValuationsService.savePlayerValuations(playerValuations);
    }


}
