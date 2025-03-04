package ium.tweb.serverpostgres.competitions;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
/**
 * <h1>Competitions Class</h1>
 * <h3>The Competitions class defines the table with its columns for the Postgres server.</h3>
 * <h3><li>Since the annotations are sufficient to understand the context of the code, every line of code will not be commented out.</li></h3>
 */
@Entity
@Table(name = "competitions")
public class Competitions {

    /**
     * <h2>All columns relative to the table</h2>
     */

    @Id
    @Column(name = "competition_id")
    private String competition_id;

    @Column(name = "competition_code")
    private String competition_code;

    @Column(name = "name")
    private String name;

    @Column(name = "sub_type")
    private String sub_type;

    @Column(name = "type")
    private String type;

    @Column(name = "country_id")
    private Integer country_id;

    @Column(name = "country_name")
    private String country_name;

    @Column(name = "domestic_league_code")
    private String domestic_league_code;

    @Column(name = "confederation")
    private String confederation;

    @Column(name = "url")
    private String url;

    /**
     * <h2>Empty constructor</h2>
     */
    public Competitions() {
    }

    /**
     * <h2>Below are all the getters and setters</h2>
     */
    public String getCompetition_id() {
        return competition_id;
    }

    public void setCompetition_id(String competition_id) {
        this.competition_id = competition_id;
    }

    public String getCompetition_code() {
        return competition_code;
    }

    public void setCompetition_code(String competition_code) {
        this.competition_code = competition_code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSub_type() {
        return sub_type;
    }

    public void setSub_type(String sub_type) {
        this.sub_type = sub_type;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getCountry_id() {
        return country_id;
    }

    public void setCountry_id(Integer country_id) {
        this.country_id = country_id;
    }

    public String getCountry_name() {
        return country_name;
    }

    public void setCountry_name(String country_name) {
        this.country_name = country_name;
    }

    public String getDomestic_league_code() {
        return domestic_league_code;
    }

    public void setDomestic_league_code(String domestic_league_code) {
        this.domestic_league_code = domestic_league_code;
    }

    public String getConfederation() {
        return confederation;
    }

    public void setConfederation(String confederation) {
        this.confederation = confederation;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}