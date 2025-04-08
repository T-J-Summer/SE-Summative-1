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

![An animated GIF showing the web app and navigating through the user story](https://github.com/T-J-Summer/SE-Summative-1/blob/main/Images/Repository/AppDemo.gif)

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
![Screenshot of the backend of my Figma with the page links visable](https://github.com/T-J-Summer/SE-Summative-1/blob/main/Images/Repository/Figma%20Prototype.png)

This is what the prototype looks like for the user:
--
![Animated GIF showing the Figma prototype working](https://github.com/T-J-Summer/SE-Summative-1/blob/main/Images/Repository/FigmaDemo.gif)

</details>



<p>
<details>
<summary>Project Management Approach 📊📂</summary>

📊 Kanban Board
-
To manage this project, I chose to user GitHub Projects as it natively intergrates with GitHub which is where the project is hosted. GitHub projects allows a Kanban Board which helps to catagorise each ticket with lables so you can easily filter the tickets to find the section you are looking for.
With the tickets I have chosen a design template that clearly outlines what the ticket is for, the activities within it, the dependencies required in order to worlk on this ticket and any additinal notes.
GitHubs Kanban also enables the user to connect pull requests to the ticket allowing for seamless audit logs, in addition to other features I didnt have to use such as asigning actions as I did this project alone.

![Screenshot of my Knban Board showing how it was used](https://github.com/T-J-Summer/SE-Summative-1/blob/main/Images/Repository/Kanban%20Board.jpg)

As previously mentioned, this approach allows for the use of labels I chose to customise these labels to ensure they were relevant to my project:
- 🧱 App Development - Any production element of the web app
- 🐛 Bug Fixes - If something isn't working in the web app
- 📝 Design - Any production materials to help prep for the web app build
- 📄 Documentation - Improvements or changes to documentation
- 📂⃕ Future Development - Ideas out of the current scope or ability
- 📑 Improvements - Amendments & positive changes
- 🗂️ README - Amendments or additions to the README file
- 🧪 Testing - Any test performed associated with the web app.

Using Git Hub labels was beneficial for my project as it enabled me to efficiently label each ticket so any developer could log on and at a glance find the category that they were after, by customising these labels I was able to simplify my ticket management and ensure my documentation was clean. The only drawback I found was when you connected an issue to a ticket the labels were not automatically transferred, this led me to only label the tickets. If I were to do this project again this is something I would look into to ensure there is an additional layer of categorising, however, I feel labelling the tickets was sufficient to efficiently direct any developer to where they need to go.

📂⃔⃕ Ticket Layout
-
As previously mentioned i followed a set template when producing my tickets to ensure all ticket fully informed anyone viewing what it is for, and to also to ensure the ticxkets where clear during all stages of the project and i could refer back to them effortlesly.
- Description - This section was used to provide any information as to why the ticket had been produced and what it aims to acheve.
- Objectives - I utilised checkboxes to clearly mark an objective as done when finished and also utilised this feature to convert any objectives I hadn't achieved into new tickets to then be worked on as an improvement or bug fix. These objectives were used to outline what steps were being completed as part of this ticket.
- Dependancies - This section was used to inform me what needed to be completed before moving onto the next stage, this helped me to align to the agile approach and complete a stage only when the taks that need to be completer first have been.
- Notes - This section was used for any additnal info about the ticket, for example in the language changer ticket I explaines why it is a future development.

![Screenshot showing the template i used for all my tickets](https://github.com/T-J-Summer/SE-Summative-1/blob/main/Images/Repository/Ticket%20Layout.png)

🏃🏼 Agile Methodology & Sprints
-
For this project, I chose to follow the Agile methodology with sprints which I used the GitHub Roadmap feature to lay out when each task should be completed. However, as the name suggests this approach is agile and allows for changes in the schedule. An example of this in my project was when pushing the app live, a bug occurred where my app's index page had a capital I, this meant that my GitHub was not able to find the HTML web app and I had to create a new bug ticket to discover and fix this issue. This meant that I had to re-prioritise items to ensure the bug fix was prioritised over documentation.

![Screenshot of my schedule / roadmap and how i used it to plan takss around dates](https://github.com/T-J-Summer/SE-Summative-1/blob/main/Images/Repository/Roadmap%20Planning.png)

</details>



<p>
<details>
<summary>User Documentation 👨🏻‍💼📑</summary>

▶️ Using The Web App
-
To begin, open the web app [(click here for a shortcut💨)](https://t-j-summer.github.io/SE-Summative-1/). From here, the web app is simple to use, simply pick to go into the user journey where you will learn more about units of measurement and how the UK differs from the rest of the world or skip straight to the converter where you can convert your own measurements.

See below for an example of how to navigate through the web app:
![An animated GIF showing the web app and navigating through the user story](https://github.com/T-J-Summer/SE-Summative-1/blob/main/Images/Repository/AppDemo.gif)

🔖 Your Requirements
-
When using the web app, please make sure you have an internet connection at all times and are using the latest link for the web app! 
When using the converter, please make sure to only enter numerical values to avoid an error message occurring

☄️ Troubleshooting
- 
If you are having issues with any element of the app, please refresh the page. If the issue persists, please make sure you are using a compatible web browser, Safari or Chrome should work fine.

</details>



<p>
<details>
<summary>Building the web app MVP 🧱📱</summary>

🧱 What is an MVP?
-
MVP stands for Minimum Viable Product, which, in basic terms, is the simplest version of an application that can be produced. It is similar to a Proof of Concept (POC) as it is used to display the idea for a new app without the risk of wasting resources developing something that isn't wanted by the public.
By producing this MVP, my web app can be trialled by its target audience ahead of launch to ensure that it achieves what the users want it to do. Also, by having an MVP, there is a chance that an investor will see the web app and invest in the idea, enabling the scale-up across other outlets such as downloadable applications.

🙋🏻‍♂️👨🏻‍🦽‍➡️ User Stories & Acsesability
- 
One of the key elements of developing any app is ensuring that the users and their navigation/accessibility of the application is at the forefront of development, due to this, I gathered feedback from users of the prototype to understand what they liked and didn't like:
Likes:
- The colour scheme makes it easy to read the information on the screen
- The navigation is clear and the contrasting buttons make it clear where the progression points are
Dislikes:
- No way to skip the converter if you do not want to go on the user journey
- The converter's error message keeps deleting numbers if a mistake is made

I also built a few user stories to demonstrate some of the requirements everyday users will have of the web app and used these to develop the application in a way that is accessible to all, these user stories demonstrate the need to have an accessible app that has features such as alt text for images and contrasting colours to ensure all users can see the information that they want with ease.

![Image showing the 3 user stories expressing the need for an acessable site for all](https://github.com/T-J-Summer/SE-Summative-1/blob/main/Images/Repository/User%20Stories.png)

Following this, I wanted to ensure my site was accessible, so I ran it through Google's Page Speed Insights checker which ranked assessability at 100%

![Image showing the Google Page Speeds Summary](https://github.com/T-J-Summer/SE-Summative-1/blob/main/Images/Repository/Google%20Page%20Speed%20Insights.png)

📝VS📱 Design to App production
-
When producing the web app I heavily based production on the previously mentioned prototype and web app design, this foundation enabled me to effectively build the foundations for the HTML web app, despite this, there were some changes that I had to make.

1. Welcome Screen: Similar to the designed welcome screen, it introduces the user to what EoUKR is for and explains that the user will be taken through a story before using the converter. However, I added a button to allow users to skip straight to the converter so they are able to jump straight in if they are short for time as sugested by the first user story of a businessman hwo may need the information fast.

2. Language Changer: This page has been added as a future development due to it being out of scope for an MVP and will be brought back in when the web app develops to the next stage.

3. Introduction to The Converter: This page was incorporated into the end-of-user journey page as feedback from users suggested it wasn't necessary to have it on a separate page.

4. Measurement Converter: The converter design was redesigned in the interest of accessibility and efficiency as the old design would cause issues for user when deleting numbers or making mistakes as the error message would display deleting all data in the boxes. The new design is also clearer for the user with visual inparements as screen readers are able to read the information easier without the containers.

🐛 Bugs & Fixes
-
After the production of each page within this project I ran tests and from these, there was a series of bugs that needed fixing with bug fix tickets, most of the issues I had were using the correct naming conventions for different file types. For example, when creating my index.html, I accidentally used a capital 'I', which caused GitHub to fail when finding the site to publish it, this was an easy fix where I created a bug ticket and changed the name.
![Image showing the bug ticket raised to fix the error](https://github.com/T-J-Summer/SE-Summative-1/blob/main/Images/Repository/Name%20change%20ticket.png)

👨🏻‍💻 Code Process
-
With my web app, I chose to prioritise uniformity across all the pages both for accessibility but also efficiency so the user always knows where to go for the next step. With this in mind, the first thing I did on all of my pages was create the heading bar with the EoUKR logo & Logo
```ruby
<body style="background-color: #FEFBEA;">
<div>
    <div style="background-color: darkgrey" class="d-flex p-3"><button class="btn" onclick="location.href='index.html';" type="button">
      <img src="Images/Web-App/BackArrow.png" alt="Undo Button" width="40" height="40" class="me-3"></button>
        <h1>Europeans on UK Rails!</h1>
          <img src="Images/Web-App/Logo.png" alt="Europeans on UK Rails Logo" width="60" class="ms-auto" ></div>
```

From this, I then produced the rest of the page depending on what was required, for example, let's look at the converter. I produced a Java Script file that hosts all the functions for the converter to work properly (e.g. the validation to stop the input of text into the number fields -  this is the below example)
```ruby
function validateInput(value) {
    if (isNaN(value) || value.trim() === "") {
        return {
            isValid: false,
            message: "Only numeric values are allowed, and this field cannot be blank"
        };
    }
    return {
        isValid: true,
        message: ""
    };}
```

Now that the functions have been defined, I created the html page that calls the functions in order for the converter to operate as required. below are 2 snippets of code, the first one is the front end of the KM/H to MPH converter
```ruby
    <h2>🚂 Speed Converter 🏎️</h2>
<div class="mb-3">
  <label for="kmh-input" class="form-label">KM/H:</label>
  <input type="text" id="kmh-input" class="form-control">
  <button class="btn btn-dark mt-2" id="convert-kmh">Convert to MPH</button>
  <p id="kmh-output" class="mt-2"></p>
</div>
```
The second is a snippet showing how the function is called from the Java Script file
```ruby
<script src="./converter.js"></script>
<script>
  document.getElementById("convert-kmh").addEventListener("click", () => {
    const value = document.getElementById("kmh-input").value;
    const result = validateInput(value);
    document.getElementById("kmh-output").textContent =
            result.isValid ? `${kmhToMph(value)} MPH` : result.message;
</script>
```
</details>
