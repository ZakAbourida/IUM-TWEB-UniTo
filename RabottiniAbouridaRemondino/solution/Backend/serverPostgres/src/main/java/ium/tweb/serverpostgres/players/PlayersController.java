package ium.tweb.serverpostgres.players;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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

    @GetMapping("/get_role")
    public List<String> getRole() {
        return playersService.getRole();
    }

    @PostMapping("/info_player")
    public Players InfoPlayer(@RequestBody String Name) {
        return playersService.InfoPlayer(Name);
    }

    @GetMapping("/country")
    public List<String> GetCountry() {
        return playersService.getCountry();
    }

    @GetMapping("/seasons")
    public List<Integer> GetSeasons() {
        return playersService.getSeasons();
    }

    @PostMapping("/advanced_search")
    public List<Players> AdvancedSearch(Integer Season, String Country, String Competition, Integer Year_Birth, String Team, String Role){
        return playersService.advancedSearch(Season,Country,Competition,Year_Birth,Team,Role);
    }
}
