package ium.tweb.serverpostgres.clubs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClubsService {
    private final ClubsRepository clubsRepository;

    @Autowired
    public ClubsService(ClubsRepository clubsRepository) {
        this.clubsRepository = clubsRepository;
    }

    public void saveClubs(List<Clubs> clubs) {
        clubsRepository.saveAll(clubs);
    }

    public List<String> listTeamsByCompetitionName(String CompetitionName) {
        return clubsRepository.listTeamsByCompetitionName(CompetitionName);
    }

    public List<String> listTeams() {
        return clubsRepository.listTeams();
    }

    public List<Clubs> squadInfoList(String squadName) {
         return clubsRepository.squadInfoList(squadName);
    }
}
