package com.wayaba.wheels.cartapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.wayaba.wheels.cartapp.models.BodyPart;
import com.wayaba.wheels.cartapp.repositories.PartsRepository;

@RestController
@RequestMapping("/api/v1/parts")
public class PartsController {
	
	@Autowired
	PartsRepository partsRepo;
	
	@GetMapping("/all")
	public List<BodyPart> getAllParts(){
		return partsRepo.findAll();
	}
	
	@PostMapping("/add")
	@ResponseStatus(HttpStatus.OK)
	public void addPart(@RequestBody BodyPart part) {
		partsRepo.save(part);
	}

}
