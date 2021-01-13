package com.forge.PortfolioReviewService.models;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import lombok.Generated;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
@Generated()
public class SwaggerUI {
	
	/*
	 * Swagger Home Page
	 * http://localhost:8200/swagger-ui.html#/
	 */
	
	@Bean 
	public Docket swaggerConfig() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select().paths(PathSelectors.ant("/**"))
				.apis(RequestHandlerSelectors.basePackage("com.forge"))
				.build().apiInfo(forgeConfig());
	}
	

	
	public ApiInfo forgeConfig() {
		return new ApiInfo(
				"Forge",
				"Admin Review Service",
				"1.0.0",
				"Terms of service",
				"Revature",
				"Apache 2.0",
				"http://www.apache.org/license/LICENSE-2.0"
			);
	}

}
