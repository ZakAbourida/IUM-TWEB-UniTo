package ium.tweb.serverpostgres.competitions;

import ium.tweb.serverpostgres.clubs.Clubs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CompetitionsController {
    private final CompetitionsService competitionsService;

    @Autowired
    public CompetitionsController(CompetitionsService competitionsService) {
        this.competitionsService = competitionsService;
    }

    @PostMapping("/load_competitions")
    public void saveCompetitions(@RequestBody List<Competitions> competitions) {
        competitionsService.saveCompetitions(competitions);
    }
    //Ottieni la lista delle competizioni
    @GetMapping("/list_competitions")
    public List<String> ListCompetitions(){
        return competitionsService.listCompetitions();
    }

}
