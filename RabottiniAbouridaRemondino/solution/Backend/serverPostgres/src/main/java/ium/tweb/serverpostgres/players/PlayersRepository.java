/* Repository for Players Class.
 * Here are contained the specific queries useful to our main server.
 */

package ium.tweb.serverpostgres.players;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayersRepository extends JpaRepository<Players, Long> {

    /*
    Query to get all the positions present in the database. Responds to the /get_role route.
    It is used to fill the drop-down menu of positions in the advanced search.
    */
    @Query(value = "SELECT DISTINCT sub_position FROM Players")
    public List<String> getRole();

    /*
    Query to obtain the general information of a player (market value, team, date of birth, etc.). Responds to the /info_player route.
    Some information will then be processed in the players service.
    The data is used to fill the individual player page.
    */
    @Query("SELECT p FROM Players p WHERE p.name = :Name")
    Players infoPlayer(String Name);

    /*
    Query to get all the players' countries of origin. Responds to the /country route.
    It is used to fill the drop-down menu of positions in the advanced search.
    */
    @Query(value = "SELECT DISTINCT p.country_of_birth FROM Players p")
    List<String> getCountry();

    /*
    Query to get all the seasons present in the database.
    In such a way as to fill the drop-down menu with only the current years. Responds to the /seasons route.
    */
    @Query(value = "SELECT DISTINCT p.last_season FROM Players p ")
    List<Integer> getSeasons();

    /*
    Advanced query that allows you to search for players based on different criteria: season, country of birth, current competition, year of birth, current team and position. Responds to /advanced_search route.
    All parameters are optional (can be null).
    */
    @Query(value = "SELECT p FROM Players p JOIN Competitions c ON c.competition_id = p.current_club_domestic_competition_id  WHERE (:Season IS NULL OR p.last_season = :Season) AND (:Country IS NULL OR p.country_of_birth = :Country) AND (:Competition IS NULL OR c.name = :Competition) AND (:Year_Birth IS NULL OR YEAR(p.date_of_birth) = :Year_Birth) AND (:Team IS NULL OR p.current_club_name = :Team) AND (:Role IS NULL OR p.sub_position = :Role)")
    List<Players> advancedSearch(Integer Season, String Country, String Competition, Integer Year_Birth, String Team, String Role);
}
