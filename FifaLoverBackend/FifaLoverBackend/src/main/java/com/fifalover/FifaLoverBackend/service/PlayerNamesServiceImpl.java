package com.fifalover.FifaLoverBackend.service;

import com.fifalover.FifaLoverBackend.model.PlayerNames;
import com.fifalover.FifaLoverBackend.repository.PlayerNamesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerNamesServiceImpl implements PlayerNamesService{

    @Autowired
    private PlayerNamesRepository playerNamesRepository;

    @Override
    public List<PlayerNames> getAllPlayerNames() {
        return playerNamesRepository.findAll();
    }

    @Override
    public PlayerNames savePlayerNames(PlayerNames playerNames) {
        return playerNamesRepository.save(playerNames);
    }

    @Override
    public String deletePlayerName(String name) {
        playerNamesRepository.delete(playerNamesRepository.findByName(name));
        return "Name has been removed";
    }
}
