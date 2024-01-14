package ium.tweb.serverpostgres.competitions;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
/**
 * <h1>Repository for Competitions Class.</h1>
 * <p>Here are contained the specific queries useful to our main server.</p>
 */
@Repository
public interface CompetitionsRepository extends JpaRepository<Competitions, Long> {
    /**
     * <li>Query used to obtain the list of national championships (Not all competitions).</li>
     * <li>Responds to /list_competitions route.</li>
     * @return List of championships es {'serie-a','bundesliga','premier-league', ecc}
     */
    @Query("SELECT DISTINCT c.name FROM Competitions AS c WHERE c.sub_type = 'first_tier'")
    List<String> listCompetitions();

}
