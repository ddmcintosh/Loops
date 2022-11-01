"use strict"


let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
films: ["A Good Day", "A Better Day"]
},

{
memID: 187,
name: "Fred Flanders",
films: ["Who is Fred?", "Where is Fred?",
"What is Fred?", "Why Fred?"]
},

{
memID: 203,
name: "Bobbie Boots",
films: ["Walking Boots", "Hiking Boots",
"Cowboy Boots"]
},

];

let numAcademyMembers = academyMembers.length;
let acadMember = [];
let film3 = [];
let startB = [];
let acadmemberwA = [];

for (let i = 0; i < academyMembers.length; i++) {
    if (Number(academyMembers[i].memID) == 187) {
    acadMember.push(academyMembers[i].memID);
    console.log(acadMember + "  academy member has an id of 187: " );
}

if ( academyMembers[i].films.length >= 3) {
    film3.push(academyMembers[i].films);
    console.log(" These academy members have ben in 3+ films: " + film3);
}

if (academyMembers[i].name.substring (0,3) =="Bob") {
    startB.push(academyMembers[i].name);
    console.log(" This academy members has a name that start with Bob" + startB);
}

for (let j = 0; j < film3; j++) {
    if (academyMembers[i].films[j].slice(0, 1) == "A" && acadmemberwA.indexOf(academyMembers[i].name) == -1)  {
        acadmemberwA.push(academyMembers[i].name);
        console.log(" Academy member have a film that start with A " + acadmemberwA);
    }
}
}

