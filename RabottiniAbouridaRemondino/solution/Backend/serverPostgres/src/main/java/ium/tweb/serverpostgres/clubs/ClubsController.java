package ium.tweb.serverpostgres.clubs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * <h1>The Clubs controller class</h1>
 * <h3>Manages calls to the server and routes them through the appropriate routes.</h3>
 */
@RestController
public class ClubsController {
    private final ClubsService clubsService;

    @Autowired
    public ClubsController(ClubsService clubsService) {
        this.clubsService = clubsService;
    }

    /**
     * <li>Paths for loading clubs into the database</li>
     * @param clubs JSON files containing the clubs
     */
    @PostMapping("/load_clubs")
    public void saveClubs(@RequestBody List<Clubs> clubs) {
        clubsService.saveClubs(clubs);
    }

    /**
     * <li>Path to obtain the teams of a specific championship</li>
     * @param CompetitionName es. 'serie-a'
     * @return List of teams belonging to a championship es. {Atalanta,Juventus FC, ecc}
     */
    @PostMapping("/list_teamsbycompetition")
    public List<String> ListTeamsByCompetitionName(@RequestBody String CompetitionName) {
        return clubsService.listTeamsByCompetitionName(CompetitionName);
    }

    /**
     * <li>Path to obtain all the teams present in the database</li>
     * @return List of teams es. {Juventus FC, Arsenal, Barcelona FC, ecc}
     */
    @GetMapping("/all_teams")
    public List<String> ListTeams() {
        return clubsService.listTeams();
    }

    /**
     * <li>Path to obtain the info of a specific team</li>
     * @param squadName es. 'Palermo FC'
     * @return Information of the specified team
     */
    @PostMapping("/list_info_squad")
    public List<Clubs> SquadInfoList(@RequestParam String squadName) {
        return clubsService.squadInfoList(squadName);
    }

}
