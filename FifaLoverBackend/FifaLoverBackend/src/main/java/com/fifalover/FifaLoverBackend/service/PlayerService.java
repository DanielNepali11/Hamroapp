package com.fifalover.FifaLoverBackend.service;

import com.fifalover.FifaLoverBackend.model.Player;

import java.util.List;

public interface PlayerService {
    public void savePlayer(Player player);
    public List<Player> getAllPlayers();
    public Player getPlayerById(int id);
    public void deletePlayer(Player player);
    public void updatePlayer(Player player);
    public List<Player> getPlayerByName(String name);
}
