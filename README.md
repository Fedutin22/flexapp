<img src="./src/assets/readme/logo.png" />
<h1 align="center">💰BudgetHelper💰<h1>
<div align="center">
<img src="https://img.shields.io/github/last-commit/WarOnKhoff/FinApp-Jg.svg">
<img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/WarOnKhoff/FinApp-Jg.svg">
<img alt="GitHub contributors" src="https://img.shields.io/github/contributors/WarOnKhoff/FinApp-Jg.svg">
</div>

<br>

<h2>Table of Content</h2>
<ul>
<li><a href='#general'>General info</a></li>
<li><a href='#dependencies'>Dependencies</a></li>
<li><a href='#setup'>Project setup</a></li>
<li><a href='#contribution'>Contribution</a></li>
</ul>

<br>

<div id='general'>
<h2>General info 💡<h3>
<p>This application was created in order to make visualization of the personal budget control. The application allows you to track user's fixed incomes and expenses, to plan financial goals and to display a report for a selected period of time. The main motto is to create a lightweight and UX-friendly app using React for UI rendering and Firebase for data storage. The project was originally created, designed and developed as part of the frontend development course in JavaGuru.</p>
</div>
<br>
<div id='dependencies'>
<h2>Dependencies 🛠<h3>
<code>
├── date-fns@1.30.1 <br>
├── react@16.8.6 <br>
├── react-dom@16.8.6 <br>
├── react-icons@3.7.0 <br>
└── styled-components@4.3.1 <br>
</code>
</div>
<br>
<div id='setup'>
<h2>Setup 🔌<h3>
<p>Steps to run app localy:</p>
<ul>
<li>
<p> Clone repo to your directory:<p>
<code>
cd [project directory]<br>
git clone
</code>
</li>
<li>
<p> After repository is cloned install dependencies with yarn on npm<p>
<code> yarn </code> or <code>npm install</code>
</li>
<li>
<p> After all You are ready to go! To start app localy:<p>
<code> yarn start </code> or <code>npm start</code>
</li>
<li>
<p> To build project:<p>
<code> yarn build </code> or <code>npm run build</code>
</li>
</ul>
</div>
<br>
<div id='contribution'>
<h2>Contribution 💎<h3>
<p>🚨Warning🚨<br>
Generally this section is for our team collaborators.</p>
<p>If you want to contribute to this project you need to make your Pull Request. Here is short guide for you:</p>
<h4>Fork repository and clone it</h4>
<p>To start your contribution you need to fork this repo to your github profile and then clone it and intall all dependencies. </p>
<hr>
<img src="./src/assets/readme/fork.png">
<h4>Create new branch</h4>
<p>First of all before development you need to make separate branch locally:</p>
<code> git checkout -b [your branch name] </code>
<hr>
<img src="./src/assets/readme/checkout.png">
<h4>Develop and commit your changes</h4>
<p>After you've created new branch you can proceed your development. When you're finish you need to commit your changes:</p>
<hr>
<img src="./src/assets/readme/commit.png">
<code> git status</code><br>
<p>check status before commit<p>
<code> git add .</code><br>
<p>to add all changes for commit or<p>
<code> git add [filename]</code><br>
<p>to add exact file. Then you need to make commit of your changes<p>
<code> git commit -m "[commit message]"</code><br>
<p>Now you can push your commit to remote repository</p>
<hr>
<img src="./src/assets/readme/push.png">
<code> git push --set-upstream origin [your branch name]</code><br>
<h4>Make your Pull Request</h4>
<p>Since your commits are pushed to your forked repo you can make your pull request</p>
<p>First you need to select your branch in your forked repo</p>
<hr>
<img src="./src/assets/readme/gitBranch.png">
<p>Then chose "Pull request" section</p>
<hr>
<img src="./src/assets/readme/pullRequest.png">
<p>Press "Compare & Pull request" button. After you button is pressed you need to compose your pull request.Choose your target repo in "base repository" select and your forked repository and branch in "head repository" select </p>
<hr>
<img src="./src/assets/readme/composePR.png">
<h4>Finish</h4>
<p>Congrats! You made it! Now wait for your PR merge. When everything will be confirmed you can pull forked repository with applied PR and remove your branches (locally and remote) : </p>
<code> 
git pull
</code>
<p>to remove branch locally:</p>
<code> 
git branch -d [branch_name]
</code>
<p>to remove branch remote:</p>
<code> 
git push origin --delete [branch_name]
</code>
<p> Good luck in your contributions! 😎 </p>
</div>
<br>