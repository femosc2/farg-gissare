import colors from '../assets/colours';
import pronouns from '../assets/pronouns';
import subjects from '../assets/subjects';
import { RandomStatement } from '../interfaces';

export const getRandomStatement = (): RandomStatement => {
  const color = colors[Math.floor(Math.random() * colors.length)];
  const subject = subjects[Math.floor(Math.random() * subjects.length)];
  const pronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
  const verb = ['är', 'blir', 'verkar vara',][Math.floor(Math.random() * 3)];
  let correctColorForm = "";
  let statement = '';

  if (subject.noun) {
    if (pronoun.singular) {
      if (pronoun.subject === 'Den') {
        correctColorForm = color.specificPlural;
        statement = `Test1${pronoun.subject} ${color.specificPlural} ${subject.specificNoun}. (${color.translation})`;
      } else {
        if (subject.gender === 'ett') {
            correctColorForm = color.specificSingular;
            statement = `${subject.specificNoun} ${verb} ${color.specificSingular}. (${color.translation})`;
        }
        if (subject.gender === 'en') {
            correctColorForm = color.singular;
            statement = `${subject.specificNoun} ${verb} ${color.singular}. (${color.translation})`;
        }
      }
    } else {
      correctColorForm = color.specificPlural;
      statement = `${subject.specificPluralNoun} ${verb} ${color.specificPlural}. (${color.translation})`;
    }
  }

  return {
    statement: statement.charAt(0).toUpperCase() + statement.slice(1),
    color: correctColorForm,
  };
  
};

export const getRandomStatementsList = (): RandomStatement[] => {
    const randomStatements: RandomStatement[] = [];
    for (let i = 0; i < 20; i++) {
      randomStatements.push(getRandomStatement());
    }
    return randomStatements;
  };
  
  console.log(getRandomStatementsList());

console.log(getRandomStatement());