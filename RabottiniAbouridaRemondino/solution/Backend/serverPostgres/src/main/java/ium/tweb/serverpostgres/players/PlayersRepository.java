package ium.tweb.serverpostgres.players;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayersRepository extends JpaRepository<Players,Long> {

    @Query(value = "SELECT DISTINCT sub_position FROM Players" )
    public List<String> getRole();
}
