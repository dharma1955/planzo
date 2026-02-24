package com.project.sprint.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.sprint.dto.LoginDto;
import com.project.sprint.service.LoginService;

@RestController
@CrossOrigin(origins ="http://localhost:3000")
public class LoginController {

    private final LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping("/login")
    public boolean loginVerification(@RequestBody LoginDto loginDto) {

        if (loginService.verifyUser(loginDto)) {
            System.out.println(loginDto.getUserName() + " " + loginDto.getUserPassword());
            return true;
        }

        return false;
    }
    @PostMapping("/signup")
    public String signupUser(@RequestBody LoginDto loginDto) {
    	loginService.registerUser(loginDto);
    	return"Success";
    }
}