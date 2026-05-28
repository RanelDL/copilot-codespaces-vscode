function skillsMember(){
    console.log("This is the skills member function.");
    return {
        name: "John Doe",
        age: 30,
        skills: ["JavaScript", "Python", "Java"],
        calculateNumbers: function(var1, var2){
            console.log("Calculating the sum of " + var1 + " and " + var2);
            return var1 + var2;
        }
        
    }
}

