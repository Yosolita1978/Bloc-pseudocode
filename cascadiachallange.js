// Given an array of objects that define a person’s name and their skills, write a
// javascript function that takes the given array and returns and object that maps
// each skill to an array of people that has that skill.

const people = [
 {
 id: 0,
 name: "John",
 skills: ["javascript", "html", "css", "c#"]
 },
 {
 id: 1,
 name: "Brian",
 skills: ["javascript", "java", "c", "c#", "c++", "html"]
 },
 {
 id: 2,
 name: "Michael",
 skills: ["c", "c++", "go", "rust"]
 }
];

function makeSkills(arrayPeople){
  let skillsObject = {};
  for(let i = 0; i < arrayPeople.length; i++){
    let person = arrayPeople[i];
    let skills = person.skills;
    for(let j = 0; j < skills.length; j++){
      let skill = skills[j];
      if(skillsObject[skill] === undefined){
        skillsObject[skill] = [];
      }
      skillsObject[skill].push(person.name);
    }
  }
  return skillsObject;
}

console.log(makeSkills(people));
