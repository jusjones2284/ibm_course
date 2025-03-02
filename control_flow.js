let userRole = "admin";

let accessLevel1; 

if(userRole == "admin"){
  accessLevel1 = "Limited access granted"
} else if (userRole == "manager"){
  accessLevel1 = "Limited access granted"
} else{
  accessLevel1 = "No access granted"
}

console.log("Access Level:", accessLevel1);

let isLoggedIn = true;
let userMessage; 

if(isLoggedIn){
  if(userRole == "admin"){
    userMessage = "Welcome, Admin!"
  } else {
    userMessage =  "Welcome, User!"
  }
  
} else{
  userMessage = "Please log in to access the system"

}

console.log("User Message:", userMessage);



let userType = "subscriber"
let userCategory 

switch(userType){
  case "admin":
    userCategory = "Administrator";
    break; 
  case "manager":
    userCategory = "Manager"
    break
  case "subscriber":
    userCategory = "Subscriber"
  default:
    userCategory = "unknown"
}

console.log("User Category:", userCategory);

let isAuthenticated = false; 

let authenticationStatus = isAuthenticated ? "Authenticated": "Not authenticated"

console.log("Authentication Status:", authenticationStatus);
