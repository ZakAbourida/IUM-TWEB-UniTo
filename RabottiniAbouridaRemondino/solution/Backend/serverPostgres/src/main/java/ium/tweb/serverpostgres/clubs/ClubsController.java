/*
The Clubs controller class manages calls to the server and routes them through the appropriate routes.
*/

package ium.tweb.serverpostgres.clubs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ClubsController {
    private final ClubsService clubsService;

    @Autowired
    public ClubsController(ClubsService clubsService) {
        this.clubsService = clubsService;
    }

    @PostMapping("/load_clubs")
    public void saveClubs(@RequestBody List<Clubs> clubs) {
        clubsService.saveClubs(clubs);
    }

    @PostMapping("/list_teamsbycompetition")
    public List<String> ListTeamsByCompetitionName(@RequestBody String CompetitionName) {
        return clubsService.listTeamsByCompetitionName(CompetitionName);
    }

    @GetMapping("/all_teams")
    public List<String> ListTeams() {
        return clubsService.listTeams();
    }


}
