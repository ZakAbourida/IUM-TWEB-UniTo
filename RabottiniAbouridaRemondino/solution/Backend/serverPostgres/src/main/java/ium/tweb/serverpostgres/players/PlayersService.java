package ium.tweb.serverpostgres.players;

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

    public List<Integer> getSeasons() {
        return playersRepository.getSeasons();
    }
    public List<JSONObject> advancedSearch(Integer Season, String Country, String Competition, Integer Year_Birth, String Team, String Role) throws JSONException {
        List<Players> players =  playersRepository.advancedSearch(Season,Country,Competition,Year_Birth,Team,Role);
        List<JSONObject> ListPlayers  = new ArrayList<>();
        for(Players player : players){
            JSONObject playerJson = new JSONObject();
            if(player != null){
                playerJson.put("Name", player.getName());
                playerJson.put("Nationality", player.getCountry_of_citizenship());
                if(player.getDate_of_birth() != null){
                    playerJson.put("Year of birth", player.getDate_of_birth().getYear());
                }else{
                    playerJson.put("Year of birth", "N/A");
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
