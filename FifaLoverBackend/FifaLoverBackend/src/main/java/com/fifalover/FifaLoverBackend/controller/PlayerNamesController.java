package com.fifalover.FifaLoverBackend.controller;

import com.fifalover.FifaLoverBackend.model.PlayerNames;
import com.fifalover.FifaLoverBackend.service.PlayerNamesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/playerNames")
@CrossOrigin(origins = "*")
public class PlayerNamesController {
    @Autowired
    private PlayerNamesService playerNamesService;

    @PostMapping("/add")
    public String add(@RequestBody PlayerNames playerNames){
        playerNamesService.savePlayerNames(playerNames);
        return "New player name has been added";
    }

    @GetMapping("/getAll")
    public List<PlayerNames> getAllPlayerNames(){
        return playerNamesService.getAllPlayerNames();
    }
}
