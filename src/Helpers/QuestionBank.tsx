import { getMaxListeners } from "process"

export const Questions = [
    {
        prompt: "1. Which of the following commands is used to start new repository?",
        optionA: "git clone",
        optionB: "git add",
        optionC: "git init",
        optionD: "git commit",
        answer: "C",

    },
    {
        prompt: "2. Which of the following commands is used to record the file permanently in the version history?",
        optionA: "git clone",
        optionB: "git add",
        optionC: "git push",
        optionD: "git commit",
        answer: "D",

    },
    {
        prompt: "3. Which of the following commands is used to unstage a file",
        optionA: "git clone",
        optionB: "git reset",
        optionC: "git init",
        optionD: "git git push",
        answer: "B",

    },
    {
        prompt: "4. Which of the following commands is used to list all the files that have to be committed?",
        optionA: "git status",
        optionB: "git reset",
        optionC: "git init",
        optionD: "git push",
        answer: "B",

    },

    {
        prompt: "5. How can you delete unwanted file in your unwanted directory using git?",
        optionA: "git log",
        optionB: "git rm",
        optionC: "git init",
        optionD: "git push",
        answer: "B",

    },
    {
        prompt: "6. How do you check for local branches in the current git repository",
        optionA: "git init",
        optionB: "git pull",
        optionC: "git tag",
        optionD: "git branch",
        answer: "D",

    },

    {
        prompt: "7. what is 'git init' in full?",
        optionA: "git interpret",
        optionB: "git international",
        optionC: "git initialize",
        optionD: "git input",
        answer: "D",

    },
    {
        prompt: "8. How to check for git global configurations?",
        optionA: "git --version",
        optionB: "git config list",
        optionC: "git pull",
        optionD: "git push",
        answer: "B",

    },
    {
        prompt: "9. Command used to see if git is installed on your local machine",
        optionA: "git clone",
        optionB: "git fork",
        optionC: "git --version",
        optionD: "git pull",
        answer: "C",

    },
    {
        prompt: "10. what is github?",
        optionA: "code editor",
        optionB: "programming langauge",
        optionC: "scripting language",
        optionD: "online repository",
        answer: "D",

    },
    {
        prompt: "11. How to check for the log of the commits to your git repository?",
        optionA: "git check",
        optionB: "git log --online",
        optionC: "git clone",
        optionD: "git log --github",
        answer: "B",

    },
    {
        prompt: "12. How to copy a git repository",
        optionA: "git clone",
        optionB: "git copy",
        optionC: "git add",
        optionD: "git move",
        answer: "A",

    },
    {
        prompt: "13. Command used to add files to a staging area: ",
        optionA: "git push",
        optionB: "git reset",
        optionC: "git status",
        optionD: "git add",
        answer: "D",
    },
    {
        prompt: "14. Command used to send local commits to the master branch: ",
        optionA: "git status",
        optionB: "git pull",
        optionC: "git init",
        optionD: "git push",
        answer: "D",

    },
    {
        prompt: "15. How to switch from one branch to another in git?",
        optionA: "git navigate",
        optionB: "git git next",
        optionC: "git checkout",
        optionD: "git pull",
        answer: "C",

    },
    {
        prompt: "16. How do you view your online git repositories in git?",
        optionA: "git remote -v",
        optionB: "git view -v",
        optionC: "git see -v",
        optionD: "git status -v",
        answer: "A",

    },
    {
        prompt: "17. A command used to merge changes in remote repository to the local working directory",
        optionA: "git commit",
        optionB: "git pull",
        optionC: "git add",
        optionD: "git list",
        answer: "B",

    },
    {
        prompt: "18. How to list all the present conflicts?",
        optionA: "git diff",
        optionB: "git list",
        optionC: "git clone",
        optionD: "git ls",
        answer: "A",

    },
    {
        prompt: "19. Command used to save the changes temporarily",
        optionA: "git save",
        optionB: "git push",
        optionC: "git stash",
        optionD: "git add",
        answer: "C",

    },
    {
        prompt: "20. Command used to search through committed trees",
        optionA: "git clone",
        optionB: "git commit",
        optionC: "git search",
        optionD: "git grep",
        answer: "D",
    },
    {
        prompt: "21. A command used to delete a branch",
        optionA: "git delete branch",
        optionB: "git branch -d",
        optionC: "git -d branch",
        optionD: "git -d branch",
        answer: "B",
    },
    {
        prompt: "22. A command used to connect to your local respository to the remote server",
        optionA: "git remote add",
        optionB: "git remote",
        optionC: "git connect",
        optionD: "git connect remote",
        answer: "A",
    },
    {
        prompt: "23. GGit push is used to push all branches to your remote repository",
        optionA: "True",
        optionB: "False",
        answer: "B",
    },
    {
        prompt: "24. A command used to fetch and merge changes on the remote server to your working directory",
        optionA: "git push",
        optionB: "git pull",
        optionC: "git fetch",
        optionD: "git merge",
        answer: "B",
    },
    {
        prompt: "25. A command used to restore recently stashed file",
        optionA: "git stash current",
        optionB: "git stash",
        optionC: "git stash current",
        optionD: "git stash pop",
        answer: "D",
    },
    {
        prompt: "26. what is git?",
        optionA: "scripting langauge",
        optionB: "bash langauge",
        optionC: "programming langauge",
        optionD: "morden version control system",
        answer: "D",
    },
    {
        prompt: "27. The following is part of configuring git in your local machine",
        optionA: "git push main origin",
        optionB: "git pull origin main",
        optionC: "git stash",
        optionD: "git --global user.email 'nosichefane@gmail.com'",
        answer: "D",
    },
    {
        prompt: "28. Github is where over 83 million developers shape the future of software together",

        optionA: "True",
        optionB: "False",
        answer: "A",
    },
    {
        prompt: "29. Github cannot be connected to heroku",

        optionA: "True",
        optionB: "False",
        answer: "B",
    },
    {
        prompt: "30. Heroku is a hosting platform",

        optionA: "True",
        optionB: "False",
        answer: "A",
    },
    {
        prompt: "31. Heroku is a hosting platform",

        optionA: "True",
        optionB: "False",
        answer: "A",
    },
    
    
]