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

    public void savePlayers(List<Players> players) {
        playersRepository.saveAll(players);
    }

    public List<String> getRole() {
        return playersRepository.getRole();
    }

    public Players InfoPlayer(String Name) {
        return playersRepository.infoPlayer(Name);
    }

    public List<String> getCountry() {
        return playersRepository.getCountry();
    }

    public List<Integer> getSeasons() {
        return playersRepository.getSeasons();
    }
    public List<Players> advancedSearch(Integer Season, String Country, String Competition, Integer Year_Birth, String Team, String Role){
        return playersRepository.advancedSearch(Season,Country,Competition,Year_Birth,Team,Role);
    }
}
