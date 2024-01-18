package ium.tweb.serverpostgres.competitions;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
     * @return List of championships es. {'Serie A', 'Premier League', ecc}
     */
    @GetMapping("/list_competitions")
    public List<String> ListCompetitions() {
        return  competitionsService.listCompetitions();
    }

}
