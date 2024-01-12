package ium.tweb.serverpostgres.players;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayersRepository extends JpaRepository<Players, Long> {

    @Query(value = "SELECT DISTINCT sub_position FROM Players")
    public List<String> getRole();

    @Query("SELECT p FROM Players p WHERE p.name = :Name")
    Players infoPlayer(String Name);

    @Query(value = "SELECT DISTINCT p.country_of_birth FROM Players p")
    List<String> getCountry();

    @Query(value = "SELECT DISTINCT p.last_season FROM Players p ")
    List<Integer> getSeasons();

    @Query(value = "SELECT p FROM Players p WHERE (:Season IS NULL OR p.last_season = :Season) AND (:Country IS NULL OR p.country_of_birth = :Country) AND (:Competition IS NULL OR p.current_club_domestic_competition_id = :Competition) AND (:Year_Birth IS NULL OR YEAR(p.date_of_birth) = :Year_Birth) AND (:Team IS NULL OR p.current_club_name = :Team) AND (:Role IS NULL OR p.sub_position = :Role)")
    List<Players> advancedSearch(Integer Season, String Country, String Competition, Integer Year_Birth, String Team, String Role);
}
