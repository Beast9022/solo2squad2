# Solo2Squad

Find travel partners: create trips, send join requests, accept or reject travelers.
Stack: HTML, CSS, vanilla JavaScript (ES modules), Firebase Authentication + Cloud Firestore.

## Pages
index, login, register, trips (search/filter/join/delete), create-trip, profile, requests
(requests to my trips + status of my own requests).

## Run locally
ES modules do not work from file://. Use any local server:

    python3 -m http.server 8000      # then open http://localhost:8000

## Firebase setup
1. Console -> Authentication -> Sign-in method -> enable Email/Password.
2. Console -> Firestore Database -> Create database.
3. Publish the rules in `firestore.rules` (Firestore -> Rules), or run
   `firebase deploy --only firestore:rules`.
4. Authentication -> Settings -> Authorized domains: add your hosting domain.
5. Config lives in `firebase.js`.

## Deploy
    npm i -g firebase-tools
    firebase login
    firebase init        # reuse the existing firebase.json
    firebase deploy

## Data model
- users/{uid}: name, email, city, createdAt
- trips/{id}: tripName, destination, tripDate, tripType, maxMembers, description, createdBy, createdByEmail, createdAt
- joinRequests/{id}: tripId, tripName, tripCreator, userId, userEmail, status (Pending|Accepted|Rejected), createdAt
