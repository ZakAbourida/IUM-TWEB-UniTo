/* Repository for Clubs Class.
 * Here are contained the specific queries useful to our main server.
 */

package ium.tweb.serverpostgres.clubs;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClubsRepository extends JpaRepository<Clubs, Long> {

    /*
    Query that returns the teams of a championship.
    Due to lack of usable data, reference is only made to the year 2023 in which all the teams are correctly present for each championship.
    Responds to /list_teamsbycompetition route.
    */
    @Query("SELECT DISTINCT c.name FROM Clubs c JOIN Competitions comp ON c.domestic_competition_id = comp.competition_id WHERE comp.name = :CompetitionName AND c.last_season = 2023")
    List<String> listTeamsByCompetitionName(String CompetitionName);

    /*
    Query used to obtain all the teams present in the database.
    Responds to /all_teams route.
    */

    @Query(value = "SELECT DISTINCT c.name FROM Clubs c ORDER BY c.name ASC")
    List<String> listTeams();
}
