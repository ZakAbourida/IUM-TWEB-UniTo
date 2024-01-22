package ium.tweb.serverpostgres;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.event.EventListener;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;
import org.springframework.core.io.ClassPathResource;
import java.io.InputStream;

@SpringBootApplication
public class ServerPostgresApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServerPostgresApplication.class, args);
    }

    /**
     * <h2>Listener that waits for Springboot startup to complete and then automatically uploads JSON data to the Postgres server</h2>
     */
    @EventListener(ApplicationReadyEvent.class)
    public void postJsonData() {
        try {
            postJson("http://localhost:8081/load_clubs", "data/clubs.json");
            postJson("http://localhost:8081/load_competitions", "data/competitions.json");
            postJson("http://localhost:8081/load_players", "data/players.json");
            postJson("http://localhost:8081/load_playervaluations", "data/player_valuations.json");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void postJson(String url, String filePath) throws Exception {
        RestTemplate restTemplate = new RestTemplate();
        ClassPathResource jsonFile = new ClassPathResource(filePath);
        String jsonContent;

        try (InputStream inputStream = jsonFile.getInputStream()) {
            jsonContent = new String(inputStream.readAllBytes());
        }

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> request = new HttpEntity<>(jsonContent, headers);
        restTemplate.postForObject(url, request, String.class);
    }
}