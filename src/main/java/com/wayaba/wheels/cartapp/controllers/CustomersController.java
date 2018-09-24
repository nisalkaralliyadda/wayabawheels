package com.wayaba.wheels.cartapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartException;

import com.wayaba.wheels.cartapp.models.Customer;
import com.wayaba.wheels.cartapp.models.LoginParam;
import com.wayaba.wheels.cartapp.repositories.CustomerRepository;

@RestController
@RequestMapping("/api/v1/customer")
public class CustomersController {

	@Autowired
	CustomerRepository repo;
	
	@PostMapping("/signin")
	@ResponseStatus(HttpStatus.OK)
	public void addCustomer(@RequestBody Customer customer) {
		repo.save(customer);
	}
	
	@PostMapping("/login")
	public Customer login(@RequestBody LoginParam param) {
		List<Customer> c = repo.isUserExist(param.getUsername(), param.getPassword()); 
		if(c == null) {
			 throw new MultipartException("Invalid Username or Password");
		}
		return c.get(0);
	}

}
