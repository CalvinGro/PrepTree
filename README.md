# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Hour Log
Calvin & Silas 3/31/26   start 3:30pm  | end 4:30pm  - spent learning react
Calvin & Silas 4/7/26    start 2:45pm  | end 4:00pm  - starting backend design
Calvin         4/22/26   start 2:40pm  | end 4:45pm  - built out board and pieces classes
                                                       started working on isInCheck method
Silas          4/22/26   start 3:00pm  | end 4:45pm  - started working on isInCheck method
Calvin         4/22/26   start 6:45pm  | end 9:40pm  - finished the isInCheck method, wrote terminal display methods,
                                                       wrote findPieces and makeMove
Calvin         4/22/26   start 10:15pm | end 10:50pm - wrote methods to find moves for bishops, queens, and rooks
Calvin         4/23/26   start 7:20am  | end 7:50am  - wrote method to find moves for knight
Calvin         4/23/26   start 11:15am | end 11:50am - wrote methods to find pawn and king moves
Calvin         4/23/26   start 7:45pm  | end 9:30pm  - wrote findValidMoves, starting_locations, and added documentation
                                                     - to all the methods and classes.
Calvin         4/24/26   start 8:30am  | end 8:50am  - started working on playTerminalGame
Calvin         4/24/26   start 9:50am  | end 11:45am - Finished playTerminalGame, fixed castling logic and some move bugs
Calvin         4/24/26   start 2:45pm  | end 4:45pm  - Created tests for bishop and knight moves. Additionally, used TDD
                                                       to add pawn promotion and the accompanying test.
Calvin         4/24/26   start 8:15pm  | end 8:30pm  - Created test for queen moves.
Calvin         4/25/26   start 2:00pm  | end 
Silas          4/25/26   start 2:00pm  | end 

## features to added
- 3 fold rep TDD
- 50 move rule TDD
- game clock
- more tests (move verification, piece pinning, check, checkmate, etc.)
