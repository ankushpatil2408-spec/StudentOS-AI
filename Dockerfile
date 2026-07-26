# =========================
# Stage 1 - Build React Frontend
# =========================
FROM node:20 AS frontend-build

WORKDIR /frontend

COPY frontend/package*.json ./

RUN npm install

COPY frontend/ .

RUN npm run build


# =========================
# Stage 2 - Build Spring Boot Backend
# =========================
FROM eclipse-temurin:21-jdk AS backend-build

WORKDIR /backend

COPY backend/ .

RUN chmod +x mvnw

# Copy React build into Spring Boot static
RUN mkdir -p src/main/resources/static

COPY --from=frontend-build /frontend/dist/ src/main/resources/static/

RUN ./mvnw clean package -DskipTests


# =========================
# Stage 3 - Runtime
# =========================
FROM eclipse-temurin:21-jre

WORKDIR /app

COPY --from=backend-build /backend/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java","-jar","app.jar"]
