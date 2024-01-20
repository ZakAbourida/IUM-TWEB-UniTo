package ium.tweb.serverpostgres.players;

import com.fasterxml.jackson.annotation.JsonProperty;
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

    /**
     * <h2>Support class used to transfer data from Express to Springboot</h2>
     */
    public static class AdvancedSearchDTO{
        @JsonProperty("season")
        Integer season;
        @JsonProperty("country")
        String country;
        @JsonProperty("competition")
        String competition;
        @JsonProperty("year_birth")
        Integer year_birth;
        @JsonProperty("team")
        String team;
        @JsonProperty("role")
        String role;

        public Integer getSeason() {
            return season;
        }

        public void setSeason(Integer season) {
            this.season = season;
        }

        public String getCountry() {
            return country;
        }

        public void setCountry(String country) {
            this.country = country;
        }

        public String getCompetition() {
            return competition;
        }

        public void setCompetition(String competition) {
            this.competition = competition;
        }

        public Integer getYear_birth() {
            return year_birth;
        }

        public void setYear_birth(Integer year_birth) {
            this.year_birth = year_birth;
        }

        public String getTeam() {
            return team;
        }

        public void setTeam(String team) {
            this.team = team;
        }

        public String getRole() {
            return role;
        }

        public void setRole(String role) {
            this.role = role;
        }
    }

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
     *<li>Path to get a specific player list based on following fields.</li>
     * @param searchDTO Contains the parameters to pass to the route to query the database es. {season:2022,country:'Italy',competition:'Serie A',year_birth:2000,team:'Juventus',role:'Left Wing'}
     * @return List of players es {"Name":'Mattia Perin',"Team": 'Juventus FC', ecc}
     * @throws JSONException  Handle errors
     */
    @PostMapping("/advanced_search")
    public ResponseEntity<?> AdvancedSearch(@RequestBody AdvancedSearchDTO searchDTO) throws JSONException {
        List<JSONObject> results = playersService.advancedSearch(
                searchDTO.getSeason(),
                searchDTO.getCountry(),
                searchDTO.getCompetition(),
                searchDTO.getYear_birth(),
                searchDTO.getTeam(),
                searchDTO.getRole()
        );
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

    /**
     * <li>Path to obtain a list of player of specific competition</li>
     * @param compId es. 'IT1'
     * @return List of the player about the competition
     */
    @PostMapping("/comp_players")
    public List<Players> compPlayers(@RequestBody String compId) {
        return playersService.compPlayers(compId);
    }
}