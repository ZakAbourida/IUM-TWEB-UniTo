package ium.tweb.serverpostgres.competitions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompetitionsService {
    private final CompetitionsRepository competitionsRepository;

    @Autowired
    public CompetitionsService(CompetitionsRepository competitionsRepository) {
        this.competitionsRepository = competitionsRepository;
    }

    public void saveCompetitions(List<Competitions> competitions) {
        competitionsRepository.saveAll(competitions);
    }

    public List<String> listCompetitions() {
        return competitionsRepository.listCompetitions();
    }


}
