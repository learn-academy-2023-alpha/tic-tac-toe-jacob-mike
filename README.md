# ❌ ⭕️ Tic Tac Toe

This is a web game for two players on one device, taking turns. You will have to use component state to keep track of whose turn it is and which squares have been marked by each player. This project will challenge your knowledge of React but should also be an exercise in creating good user experiences.

-Each players turn needs to be a useState(turn and squares marked)

When creating a project it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The square UI will be in its own component. App.js controls of all the data in state, renders the other components, and performs the game logic.

-App.js: logic
-SquareUI.js: Display tic-tac-toe board on browser 

### 📚 User Stories

- As a user, I can see a three by three grid game board on the page.
    Branch: Grid
    -In App.js: use .map to iterate each square component onto the browser. 
    -Use CSS: flex box to wrap and center gameboard

- As a user, I can click on a square to mark it.
    Branch: Mark it 
    -In SquareUI.js: Create onClick attribute on each square, inside the div tag. That onclick attribute wil be equal to a function. Create function to handle the onclick event.iNSIDE THIS FUNCTION WE WILL CALL another function that will handle the game play for this specific function we will pass in index. On our app .js componet we have to create this function that will handle the game play.Inside this function we need to UPDATE the state value after square is clicked. 

- As a user, my partner can click on a square after me and see their mark.
    Branch: player2-click
    -Conditional if/else statements to determine if one index in the array equals anything else besides null. If one of those elements equals X, then switch to player 2. 
    
- As a user, I can't click on a square that has already been marked.
    Branch:
- As a user, when either my partner or I win the game (three squares in a row: horizontally, vertically, or diagonally) I can see a notice telling me which player won.
    Branch: 
- As a user, I can't continue playing the game after the game has been won.
    Branch: 
- As a user, if there are no more squares available, I can see a notice telling me that the game 
has ended.
    Branch: 
- As a user, I can click on a restart button that will clear the game board.
    Branch: 

### 🏔 Stretch Goals

- As a user, I can see a pleasant stylings on the application.
- As a user, I can see a notification that informs me whether it is currently my partner or my turn.
- As a user, I can choose my marker from a predetermined list (X, O, a color, an emoji, etc...).

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).

### 🛠 Resources

- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840)
