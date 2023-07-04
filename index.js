import chalk from "chalk";
import readlineSync from "readline-sync";

function createUser(name, score) {
  return {
    name,
    score,
  };
}

let score = 0;
let level = 0;
let otherUserScores = [createUser("Tanay", 2), createUser("Sagar", 4)];
let highestScore = false;

function play(question, answer, options) {
  let userAnswer;
  if (typeof answer === "boolean") {
    userAnswer = readlineSync.keyInYN(question);
  } else {
    userAnswer = readlineSync.keyInSelect(options, question);
  }
  userAnswer === answer
    ? console.log(
        chalk.green("You are right"),
        chalk.yellow("Score:"),
        ++score,
        chalk.green(`Level: ${Math.floor(score / 2)}`)
      )
    : console.log(
        chalk.red("You are wrong"),
        chalk.yellow("Score:"),
        --score,
        chalk.red(`Level: ${Math.floor(score / 2)}`)
      );

  level = Math.floor(score / 2);
  console.log("----------");
}

let userName = readlineSync.question("Hey, what is your name? ");
console.log(
  chalk.bgBlue("Welcome", userName, "Let's see if you are really marvel fan:)")
);
console.log(chalk.bgBlue("even number points can push your level by one"));

const questions = [
  {
    question: "Which superhero wields Mjolnir, the enchanted hammer?",
    answer: 3,
    options: ["Iron Man", "Captain America", "Black Widow", "Thor"],
  },
  {
    question: "What is the real name of the superhero Iron Man?",
    answer: 3,
    options: ["Peter Parker", "Bruce Wayne", "Steve Rogers", "Tony Stark"],
  },
  {
    question: "Who is the arch-nemesis of Spider-Man?",
    answer: 2,
    options: ["Loki", "Magneto", "Green Goblin", "Red Skull"],
  },
  {
    question: "Which metal is used to make Captain America's shield?",
    answer: 1,
    options: ["Adamantium", "Vibranium", "Uru", "Promethium"],
  },
  {
    question:
      "What is the name of the fictional city where Black Panther is from?",
    answer: 1,
    options: ["Asgard", "Wakanda", "Sokovia", "Genosha"],
  },
  {
    question: "What is the name of the primary villain in the Avengers movie?",
    answer: 2,
    options: ["Thanos", "Ultron", "Loki", "Red Skull"],
  },
];

for (let currentQuestion of questions) {
  play(
    currentQuestion.question,
    currentQuestion.answer,
    currentQuestion.options
  );
}

console.log("Final Score:", score);
console.log("Level Reached:", level);

for (let user of otherUserScores) {
  if (user.score > score) {
    highestScore = false;
  } else {
    highestScore = true;
  }
}

highestScore
  ? console.log(
      chalk.bgGreen(
        "Congrats! You have highest score among all the other users, send screenshot of this so that we can update our data!"
      )
    )
  : console.log(
      chalk.bgRed("Someone else have highest score :/ better luck next time")
    );
