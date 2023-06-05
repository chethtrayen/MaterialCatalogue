# Material Catalogue

## Installation

Server

```
- cd server
- npm i
```

Client

```
- cd client
- npm i
```

## How to run

Server

```
- cd server
- npm start
```

Client

```
- cd client
- npm start
```

## How to test

Unit testing is only implemented in the server

```
- cd server
- npm test
```

## Project Details

Time spent: 6 hours

### System Design

The system was designed for reusability, small, and testability code. For the client, there are three main layers: components, modules, and pages. Components are small, flexible, and reused on all layers. Modules are larger components that can be specific to pages or other modules. Pages are the largest component made from modules and components. Pages handle shared data hooks across components and modules without a single data store.

For the server, it has two core parts routes and repo. The purpose of this system is to have separate roles and interfaces for easier code management and testing. The routes handle requests and responses from the client. The repo handle database request and packaging response back to the request handler.

### TradeOff

- Validation logic is copied in server and client. It should be shared across both domains
- Color only accepts Hexcode
- Client is not responsive
- Migration is ran on server start
- Unit testing is only done validation layer
- Weak data validation

### Questions

- Can color be any value other than hexcode?
- What data validation is needed?
- What does the responsive design look like?
