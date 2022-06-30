# DSDelivery 
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/brazil-bruno/dsdelivery/blob/main/LICENSE)

# About the project

https://dsdelivery-professional.netlify.app

DSDelivery is a full stack web and mobile application built during the 2ª edition of **DevSuperior Week** (#sds2), event organized by [DevSuperior](https://devsuperior.com.br/cursos "DevSuperior Website").

The application consists of a menu and it is possible to place orders for each of the items listed and then add the address where the orders should be delivered, after placing the order, the data is collected and sent to the mobile app. The mobile app is responsible for listing all pending orders so that the delivery person can deliver each one. After delivery, the delivery person closes the order which is automatically removed from the order list.

## Layout web and mobile
https://www.figma.com/file/9KM3LJbfPU5OH4kEWbPqnC/SDS2-DevSuperior

## Class diagram
![Class diagram](https://raw.githubusercontent.com/devsuperior/sds2/master/assets/modelo-conceitual.png)

## Layer pattern
![Layer pattern](https://raw.githubusercontent.com/devsuperior/sds2/master/assets/camadas.png)

# Technologies used
## Back end
- Java 11
- Spring Boot
- Spring Web
- Spring Data JPA
- Spring Security
- PostgreSQL Driver
- H2 Database
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- bootstrap
- react-router-dom
- @types/react-router-dom
- axios
## Mobile
- HTML / CSS / JS / TypeScript
- React Native
- Expo
- axios
## Deployment in production
- Back end: Heroku
- Front end web: Netlify
- Database: Postgresql

