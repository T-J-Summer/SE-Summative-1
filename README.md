# Europians on UK rails
## Software Engerneering - Summative 1

<p>
<details>
<summary>What is Europians on UK rails? 🇪🇺->🇬🇧🚆</summary>

🇪🇺 -> 🇬🇧 Why?
-
With a modern world that allows you to wake up in one country and be in another by lunchtime, it is important that you understand some of the differences between how different countries operate. An example of this is the Euro Tunnel that connects Britain & France, enabling people from all over Europe to travel to the UK effortlessly. 

🧮🇬🇧 For who?
-
Europeans on UK Rails (EoUKR) aims to both educate and assist individuals who are not from the UK on what units of measurement are used in the UK, the web app has a user journey that teaches you about Imperial & Metric measurements and how the UK has chosen to combine the two to have their own unit of measurement. 

➖➕➗✖️ How?
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

📱↣📱⃔ Proposed web app pages
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
