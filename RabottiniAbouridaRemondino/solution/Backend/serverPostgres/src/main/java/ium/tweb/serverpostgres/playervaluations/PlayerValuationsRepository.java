package ium.tweb.serverpostgres.playervaluations;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
/**
 * <h1>Repository for Player Valuations Class.</h1>
 * <p>Here are contained the specific queries useful to our main server.</p>
 */
@Repository
public interface PlayerValuationsRepository extends JpaRepository<PlayerValuations, Long> {
}
