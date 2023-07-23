// Create an array of user objects with their login credentials
const users = [
  { username: "Cardinal", password: "2024" },
  { username: "Nnamdi", password: "2023" },
  { username: "Amarachi", password: "password1" },
  { username: "John", password: "password2" },
  { username: "7", password: "7" }
];


// Function to handle login
function logIn() {
  // Get the username and password entered by the user
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  

  // Loop through the users array to check if the entered credentials match
  for (let i = 0; i < users.length; i++) {
    if (username === users[i].username && password === users[i].password) {
          alert(`Login successful! Welcome ${users[i].username}`);
          nameT.innerText = (`Name: ${users[i].username}`);
          startBtn.style.display = "inline";
          ready.style.display = "inline";
          log.style.display = "none";
          nameT.style.display = "inline";
          return;
      };
  }
  // If the entered credentials do not match any user, show an error message
  alert("Invalid username or password. Please try again.");
  return;
}


// Event listener
logInBtn.addEventListener("click",logIn);