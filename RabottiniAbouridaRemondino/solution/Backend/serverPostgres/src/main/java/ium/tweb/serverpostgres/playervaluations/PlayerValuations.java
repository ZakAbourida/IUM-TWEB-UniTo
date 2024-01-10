package ium.tweb.serverpostgres.playervaluations;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "player_valuations")
public class PlayerValuations {

    @Id
    @Column(name = "player_id")
    private Long player_id;

    @Column(name = "last_season")
    private Integer last_season;

    @Column(name = "datetime")
    private LocalDate datetime;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "dateweek")
    private LocalDate dateweek;

    @Column(name = "market_value_in_eur")
    private BigDecimal market_value_in_eur;

    @Column(name = "n")
    private Integer n;

    @Column(name = "current_club_id")
    private Long current_club_id;

    @Column(name = "player_club_domestic_competition_id", columnDefinition = "TEXT")
    private String player_club_domestic_competition_id;


    public PlayerValuations() {
    }

    public Long getPlayer_id() {
        return player_id;
    }

    public void setPlayer_id(Long player_id) {
        this.player_id = player_id;
    }

    public Integer getLast_season() {
        return last_season;
    }

    public void setLast_season(Integer last_season) {
        this.last_season = last_season;
    }

    public LocalDate getDatetime() {
        return datetime;
    }

    public void setDatetime(LocalDate datetime) {
        this.datetime = datetime;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalDate getDateweek() {
        return dateweek;
    }

    public void setDateweek(LocalDate dateweek) {
        this.dateweek = dateweek;
    }

    public BigDecimal getMarket_value_in_eur() {
        return market_value_in_eur;
    }

    public void setMarket_value_in_eur(BigDecimal market_value_in_eur) {
        this.market_value_in_eur = market_value_in_eur;
    }

    public Integer getN() {
        return n;
    }

    public void setN(Integer n) {
        this.n = n;
    }

    public Long getCurrent_club_id() {
        return current_club_id;
    }

    public void setCurrent_club_id(Long current_club_id) {
        this.current_club_id = current_club_id;
    }

    public String getPlayer_club_domestic_competition_id() {
        return player_club_domestic_competition_id;
    }

    public void setPlayer_club_domestic_competition_id(String player_club_domestic_competition_id) {
        this.player_club_domestic_competition_id = player_club_domestic_competition_id;
    }
}