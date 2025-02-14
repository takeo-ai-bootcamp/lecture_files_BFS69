<h1> Lecture 3- GIT Branches </h1>

<hr/>

<p> In this class we are going to learn about branches that can be used in git while sharing repositaries with different user </p>

<h2> Steps for the students </h2>

<p>You have to have your terminal ready and change the directory into the folder you want this project to clone <span> Remember cloning will create a new folder with the same name </span> </p>
<p>Clone the project into you local system </p>

```script
git clone <url>
```

Example:
Note : this command will clone this repositary

```script
git clone https://github.com/takeo-ai-bootcamp/lecture_files_BFS69.git
```

<p> Now that you have the branch and the codebase with you you can go ahead and create a branch in your name ( just for now ), any format shall work.
</p>

to create the branch

```script
git branch <branch_name>
```

to go to the branch that has been created

```script
git checkout <branch_name>
```

<h2>Task</h2>
The task you have to do is to update the list and add your name into that list in the index.html file , after that you have to make a commit into your branch then create a PR / CR / MR , whatever name suits you, in <a href="https://www.github.com">GITHUB</a>

to commit you have to check the status

```script
git status
```

then if you find you file has been modified then you can start making commit

add them to the staged area by using the command

```script

git add <file_name>

```

or

if you want all of the changes to be added into the commit you can use the command

```script

git add .

```

then the changes will be in the staging area ready to be committed

use this command to make the commit with a message , make sure that the message cover the title of the changes you made

```script
git commit -m "<message>"
```

after you have done the git commit push them to the origin ( online folder / repositary ) to move forward with the Pull Request.

```script
git push --set-upstream origin <branch_name>

```

do this if this is your first time publishing the branch into you repositary.

or you can directly push if its your any other push

```script

git push

```

NOTE : You can use the git push command to know if you are pushing for the first time, The push will fail and will give you the command above to run.
