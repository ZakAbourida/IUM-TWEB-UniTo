package ium.tweb.serverpostgres.players;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
/**
 * <h1>Repository for Players Class.</h1>
 * <p>Here are contained the specific queries useful to our main server.</p>
 */
@Repository
public interface PlayersRepository extends JpaRepository<Players, Long> {

    /**
     * <li>Query to get all the positions present in the database. Responds to the /get_role route.</li>
     * <li>It is used to fill the drop-down menu of positions in the advanced search.</li>
     * @return list of each role es. {'Second Striker','Goalkeeper','Centre-Back', ecc}
     */
    @Query(value = "SELECT DISTINCT sub_position FROM Players")
    public List<String> getRole();


    /**
     * <li>Query to obtain the general information of a player (market value, team, date of birth, etc.). Responds to the /info_player route.</li>
     * <li>Some information will then be processed in the players service.</li>
     * <li>The data is used to fill the individual player page.</li>
     * @param Name Name of player es. 'Bukayo Saka'
     * @return All the information about one player es. {433177,Bukayo,Saka,Bukayo Saka,2023,11,bukayo-saka ecc}
     */
    @Query("SELECT p FROM Players p WHERE p.name = :Name")
    Players infoPlayer(String Name);

    /**
     *<li>Query to get all the players' countries of origin. Responds to the /country route.</li>
     * <li>Query to get all the players' countries of origin. Responds to the /country route.</li>
     * @return List of each country es {'Alaska', 'Brazil', ecc}
     */
    @Query(value = "SELECT DISTINCT p.country_of_birth FROM Players p")
    List<String> getCountry();


    /**
     * <li>Query to get all the seasons present in the database.</li>
     * <li>In such a way as to fill the drop-down menu with only the current years. Responds to the /seasons route.</li>
     * @return List of each season es. {2003,2004,2005, ecc}
     */
    @Query(value = "SELECT DISTINCT p.last_season FROM Players p ")
    List<Integer> getSeasons();

    /**
     * <li>Advanced query that allows you to search for players based on different criteria: season, country of birth, current competition, year of birth, current team and position. Responds to /advanced_search route.</li>
     * <li><All parameters are optional (can be null)./li>
     * @param Season es. 2022
     * @param Country es. Brazil
     * @param Competition es. serie-a
     * @param Year_Birth es. 2000
     * @param Team es. Manchester City
     * @param Role es. Central Midfield
     * @return List of Players that correspond to the parameters es. {"433177,Bukayo,Saka,Bukayo Saka,2023"
     * "Mustafa,Seyhan,Mustafa Seyhan,2020,820,mustafa-seyhan"
     * }
     */
    @Query(value = "SELECT p FROM Players p JOIN Competitions c ON c.competition_id = p.current_club_domestic_competition_id  WHERE (:Season IS NULL OR p.last_season = :Season) AND (:Country IS NULL OR p.country_of_birth = :Country) AND (:Competition IS NULL OR c.name = :Competition) AND (:Year_Birth IS NULL OR YEAR(p.date_of_birth) = :Year_Birth) AND (:Team IS NULL OR p.current_club_name = :Team) AND (:Role IS NULL OR p.sub_position = :Role)")
    List<Players> advancedSearch(Integer Season, String Country, String Competition, Integer Year_Birth, String Team, String Role);
}
