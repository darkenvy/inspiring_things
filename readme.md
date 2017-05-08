<h1>These Inspiring Things</h1>

Combining procrastination and inspiration for a more enjoyable and productive work day.

<img src="/progress/0507_full_start.png" alt="fullscreen">

<h2>Technologies Used</h2>

<h4>API's</h4>
<li>Facebook Authorization: for signingup or logging in</li>
<li>Unsplash: Generates a random photo from it's database on the Create page of These Inspiring Things</li>
<li>Quotes on Design: Generates a random quote about design or by a designer from it's database on the Create page of These Inspiring Things</li>

<h4>CSS</h4>
<li>CSS Grid: I learned CSS Grid for this project, and ended up implementing it solely on the Create page in order to establish a well-layered experience</li>
<li>Materialize: Materialize was used on every user-facing page of These Inspiring Things, with adjustments made to colors and fonts in some situations</li>

<h4>Languages</h4>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
<li>jQuery</li>
<li>Node</li>

<h4>GitHub & HerokuApp</h4>
These Inspiring Things lives in a respository on GitHub, and is also currently hosted on HerokuAPp

<h4>Other</h4>
<li>These Inspiring Things was written using Sublime Text Editor</li>
<li>Databases were managed using Postgres and Postico</li>
<li>These Inspiring Things was organized and managed using Trello</li>
<li>Postman was used to test routes</li>
<li>PhantomJS: While this was not used for the final step of this project, it will be re-implemented in the future for automating the screenshot function for users.</li>
<br>
<img src="/progress/0507_quote_menu.png" alt="quote menu">


<h2>Approach</h2>

I began These Inspring Things with the goal to create an app that would help users create a motivational desktop background for themselves.

<h4>Preparation</h4>

Before getting started, I began by researching if this was in fact possible. I found a number of API's that would help me reach this goal, and read up on the ones that seemed most useful in this situation.

Once I was sure my goal was reasonable (taking into consideration my current skill set and the timeline for Project 2), I began planning. Using <a href="https://trello.com/b/W0p5pjJl/wdi-project-2">Trello</a>, I set up a timeline for my project, as well as specific tasks, notes, and reach goals.

During our first in-class work session, I started wireframing the project and planning out how many pages were required, where authorization was necessary, and how the site would best flow for the user. After completing wireframing, I created a heirarchy for addressing each page and moving forward.

<h4>Work Flow</h4>

Since I knew the two API's I wanted to use for photos and quotes, I began by tackling those. There were a few roadbumps figuring out the randomization of the photos and quotes displayed, but overall these API's were fairly straighforward.

Once Unsplash and QOD were functional on the page, I learned CSS Grid and styled the "Create" page using this system. For the additional pages, I chose to stick with Materialize to save time and prioritize functionality.

I then attempted to move on to implmenting the Screenshot Layer API but was having a difficult time due to the necessity to have users log-in before reaching the "Create" page. This was the biggest hurdle I came across and ultimately was not able to conquer. It ate up the most of my time and caused me to push aside some of the other functionality and design I was hoping to implement.

To wrap-up the project, I decided to be realistic about what could be finished in time for our deadline, and what would work as a bonus feature if implemented later. I removed unused code for this version, and cleaned up the remaining code.


<h2>Unsolved Problems</h2>

There are a number of unsolved problems I had with this project, due to a few different factors, including the need to be an authorized user.

1 Screenshot: This was my main goal and I was unable to get it to work at this time due in part to the requirement for user authorization. If I could, I would prioritize the screenshot over the authorization at this time, adding authorization later.

2 API Requirements: Since this is a class project and not a live app, I chose to put the requirements given by the API's themselves on the backburner. Before adding this to my portfolio, I want to make sure those use requirements are met.

3 Alerts: I'd like to reimplement alerts to the site using Materialize. I disabled them while I was working because the formatting was strange, and ultimately decided to keep them disabled to focus on other problems.
