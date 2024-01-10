package ium.tweb.serverpostgres.players;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayersService {
    private final PlayersRepository playersRepository;

    @Autowired
    public PlayersService(PlayersRepository playersRepository) {
        this.playersRepository = playersRepository;
    }
    public void savePlayers(List<Players> players){
        playersRepository.saveAll(players);
    }
}
