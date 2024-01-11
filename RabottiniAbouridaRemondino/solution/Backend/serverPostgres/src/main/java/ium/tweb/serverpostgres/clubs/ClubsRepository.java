package ium.tweb.serverpostgres.clubs;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClubsRepository extends JpaRepository<Clubs, Long> {

    @Query("SELECT DISTINCT c.name FROM Clubs c JOIN Competitions comp ON c.domestic_competition_id = comp.competition_id WHERE comp.name = :CompetitionName")
    List<String> listTeamsByCompetitionName(String CompetitionName);
}
