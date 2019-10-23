#How to run the code
Run the following commands on the terminal in the project's folder:

1 - npm run build
2 - npm install -g serve or yarn global add serve
3 - serve -s build
4 - open your browser at http://localhost:5000

#Explanation of architecture

Main Framework: I used React because the shadow dom makes the render way faster . Also It's great to create reusable components. All that together will result in a faster delivery.

State Management: I used Redux because it's very powerful in centralizing and controllign the state of the application. Then all React components could get this information in a concise way. Also I used Redux Saga to control the flow of async state updates.

Style: I used styled-components because it works very well with React since it works as components too. Also it's super easy to make dynamic adaptations in some components.Besides that I used "react-icons" to have access to well designed and performatic svg icons and I used "polished" to manage different brightness of color without losing the fidelity of original color and stick with theme of the application.

API Calls: I used axios because it gives a simple way to make http requests and also create patterns to the api calls.

#If you had more time, what would you like to improve?

- Well, if I had more time I would like to improve the overall style, since I'm not a UI/UX developer, I would do more search and gather some references to improve it. I would create a theme for the layout and test the application to get 100% coverage. Also It would be cool to create a simple back-end in Node to take care of the database and use websockets to get a better user experience in the chat screen.
