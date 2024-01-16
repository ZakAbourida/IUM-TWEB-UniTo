package ium.tweb.serverpostgres.competitions;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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

    public List<JSONObject> listCompetitions() throws JSONException {
        List<String> championships =  competitionsRepository.listCompetitions();
        List<JSONObject> ChampionshipsJSONList  = new ArrayList<>();
        for(String championship : championships){
            JSONObject championshipJson = new JSONObject();
            if(championship != null){
                championshipJson.put("Value", championship);
                switch (championship){
                    case "bundesliga":
                        championshipJson.put("Name","Bundesliga");
                        break;
                    case "eredivisie":
                        championshipJson.put("Name","Eredivisie");
                        break;
                    case "jupiler-pro-league":
                        championshipJson.put("Name","Jupiler Pro League");
                        break;
                    case "laliga":
                        championshipJson.put("Name","LaLiga");
                        break;
                    case "liga-portugal-bwin":
                        championshipJson.put("Name","Liga Portugal");
                        break;
                    case "ligue-1":
                        championshipJson.put("Name","Ligue 1");
                        break;
                    case "premier-league":
                        championshipJson.put("Name","Premier League");
                        break;
                    case "premier-liga":
                        championshipJson.put("Name","Premier Liga");
                        break;
                    case "serie-a":
                        championshipJson.put("Name","Serie A");
                        break;
                    case "super-league-1":
                        championshipJson.put("Name","Souper Ligka Ellada");
                        break;
                    case "super-lig":
                        championshipJson.put("Name","Süper Lig");
                        break;
                    case "superligaen":
                        championshipJson.put("Name","Superligaen");
                        break;
                    case "scottish-premiership":
                        championshipJson.put("Name","Scottish Premiership");
                        break;

                }

                ChampionshipsJSONList.add(championshipJson);
            }
        }
        return ChampionshipsJSONList;
    }


}
