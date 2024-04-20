package com.fifalover.FifaLoverBackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@SpringBootApplication
public class FifaLoverBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(FifaLoverBackendApplication.class, args);
	}

	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
				.allowedOrigins("*")
				.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
				.allowedHeaders("*")
				.allowCredentials(true)
				.maxAge(3600);
	}

}
