import { getMaxListeners } from "process"

export const Questions = [
    {
        prompt: "1. Which of the following commands is used to start new repository?",
        optionA: "A. git clone",
        optionB: "B. git add",
        optionC: "C. git init",
        optionD: "D. git commit",
        answer: "C. git init",


    },
    {
        prompt: "2. Which of the following commands is used to record the file permanently in the version history?",
        optionA: "A. git clone",
        optionB: "B. git add",
        optionC: "C. git push",
        optionD: "D. git commit",
        answer: "D. git commit",

    },
    {
        prompt: "3. Which of the following commands is used to unstage a file",
        optionA: "A. git clone",
        optionB: "B. git reset",
        optionC: "C. git init",
        optionD: "D. git push",
        answer: "B. reset",

    },
    {
        prompt: "4. Which of the following commands is used to list all the files that have to be committed?",
        optionA: "A. git status",
        optionB: "B. git reset",
        optionC: "C. git init",
        optionD: "D. git push",
        answer: "B. git reset",

    },

    {
        prompt: "5. How can you delete unwanted file in your unwanted directory using git?",
        optionA: "A. git log",
        optionB: "B. git rm",
        optionC: "C. git init",
        optionD: "D. git push",
        answer: "B. git rm",

    },
    {
        prompt: "6. How do you check for local branches in the current git repository",
        optionA: "A. git init",
        optionB: "B. git pull",
        optionC: "C. git tag",
        optionD: "D. git branch",
        answer: "D. git branch",

    },

    {
        prompt: "7. what is 'git init' in full?",
        optionA: "A. git interpret",
        optionB: "B. git international",
        optionC: "C. git initialize",
        optionD: "D. git input",
        answer: "C. git initialize",

    },
    {
        prompt: "8. How to check for git global configurations?",
        optionA: "A. git --version",
        optionB: "B. git config list",
        optionC: "C.git pull",
        optionD: "D. git push",
        answer: "B. git config list",

    },
    {
        prompt: "9. Command used to see if git is installed on your local machine",
        optionA: "A. git clone",
        optionB: "B. git fork",
        optionC: "C. git --version",
        optionD: "D. git pull",
        answer: "C. git --version",

    },
    {
        prompt: "10. what is github?",
        optionA: "A. code editor",
        optionB: "B. programming langauge",
        optionC: "C. scripting language",
        optionD: "D. online repository",
        answer: "D. online repository",

    },
    {
        prompt: "11. How to check for the log of the commits to your git repository?",
        optionA: "A. git check",
        optionB: "B. git log --online",
        optionC: "C. git clone",
        optionD: "D. git log --github",
        answer: "B. git log --online",

    },
    {
        prompt: "12. How to copy a git repository",
        optionA: "A. git clone",
        optionB: "B. git copy",
        optionC: "C. git add",
        optionD: "D. git move",
        answer: "A. git clone",

    },
    {
        prompt: "13. Command used to add files to a staging area: ",
        optionA: "A. git push",
        optionB: "B. git reset",
        optionC: "C. git status",
        optionD: "D. git add",
        answer: "D. git add",
    },
    {
        prompt: "14. Command used to send local commits to the master branch: ",
        optionA: "A. git status",
        optionB: "B. git pull",
        optionC: "C. git init",
        optionD: "D. git push",
        answer: "D. git push",

    },
    {
        prompt: "15. How to switch from one branch to another in git?",
        optionA: "A. git navigate",
        optionB: "B. git git next",
        optionC: "C. git checkout",
        optionD: "D. git pull",
        answer: "C. git checkout",

    },
    {
        prompt: "16. How do you view your online git repositories in git?",
        optionA: "A. git remote -v",
        optionB: "B. git view -v",
        optionC: "C. git see -v",
        optionD: "D. git status -v",
        answer: "A. git remote -v",

    },
    {
        prompt: "17. A command used to merge changes in remote repository to the local working directory",
        optionA: "A. git commit",
        optionB: "B. git pull",
        optionC: "C. git add",
        optionD: "D. git list",
        answer: "B. git pull",

    },
    {
        prompt: "18. How to list all the present conflicts?",
        optionA: "A. git diff",
        optionB: "B. git list",
        optionC: "C. git clone",
        optionD: "D. git ls",
        answer: "A. git diff",

    },
    {
        prompt: "19. Command used to save the changes temporarily",
        optionA: "A. git save",
        optionB: "B. git push",
        optionC: "C. git stash",
        optionD: "D. git add",
        answer: "C. git stash",

    },
    {
        prompt: "20. Command used to search through committed trees",
        optionA: "A. git clone",
        optionB: "B. git commit",
        optionC: "C git search",
        optionD: "D. git grep",
        answer: "D. git grep",
    },
    {
        prompt: "21. A command used to delete a branch",
        optionA: "A. git delete branch",
        optionB: "B. git branch -d",
        optionC: "C. git -d branch",
        optionD: "D. git -d branch",
        answer: "B. git branch -d",
    },
    {
        prompt: "22. A command used to connect to your local respository to the remote server",
        optionA: "A. git remote add",
        optionB: "B. git remote",
        optionC: "C. git connect",
        optionD: "D. git connect remote",
        answer: "A. git remote add",
    },
    {
        prompt: "23. GGit push is used to push all branches to your remote repository",
        optionA: "A. True",
        optionB: "B. False",
        answer: "B. False",
    },
    {
        prompt: "24. A command used to fetch and merge changes on the remote server to your working directory",
        optionA: "A. git push",
        optionB: "B. git pull",
        optionC: "C. git fetch",
        optionD: "D. git merge",
        answer: "B. git pull",
    },
    {
        prompt: "25. A command used to restore recently stashed file",
        optionA: "A. git stash current",
        optionB: "B. git stash",
        optionC: "C. git stash current",
        optionD: "D. git stash pop",
        answer: "D. git stash pop",
    },
    {
        prompt: "26. what is git?",
        optionA: "A. scripting langauge",
        optionB: "B. bash langauge",
        optionC: "C. programming langauge",
        optionD: "D. morden version control system",
        answer: "D. morden version control system",
    },
    {
        prompt: "27. The following is part of configuring git in your local machine",
        optionA: "A. git push main origin",
        optionB: "B. git pull origin main",
        optionC: "C. git stash",
        optionD: "D. git --global user.email 'nosichefane@gmail.com'",
        answer: "D. git --global user.email 'nosichefane@gmail.com'",
    },
    {
        prompt: "28. Github is where over 83 million developers shape the future of software together",

        optionA: "A. True",
        optionB: "B. False",
        answer: "A",
    },
    {
        prompt: "29. Github cannot be connected to heroku",

        optionA: "A. True",
        optionB: "B. False",
        answer: "B. True",
    },
    {
        prompt: "30. Heroku is a hosting platform",

        optionA: "A. True",
        optionB: "B. False",
        answer: "A. True",
    },
    {
        prompt: "31. Heroku is a hosting platform",

        optionA: "A. True",
        optionB: "B. False",
        answer: "A. True",
    },
    
    
]