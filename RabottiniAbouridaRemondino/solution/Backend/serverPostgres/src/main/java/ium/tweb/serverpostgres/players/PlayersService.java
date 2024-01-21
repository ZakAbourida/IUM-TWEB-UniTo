package ium.tweb.serverpostgres.players;

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

/**
 * <h1>Players Service</h1>
 * <h3>Within this class all operations will be carried out on requests and data entering and leaving the database. (Data refinement)</h3>
 */
@Service
public class PlayersService {
    private final PlayersRepository playersRepository;

    @Autowired
    public PlayersService(PlayersRepository playersRepository) {
        this.playersRepository = playersRepository;
    }

    /**
     *<li>Send data to repository to save data to database</li>
     * @param players JSON file containing the players
     */
    public void savePlayers(List<Players> players) {
        playersRepository.saveAll(players);
    }

    /**
     * <li>
     * Passes the call to the repository which returns the locations.</li>
     * @return List of positionig es. {'Goalkeeper','Left Wing',ecc}
     */
    public List<String> getRole() {
        return playersRepository.getRole();
    }

    /**
     * <li>Transmits the call to the repository and returns the list of years.</li>
     * @return List of years es.{1968,1970,1971, ecc}
     */
    public List<Integer> yearsBirth(){
        return playersRepository.yearsBirth();
    }

    /**
     * <li>Transmits the call with the name of a player as input and returns a json object containing the information relating to a player.</li>
     * @param Name Name of a player
     * @return List of selected information for players es {Name: "Bukayo Saka", Height:175, Position:"Left Winger",ecc}
     * @throws JSONException Handle errors
     * @throws IOException Handle errors
     */
    public JSONObject InfoPlayer(String Name) throws JSONException, IOException {
        Players player =  playersRepository.infoPlayer(Name);
        JSONObject playerJson = new JSONObject();
        if (player != null) {
            String encodedImage = encodeImageToBase64(player.getImage_url());
            playerJson.put("Name", player.getName());
            playerJson.put("Height", player.getHeight_in_cm());
            playerJson.put("Position", player.getSub_position());
            playerJson.put("Age", Year.now().getValue() - player.getDate_of_birth().getYear());
            playerJson.put("MarketValue", player.getMarket_value_in_eur());
            playerJson.put("Nationality", player.getCountry_of_citizenship());
            playerJson.put("Team", player.getCurrent_club_name());
            playerJson.put("Image",encodedImage);

        }
        return playerJson;
    }

    /**
     * <li>
     * Transmits the call to the repository and returns the list of countries.</li>
     * @return List of countries es. {'Albania', 'Armenia', ecc}
     */
    public List<String> getCountry() {
        return playersRepository.getCountry();
    }

    /**
     * <li>
     * Passes the call to the repository with the team name as input and returns the associated players.</li>
     * @param squadName Name of a team es. Arsenal FC
     * @return List of player of a team es {'Bukauo Saka,'Aaron Ramsdale' ecc}
     */
    public List<Players> squadPlayers(String squadName) {return playersRepository.squadPlayers(squadName);}

    /**
     * <li>
     * Passes the call to the repository with the competition_id  as input and returns the associated players.</li>
     * @param compId ID of the competition
     * @return List of player of a competition es {'Bukauo Saka,'Aaron Ramsdale' ecc}
     */
    public List<Players> compPlayers(String compId) {return playersRepository.compPlayers(compId);}

    /**
     *
     * @return List of seasons es {2003,2004,2005,2006, ecc}
     */
    public List<Integer> getSeasons() {
        return playersRepository.getSeasons();
    }

    /**
     * <li>
     * Passes the call to the repository with the following parameters and returns a list of players. It is possible to pass all the parameters or none or only some, for a more specific and targeted search.</li>
     * @param Season es. 2020
     * @param Country es. Italy
     * @param Competition es. Bundesliga
     * @param Year_Birth es. 2000
     * @param Team es. Juventus FC
     * @param Role es. Goalkeeper
     * @return List of JSON objects. JSON objects contain the players found based on the input parameters and their primary information.
     * @throws JSONException Handle errors
     */
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


    /**
     *<li>Method that takes the URL of the player's image as a parameter and converts it into a base 64 image. It returns the image which will then be inserted into the json object containing information about a player.</li>
     * @param imageUrl
     * @return Base 64 decoded image.
     * @throws IOException Handle errors
     */
    public static String encodeImageToBase64(URL imageUrl) throws IOException {
        try (InputStream inputStream = imageUrl.openStream()) {
            byte[] imageBytes = inputStream.readAllBytes();
            return Base64.getEncoder().encodeToString(imageBytes);
        }
    }
}