# Europians on UK rails
## Software Engerneering - Summative 1

<p>
<details>
<summary>What is Europians on UK rails? 🇪🇺->🇬🇧🚆</summary>

🇪🇺->🇬🇧 Why?
-
With a modern world that allows you to wake up in one country and be in another by lunchtime, it is important that you understand some of the differences between how different countries operate. An example of this is the Euro Tunnel that connects Britain & France, enabling people from all over Europe to travel to the UK effortlessly. 

🧮🇬🇧 For who?
-
Europeans on UK Rails (EoUKR) aims to both educate and assist individuals who are not from the UK on what units of measurement are used in the UK, the web app has a user journey that teaches you about Imperial & Metric measurements and how the UK has chosen to combine the two to have their own unit of measurement. 

➗✖️ How?
-
EoUKR consists of a HTML web app base that hosts a user story and a Java Script converter at the end of the story that helps the user to convert between Miles Per Hour (MPH) <-> Kilometers Per Hour (KM/H) & Litres <-> Gallons. 

👉🏻📱 Using the app
-
You can easily navigate through the app using the built-in buttons at the bottom of each page. There is also a back arrow as you progress with the user journey, so you can return to the previous page effortlessly. I also added a button on the home page that enables you to skip straight to the converter if you want!

![An animated GIF showing the web app and navigating through the user story](https://github.com/T-J-Summer/SE-Summative-1/blob/main/AppDemo.gif)

</details>



<p>
<details>
<summary>The design & Prototype 📑📱</summary>

📑 The web apps' design
-
It is vital when designing an application that it is accessible to all users so they can find the information they need without difficulty, this means that the colours chosen for the application must not cause eye strain, and the text on the pages must be easy for all to read. Additionally, the journey for users must be easy to navigate and make sense. With this web app, I chose to follow my organisation's user accessibility documentation when picking colours which states:
- The background of a production should be either light grey or creme to reduce eye strain
- Contrasting colours should be used to ensure text stands out over the background
- If emojis are used, they must be universally recognised so all users understand their meaning without misinterpretation

Following these rules, my web app uses a cream background with black text so users can easily read the text on the web app. Black buttons are also used with white text to ensure the user can easily read the content.

📱↣📱⃔ Proposed web app pages & Navigation
-
To allow for ease of navigation, I used Black buttons with white text to clearly indicate to the user how to progress to the next page. Additionally, I used the universally recognised back arrow to enable users to return to the previous page that they were on with ease. Let's have a look at the pages and what they do!
1. Welcome Screen:
The welcome screen introduces the user to what EoUKR is for and explains that the user will be taken through a story before using the converter. The user is then able to continue or change the language.
2. Language Changer:
This page gives users a clear interface to change the language of the app to suit them, there is a shortcut button to French as people would have used the Eurostar from France to get to the UK.
3. Beginign of User Journey (Q1):
When continuing the story, the user is given some information about the Imperial & Metric systems and how the UK has made their own hybrid, this is followed by the first question used to engage the user.
4. Halfway through User Journey (Q2):
Depending on the user's answer to the previous question the user will either be congratulated for being correct or informed that they weren't quite there, there is then the second question to further engage the user.
5. End of User Journey:
Again, depending on the user's answer they might be congratulated for putting the correct answer, this is followed by a crazy fun fact about the UK's liquid measurements and a button to continue
6. Introduction to The Converter:
This page introduces the user to the converter and informs them of what measurements they can convert between.
7. Mesurement Converter:
The converter will allow the user to enter an imperial unit of measurement and see what it is in metric and vise versa, with a retunr to home button at the bottom.

📱 Prototyping with Figma
-
When designing the web application, I chose to use Figma to visulise how the app would look and how the user would navigate it. I chose Figma because it allows for the app to be designed in detail with text, images and buttons enabling a strong prototype to base the MVP web app on.
Figma also enables you to connect the paged together with their prototyping tools, this enabled me to produce an interacting prototype with realistic user navigation that I can use to base my web app on.

This is what the Figma prototyping tool looks like:
--
![Screenshot of the backend of my Figma with the page links visable](https://github.com/T-J-Summer/SE-Summative-1/blob/main/Figma%20Prototype.png)

This is what the prototype looks like for the user:
--
![Animated GIF showing the Figma prototype working](https://github.com/T-J-Summer/SE-Summative-1/blob/main/FigmaDemo.gif)

</details>



<p>
<details>
<summary>Project Management Approach 📊📂</summary>

📊 Kanban Board
-
To manage this project, I chose to user GitHub Projects as it natively intergrates with GitHub which is where the project is hosted. GitHub projects allows a Kanban Board which helps to catagorise each ticket with lables so you can easily filter the tickets to find the section you are looking for.
With the tickets I have chosen a design tempolate that that clearly outlines what the ticket is for, the activities within it, the dependancies required in order to worlk on this ticket and any additinal notes.
GitHubs Kanban also enables the user to connect pull requests to the ticket allowing for seamless audit logs, in addition to other features I didnt have to use such as asigning actions as I did this project alone.

![Screenshot of my Knban Board showing how it was used](https://github.com/T-J-Summer/SE-Summative-1/blob/main/Kanban%20Board.jpg)

As previously mentoned, this approach allows for the use of lables I chose to customise these lables to ensure they where relivent to my project:
- 🧱 App Development - Any production element of the web app
- 🐛 Bug Fixes - If something isnt working in the web app
- 📝 Design - Any production matireal to help prep for the web app build
- 📄 Documentation - Inprovements or changes to documentation
- 📂⃕ Future Development - Ideas out of the current scope or ability
- 📑 Improvements - Amendments & positive changes
- 🗂️ README - Amendments or additions to the README file
- 🧪 Testing - Any test performed associated with the web app.

Using Git Hub labels was benificial for my project as it enabled me to efficiently lable each ticket so any developer could log on and at a glance find the catagory that they where after, by customising these lables i was able to simplify my ticket management and ensure my documentation was clean. The only drawback i found was when you connected an issue to a ticket the lables where not automaticaly transfered, this lead me to only labling the tickets. If i was to do this project again this is something i would look into to ensure there is an additinal layer of catagorising, however i feel labeling the tickets was sufficent to efficiently directing any developer to where they need to go.

📂⃔⃕ Ticket Layout
-
As previously mentioned i followed a set template when producing my tickets to ensure all ticket fully informed anyone viewing what it is for, and to also to ensure the ticxkets where clear during all stages of the project and i could refer back to them effortlesly.
- Description - This section was used to provide any information as to why the ticket had been produced and what it aims to acheve.
- Objectives - I utilised checkboxes to clearly mark an objective as done when finished and also utilised this feature to convert any objectives i hadnt acheved into new tickets to then be worked on as an inprovemrnt or bug fix. These objectives where used to clearly outlign what steps where being completed as part of this ticket.
- Dependancies - This section was used to inform me what needed to be completed before moving onto the next stage, this helped me to align to the agile approach and complete a stage only when the taks that need to be completer first have been.
- Notes - This section was used for any additnal info about the ticket, for example in the language changer ticket I explaines why it is a future development.

![Screenshot of my Knban Board showing how it was used](https://github.com/T-J-Summer/SE-Summative-1/blob/main/Ticket%20Layout.png)

🏃🏼 Agile Methodology & Sprints
-
For this project, I chose to follow the Agile methodology with sprints which i used the GitHub Roadmap feature to clarly layout when each task should be completed. However as the name sugest this approach is agile and allows for changes in the scedule. An exaple of this in my project was when pushing the app live, a bug occured where my apps index page had a capital I, this meant that my GitHub was not able to find the HTML web app and i had to create a new bug ticket to discover and fix this issue. This meant that i had to re-prioritise items to ensure the bug fix was prioritised over documentation.

![Screenshot of my Knban Board showing how it was used](https://github.com/T-J-Summer/SE-Summative-1/blob/main/Roadmap%20Planning.png)

</details>
