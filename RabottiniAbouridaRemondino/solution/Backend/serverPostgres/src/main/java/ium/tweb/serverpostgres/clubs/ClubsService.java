package ium.tweb.serverpostgres.clubs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
/**
 * <h1>Clubs Service</h1>
 * <h3>Within this class all operations will be carried out on requests and data entering and leaving the database. (Data refinement)</h3>
 */
@Service
public class ClubsService {
    private final ClubsRepository clubsRepository;

    @Autowired
    public ClubsService(ClubsRepository clubsRepository) {
        this.clubsRepository = clubsRepository;
    }

    /**
     * <li>Send data to repository to save data to database.</li>
     * @param clubs JSON file containing the clubs
     */
    public void saveClubs(List<Clubs> clubs) {
        clubsRepository.saveAll(clubs);
    }

    /**
     * <li>Transmits the name of the championship and returns the relevant teams.</li>
     * @param CompetitionName es. 'serie-a'
     * @return List of Teams es. {'Juventus FC','Atalanta',ecc.}
     */
    public List<String> listTeamsByCompetitionName(String CompetitionName) {
        return clubsRepository.listTeamsByCompetitionName(CompetitionName);
    }

    /**
     * <li>
     * It passes the call to the repository which queries the database and returns the list of all the teams present.</li>
     * @return List of teams es. {'Arsenal','Atalanta', ecc}
     */
    public List<String> listTeams() {
        return clubsRepository.listTeams();
    }

    /**
     *
     * @param squadName Name of the squad
     * @return Club information for the specified team name
     */
    public List<Clubs> squadInfoList(String squadName) {
        return clubsRepository.squadInfoList(squadName);
    }
}