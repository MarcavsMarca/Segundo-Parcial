function calculateAge(birthYear) {
    var age = 2023 - birthYear;
    return age;
}

var ageJohn = calculateAge(1994); 

var whatDoYouDo = function(job, name) {
    switch (job) {
        case 'developer':
            return name + ' develops cool apps.';
        case 'designer':
            return name + ' designs awesome websites.';
        default:
            return name + ' does something else.';
    }
};

(function(lastName) {  
    var firstName = "John";
    console.log(firstName + ' ' + lastName); 
})('Doe');

console.log(ageJohn);
