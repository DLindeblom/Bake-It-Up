# Midterm Project at LHL: Bake It Up
-------------------------------
Bake-It-Up is an app where you can put baked goods for sale. Via Bake-It-Up, buyers  can find the items they are looking for quickly, and easily contact sellers.

## Contributors: 
- 👨🏼‍💻 [Dan Lindeblom](https://github.com/DLindeblom): the master of backend and data manipulater
- 👩🏻‍🎨 [Ann Bui](https://github.com/thaian161): the frontend lover and amateur UX/UI designer

## Entity Relationship Diagram (ERD)
!["ERD"]()

## Main Features:

### Admins/Sellers 🔐:
- post items, which can be seen by others
- remove items from the site
- mark items as SOLD!,
- send a message via app, email, or text back on negotiations in buying the said item

### Buyers 💁🏻‍♀️🙆🏻‍♂️:
- buyers can see featured items on a main feed
- buyers can filter items by price,
- buyers can favourite items to check up on them later
- buyers can send messages to the user that is listing the item

## Features we wish to accomplish:
- In-app messaging
- Using express-fileupload to upload photo file directly to app
- Using Ajax to updates info  asynchronously without reloading the whole page.
- Register, Log-In page

## Final Product

### [👋 Watch Live Demo Here 👋](https://youtu.be/x8zQIm24-B8)

#### _Landing Page_

!["Landing Page"]()

#### _Users Main Page_

!["Users Main Page"]()

#### _Users Favorites Page_

!["Users Favorites Page"]()

#### _Filter Feature_

!["Filter Feature"]()

#### _Admins Main Page_

!["Admin Main Page"]()

#### _Admins Sell Baked Good Form_

!["Admin Main Page"]()

#### _Admins SOLD feature_

!["Admin Main Page"]()

## Dependencies

- body-parser: ^1.20.0
- chalk: ^2.4.2
- cookie-parser:^1.4.6
- dotenv: ^2.0.0
- ejs: ^2.6.2,
- express: ^4.17.1,
- morgan: ^1.9.1,
- pg: ^8.5.0
- sass:^1.35.1

## Dev-Dependencies

- nodemon


## Getting Started

1. Clone this repos.
2. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
3. Update the .env file with your correct local information 
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
4. Install dependencies: `npm i`
5. Fix to binaries for sass: `npm rebuild node-sass`
6. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`
9. Start to sell or buy your bake goodies

> **Hope you enjoy the app and have a nice day :D**
