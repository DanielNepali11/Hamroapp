package com.fifalover.FifaLoverBackend.service;
import com.fifalover.FifaLoverBackend.model.PlayerNames;
import java.util.List;

public interface PlayerNamesService {
    public PlayerNames savePlayerNames(PlayerNames playerNames);
    public List<PlayerNames> getAllPlayerNames();
    public String deletePlayerName(String name);
}
