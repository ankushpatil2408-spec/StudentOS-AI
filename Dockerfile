
# -------- Frontend Build --------
FROM node:20 AS frontend-build

WORKDIR /frontend
COPY frontend/package*.json ./
RUN npm install

COPY frontend/ .
RUN npm run build

# -------- Backend Build --------
FROM maven:3.9.9-eclipse-temurin-21 AS backend-build

WORKDIR /backend

COPY backend/pom.xml .
COPY backend/mvnw .
COPY backend/.mvn .mvn
RUN chmod +x mvnw

RUN ./mvnw dependency:go-offline

COPY backend/ .

# Copy React build into Spring Boot static resources
RUN mkdir -p src/main/resources/static
COPY --from=frontend-build /frontend/dist ./src/main/resources/static

RUN ./mvnw clean package -DskipTests

# -------- Runtime --------
FROM eclipse-temurin:21-jre

WORKDIR /app

COPY --from=backend-build /backend/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java","-jar","app.jar"]
