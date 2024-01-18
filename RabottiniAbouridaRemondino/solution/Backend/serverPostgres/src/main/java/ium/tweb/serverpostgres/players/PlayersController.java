package ium.tweb.serverpostgres.players;

import ium.tweb.serverpostgres.clubs.Clubs;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
/**
 * <h1>The Players controller class</h1>
 * <h3>Manages calls to the server and routes them through the appropriate routes.</h3>
 */
@RestController
public class PlayersController {
    private final PlayersService playersService;

    @Autowired
    public PlayersController(PlayersService playersService) {
        this.playersService = playersService;
    }

    /**
     * <li>Paths for loading players into the database</li>
     * @param players JSON files containing the players
     */
    @PostMapping("/load_players")
    public void savePlayers(@RequestBody List<Players> players) {
        playersService.savePlayers(players);
    }

    /**
     * <li>Path to obtain the list of all positions on the field</li>
     * @return List of positions es. {'Left Winger', 'Goalkeeper', 'Right Midfield', ecc}
     */
    @GetMapping("/get_role")
    public List<String> getRole() {
        return playersService.getRole();
    }

    /**
     *<li>Path to obtain information relating to a player</li>
     * @param Name es 'Bukayo Saka'
     * @return Player information es. {"Name":'Bukayo Saka', "Age":'23',"Position":'Right Wing', ecc}
     * @throws JSONException Handle errors
     * @throws IOException Handle errors
     */
    @PostMapping("/info_player")
    public ResponseEntity<?> InfoPlayer(@RequestBody String Name) throws JSONException, IOException {
        JSONObject playerJson = playersService.InfoPlayer(Name);
        return ResponseEntity.ok(playerJson.toString());
    }

    /**
     * <li>Path to get all player nationalities</li>
     * @return List of nations es. {'Italy','Brasil', ecc}
     */
    @GetMapping("/country")
    public List<String> GetCountry() {
        return playersService.getCountry();
    }

    /**
     * <li>Path to get seasons years</li>
     * @return List of year es. {2003,2004,2005, ecc}
     */
    @GetMapping("/seasons")
    public List<Integer> GetSeasons() {
        return playersService.getSeasons();
    }

    /**
     * <li>Path to get a specific player list based on following fields.</li>
     * @param Season es. 2020
     * @param Country es. Italy
     * @param Competition es. serie-a
     * @param Year_Birth es. 1999
     * @param Team es. Juventus FC
     * @param Role es. Goalkeeper
     * @return List of players es {"Name":'Mattia Perin',"Team": 'Juventus FC', ecc}
     *                            {"Name":'Gianluigi Buffon,"Team": 'Juventus FC', ecc}
     * @throws JSONException Handle errors
     */
    @PostMapping("/advanced_search")
    public ResponseEntity<?> AdvancedSearch(Integer Season,String Country,String Competition,Integer Year_Birth, String Team,String Role) throws JSONException {
         List<JSONObject> results =  playersService.advancedSearch(Season,Country,Competition,Year_Birth,Team,Role);
         return ResponseEntity.ok(results.toString());
    }

    /**
     *Route that queries the database for players' birthday years
     * @return List of years birthday es. {1974,1978,1979, ecc}
     */
    @GetMapping("/get_birth_years")
    public List<Integer> YearsBirth(){
        return playersService.yearsBirth();
    }

    /**
     * <li>Path to obtain the info of a specific team</li>
     * @param squadName es. 'Palermo FC'
     * @return List of the player about the named team
     */
    @PostMapping("/squad_players")
    public List<Players> squadPlayers(@RequestParam String squadName) {
        return playersService.squadPlayers(squadName);
    }
}
