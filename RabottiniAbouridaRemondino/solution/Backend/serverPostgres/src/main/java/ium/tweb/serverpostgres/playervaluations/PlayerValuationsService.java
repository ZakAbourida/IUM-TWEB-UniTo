package ium.tweb.serverpostgres.playervaluations;

import ium.tweb.serverpostgres.players.Players;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerValuationsService {
    private final PlayerValuationsRepository playerValuationsRepository;

    @Autowired
    public PlayerValuationsService(PlayerValuationsRepository playerValuationsRepository) {
        this.playerValuationsRepository = playerValuationsRepository;
    }

    public void savePlayerValuations(List<PlayerValuations> playerValuations) {
        playerValuationsRepository.saveAll(playerValuations);
    }
}
