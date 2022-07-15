import React from "react";
// import Person from "./Person";

function NameList() {
    const names = ["Bruce", "Clark", "Diana"];
    const nameList = names.map((name,index) => <h2 key={index}>{name}</h2>);
    return <div>{nameList}</div>;
//   const persons = [
//     {
//       id: 1,
//       name: "Bruce",
//       age: 30,
//       skill: "React",
//     },
//     {
//       id: 2,
//       name: "Clark",
//       age: 29,
//       skill: "Angilar",
//     },
//     {
//       id: 3,
//       name: "Diana",
//       age: 28,
//       skill: "Vue",
//     },
//   ];
//   const personsList = persons.map((person) => {
//     return <Person key={person.id} person={person}></Person>;
//   });
//   console.log(personsList)
//   return <div>{personsList}</div>;
}

export default NameList;
