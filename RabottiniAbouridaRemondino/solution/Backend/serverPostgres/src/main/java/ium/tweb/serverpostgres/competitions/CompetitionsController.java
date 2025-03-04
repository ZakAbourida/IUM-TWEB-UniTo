package ium.tweb.serverpostgres.competitions;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
/**
 * <h1>The Competitions controller class</h1>
 * <h3>Manages calls to the server and routes them through the appropriate routes.</h3>
 */
@RestController
public class CompetitionsController {
    private final CompetitionsService competitionsService;

    @Autowired
    public CompetitionsController(CompetitionsService competitionsService) {
        this.competitionsService = competitionsService;
    }

    /**
     * <li>Paths for loading competitions into the database</li>
     * @param competitions JSON files containing the competitions
     */
    @PostMapping("/load_competitions")
    public void saveCompetitions(@RequestBody List<Competitions> competitions) {
        competitionsService.saveCompetitions(competitions);
    }


    /**
     * <li>Path to obtain the list of national championships</li>
     *
     * @return List of championships es. {'serie-a, 'premier-league', ecc}
     */
    @GetMapping("/list_competitions")
    public ResponseEntity<?> ListCompetitions() throws JSONException {
        List<JSONObject> championships =  competitionsService.listCompetitions();
        return ResponseEntity.ok(championships.toString());
    }

    /**
     * <li>Paths for loading competitions into the database</li>
     * @param competition JSON files containing the name of the competition
     */
    @PostMapping("/info_competition")
    public Competitions InfoCompetition(@RequestParam String competition) {
        return  competitionsService.InfoCompetition(competition);
    }

}