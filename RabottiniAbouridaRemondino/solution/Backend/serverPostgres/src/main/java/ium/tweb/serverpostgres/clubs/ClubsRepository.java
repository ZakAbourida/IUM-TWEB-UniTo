package ium.tweb.serverpostgres.clubs;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * <h1>Repository for Clubs Class.</h1>
 * <p>Here are contained the specific queries useful to our main server.</p>
 */
@Repository
public interface ClubsRepository extends JpaRepository<Clubs, Long> {

    /**
     * <li>Query that returns the teams of a championship.</li>
     * <li>Due to lack of usable data, reference is only made to the year 2023 in which all the teams are correctly present for each championship.</li>
     * <li>Responds to /list_teamsbycompetition route.</li>
     *
     * @param CompetitionName es. 'serie-a'
     * @return List of Teams es. {'Juventus FC','Atalanta',ecc.}
     */
    @Query("SELECT DISTINCT c.name FROM Clubs c JOIN Competitions comp ON c.domestic_competition_id = comp.competition_id WHERE comp.name = :CompetitionName AND c.last_season = 2023")
    List<String> listTeamsByCompetitionName(String CompetitionName);


    /**
     * <li>Query used to obtain all the teams present in the database.</li>
     * <li>Responds to /all_teams route.</li>
     * @return List of all teams  in alphabetical order es. {'Arsenal FC', 'Atletico Madrid', ecc}
     */
    @Query(value = "SELECT DISTINCT c.name FROM Clubs c ORDER BY c.name ASC")
    List<String> listTeams();
}
