let people = []; // основной массив
/* структура словаря
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