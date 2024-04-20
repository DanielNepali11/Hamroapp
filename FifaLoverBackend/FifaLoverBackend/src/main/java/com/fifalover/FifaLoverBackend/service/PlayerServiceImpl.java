package com.fifalover.FifaLoverBackend.service;

import com.fifalover.FifaLoverBackend.model.Player;
import com.fifalover.FifaLoverBackend.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerServiceImpl implements PlayerService{

    @Autowired
    private PlayerRepository playerRepository;

    @Override
    public void savePlayer(Player player) {
        playerRepository.save(player);
    }

    @Override
    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    @Override
    public Player getPlayerById(int id) {
        return playerRepository.findById(id).orElse(null);
    }

    @Override
    public void deletePlayer(Player player) {
         playerRepository.delete(player);
    }

    @Override
    public void updatePlayer(Player player) {
        Player oldPlayer = playerRepository.findById(player.getId()).orElse(null);
        if(oldPlayer != null) {
            oldPlayer.setAge(player.getAge());
            oldPlayer.setName(player.getName());
            oldPlayer.setClub(player.getClub());
            oldPlayer.setCountry(player.getCountry());
            oldPlayer.setLeague(player.getLeague());
            oldPlayer.setDescription(player.getDescription());
            playerRepository.save(oldPlayer);
        }
    }

    @Override
    public List<Player> getPlayerByName(String name) {
        return playerRepository.findByName(name);
    }
}
