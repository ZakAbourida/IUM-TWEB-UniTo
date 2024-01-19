package ium.tweb.serverpostgres.players;

import ium.tweb.serverpostgres.clubs.Clubs;
import org.json.JSONArray;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.json.JSONObject;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.time.Year;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@Service
public class PlayersService {
    private final PlayersRepository playersRepository;

    @Autowired
    public PlayersService(PlayersRepository playersRepository) {
        this.playersRepository = playersRepository;
    }

    public void savePlayers(List<Players> players) {
        playersRepository.saveAll(players);
    }

    public List<String> getRole() {
        return playersRepository.getRole();
    }

    public List<Integer> yearsBirth(){
        return playersRepository.yearsBirth();
    }

    public JSONObject InfoPlayer(String Name) throws JSONException, IOException {
        Players player =  playersRepository.infoPlayer(Name);
        JSONObject playerJson = new JSONObject();
        if (player != null) {
            String encodedImage = encodeImageToBase64(player.getImage_url());
            playerJson.put("Name", player.getName());
            playerJson.put("Height", player.getHeight_in_cm());
            playerJson.put("Position", player.getSub_position());
            playerJson.put("Age", Year.now().getValue() - player.getDate_of_birth().getYear());
            playerJson.put("Market Value", player.getMarket_value_in_eur());
            playerJson.put("Nationality", player.getCountry_of_citizenship());
            playerJson.put("Team", player.getCurrent_club_name());
            playerJson.put("Image",encodedImage);

        }
        return playerJson;
    }

    public List<String> getCountry() {
        return playersRepository.getCountry();
    }

    public List<Players> squadPlayers(String squadName) {return playersRepository.squadPlayers(squadName);}

    public List<Integer> getSeasons() {
        return playersRepository.getSeasons();
    }
    public List<JSONObject> advancedSearch(Integer Season, String Country, String Competition, Integer Year_Birth, String Team, String Role) throws JSONException {
        if (Competition != null) {
            switch (Competition) {
                case "Bundesliga":
                    Competition = "bundesliga";
                    break;
                case "Eredivisie":
                    Competition = "eredivisie";
                    break;
                case "Jupiler Pro League":
                    Competition = "jupiler-pro-league";
                    break;
                case "LaLiga":
                    Competition = "laliga";
                    break;
                case "Liga Portugal":
                    Competition = "liga-portugal-bwin";
                    break;
                case "Ligue 1":
                    Competition = "ligue-1";
                    break;
                case "Premier League":
                    Competition = "premier-league";
                    break;
                case "Premier Liga":
                    Competition = "premier-liga";
                    break;
                case "Serie A":
                    Competition = "serie-a";
                    break;
                case "Souper Ligka Ellada":
                    Competition = "super-league-1";
                    break;
                case "Süper Lig":
                    Competition = "super-lig";
                    break;
                case "Superligaen":
                    Competition = "superligaen";
                    break;
                case "Scottish Premiership":
                    Competition = "scottish-premiership";
                    break;
                default:
                    break;
            }
        }
        List<Players> players =  playersRepository.advancedSearch(Season,Country,Competition,Year_Birth,Team,Role);
        List<JSONObject> ListPlayers  = new ArrayList<>();
        for(Players player : players){
            JSONObject playerJson = new JSONObject();
            if(player != null){
                playerJson.put("Name", player.getName());
                playerJson.put("Nationality", player.getCountry_of_citizenship());
                if(player.getDate_of_birth() != null){
                    playerJson.put("Birth", player.getDate_of_birth());
                }else{
                    playerJson.put("Birth", "N/A");
                }
                playerJson.put("Position", player.getSub_position());
                playerJson.put("Team", player.getCurrent_club_name());
                ListPlayers.add(playerJson);
            }
        }
        return ListPlayers;
    }


    //Metodo che prende l'url dell'immagine come parametro e la scarica in base64.
    public static String encodeImageToBase64(URL imageUrl) throws IOException {
        try (InputStream inputStream = imageUrl.openStream()) {
            byte[] imageBytes = inputStream.readAllBytes();
            return Base64.getEncoder().encodeToString(imageBytes);
        }
    }
}
