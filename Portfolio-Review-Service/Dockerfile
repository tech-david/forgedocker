# Build Spring-boot project 
FROM maven:3.6.3-jdk-8-slim AS build
RUN mkdir -p /workspace
WORKDIR /workspace
COPY pom.xml /workspace
COPY src /workspace/src
RUN mvn -f pom.xml clean package


#Run jar file from previous step
FROM openjdk:8-jdk-alpine
COPY --from=build /workspace/target/*.jar app.jar
#This port is where the spring-boot app is running it must match the server port in application.properties
EXPOSE 8200 
ENTRYPOINT ["java", "-jar", "app.jar"]

