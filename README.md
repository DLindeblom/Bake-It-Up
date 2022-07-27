# Midterm Project: Bake It Up 🎂🍪🍰

Bake-It-Up is an E-commerce app where you can put baked goods for sale. Via Bake-It-Up, buyers can find the items they are looking for quickly, and easily contact sellers.

## Contributors:

- 👨🏼‍💻 [Dan Lindeblom](https://github.com/DLindeblom): the master of backend and data manipulater
- 👩🏻‍🎨 [Ann Bui](https://github.com/thaian161): the frontend lover and amateur UX/UI designer

## Entity Relationship Diagram (ERD)

!["ERD"](https://github.com/thaian161/Bake-It-Up/blob/master/docs/bake-it-up-ERD.png)

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
- Using Ajax to updates info asynchronously without reloading the whole page.
- Register, Log-In page

## Final Product

### [👋 Watch Live Demo Here 👋](https://youtu.be/0k2WaGUxCJ0)

#### _Landing Page_

!["Landing Page"](https://github.com/thaian161/Bake-It-Up/blob/master/docs/BIU-landing.png)

#### _Users Favorites Page_

!["Users Favorites Page"](https://github.com/thaian161/Bake-It-Up/blob/master/docs/fav.png)

#### _Users Main Page_

!["Users Main Page"](https://github.com/thaian161/Bake-It-Up/blob/master/docs/buyer%20main.png)

#### _Filter Feature_

!["Filter Feature"](https://github.com/thaian161/Bake-It-Up/blob/master/docs/filter.png)

#### _Admins Main Page_

!["Admin Main Page"](https://github.com/thaian161/Bake-It-Up/blob/master/docs/admin-main.png)

#### _Admins Sell Baked Good Form_

!["Admin Main Page"](https://github.com/thaian161/Bake-It-Up/blob/master/docs/admin-form.png)

#### _Admins SOLD feature_

!["Admin Main Page"](https://github.com/thaian161/Bake-It-Up/blob/master/docs/SOLD%20feature.png)

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
9. Start to sell or buy your baked goodies. LET'S BAKE IT UP!!!

<br>

> **Hope you enjoy the app and have a nice day :D**
