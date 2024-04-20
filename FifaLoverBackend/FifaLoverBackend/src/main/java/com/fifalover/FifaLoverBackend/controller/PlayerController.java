package com.fifalover.FifaLoverBackend.controller;

import com.fifalover.FifaLoverBackend.model.Player;
import com.fifalover.FifaLoverBackend.model.PlayerNames;
import com.fifalover.FifaLoverBackend.service.PlayerNamesService;
import com.fifalover.FifaLoverBackend.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/player")
@CrossOrigin(origins = "*")
public class PlayerController {
    @Autowired
    private PlayerService playerService;

    @Autowired
    private PlayerNamesService playerNamesService;

    @PostMapping("/add")
    public String add(@RequestBody Player player) {
        if (player.getName() == null || player.getCountry() == null
                || player.getClub() == null || player.getLeague() == null || player.getDescription() == null) {
            return "One or more fields are missing. Player not added.";
        } else if (player.getAge() <= 0) {
            return "Age must be a positive number. Player not added.";
        }else {
            playerService.savePlayer(player);
            playerNamesService.deletePlayerName(player.getName());
            return "New player has been added";
        }
    }

    @GetMapping("/getAll")
    public List<Player> getAllPlayers(){
        return playerService.getAllPlayers();
    }

    @GetMapping("/getPlayer/{id}")
    public Player getPlayerById(@PathVariable int id){
        return playerService.getPlayerById(id);
    }

    @DeleteMapping("/deletePlayer/{id}")
    public ResponseEntity<Player> deletePlayerById(@PathVariable int id){
        Player player = playerService.getPlayerById(id);
            playerService.deletePlayer(player);
            PlayerNames playerNames = new PlayerNames();
            playerNames.setName(player.getName());
            playerNamesService.savePlayerNames(playerNames);
            playerService.deletePlayer(player);
            return ResponseEntity.ok(player);
    }

    @PutMapping("/update")
    public String updatePlayer(@RequestBody Player player){
        playerService.updatePlayer(player);
        return "Player information is updated successfully.";
    }

    @GetMapping("/getByName/{name}")
    public List<Player> findPlayersByName(@PathVariable String name){
        return playerService.getPlayerByName(name);
    }
}
