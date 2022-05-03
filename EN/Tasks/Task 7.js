let people = []; // main array
/* dictionary structure
{
    "firstName": "",
    "secondName": "",
    "age": "",
    "country": "",
    "city": ""
};
*/

function createPeople(firstName, secondName, age, country, city){
    people.push({
        "firstName": firstName,
        "secondName": secondName,
        "age": age,
        "country": country,
        "city": city
    });
}