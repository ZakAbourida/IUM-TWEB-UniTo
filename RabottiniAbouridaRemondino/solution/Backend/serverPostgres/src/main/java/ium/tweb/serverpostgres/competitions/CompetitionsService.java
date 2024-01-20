package ium.tweb.serverpostgres.competitions;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * <h1>Competitions Service</h1>
 * <h3>Within this class all operations will be carried out on requests and data entering and leaving the database. (Data refinement)</h3>
 */
@Service
public class CompetitionsService {
    private final CompetitionsRepository competitionsRepository;

    @Autowired
    public CompetitionsService(CompetitionsRepository competitionsRepository) {
        this.competitionsRepository = competitionsRepository;
    }

    /**
     * <li>Send data to repository to save data to database.</li>
     * @param competitions JSON file containing the competitions
     */
    public void saveCompetitions(List<Competitions> competitions) {
        competitionsRepository.saveAll(competitions);
    }

    /**
     *<li>
     * The data received from the database is optimized to be represented on web pages.</li>
     * <li>The JSON object contains the optimized name and associated championship code.</li>
     * @return List of competitions es. {Name: "Bundesliga", Value:"bundesliga"}
     * @throws JSONException Handle errors
     */
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