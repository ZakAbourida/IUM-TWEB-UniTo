/* Repository for Competitions Class.
 * Here are contained the specific queries useful to our main server.
 */

package ium.tweb.serverpostgres.competitions;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompetitionsRepository extends JpaRepository<Competitions, Long> {
    /*
    Query used to obtain the list of national championships (Not all competitions).
    Responds to /list_competitions route.
    */
    @Query("SELECT DISTINCT c.name FROM Competitions AS c WHERE c.sub_type = 'first_tier'")
    List<String> listCompetitions();

}
