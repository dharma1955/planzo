package com.project.sprint.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.project.sprint.dto.LoginDto;
import com.project.sprint.entity.User;
import com.project.sprint.repository.UserRepository;

@Service
public class LoginService {

    private final UserRepository userRepository;

    public LoginService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public boolean verifyUser(LoginDto loginDto) {

        Optional<User> user =
                userRepository.findByUserName(loginDto.getUserName());

        if (user.isPresent()) {
            return user.get().getPassword()
                       .equals(loginDto.getUserPassword());
        }

        return false;
    }
    public void registerUser(LoginDto loginDto) {
    	User user = new User();
    	user.setUserName(loginDto.getUserName());
    	user.setPassword(loginDto.getUserPassword());
    	userRepository.save(user);
    }
}