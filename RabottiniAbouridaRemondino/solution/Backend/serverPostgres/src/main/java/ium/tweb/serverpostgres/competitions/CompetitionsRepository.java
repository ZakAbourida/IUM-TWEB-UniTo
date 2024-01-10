package ium.tweb.serverpostgres.competitions;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompetitionsRepository extends JpaRepository<Competitions, Long> {
}
