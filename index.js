//1. API url
const url = "https://jsonplaceholder.typicode.com/users";

//2. fetch users from api url
function fetchUser(){
    //2.1Make use of the browser fetch api

    fetch(url)
    .then((response) => response.json()
    .then((data) =>{
        //2.2 pass data into renderuser function
       renderUser(data);

    })
    );
}


//3. Render users in the DOM
function renderUser(usersData){
    //console.log(usersData)
    const ul = document.getElementById("user-list-container")
    //console.log(ul);

    //3.1 render an li tag for each user
    usersData.forEach((user, index) =>{
        console.log(user, index +1)
        const li = document.createElement("li")
        li.innerHTML =`
        <span>${index +1}.</span>
        <span>${user.name}</span>
        <span>-</span>
        <span class="username">${user.username}</span>
        `;
        //3.2 Append the current user li tag to the UL tag
        ul.appendChild(li);
    });
}



// Add a search function to the DOM
function searchUserByUsername(){
    const input = document.getElementById("search");
    const ul = document.getElementById("user-list-container");
    const inputValue = input.value.toUpperCase();
    const userlist = ul.querySelectorAll("li")
    //console.log(userlist)
    //loop through all the user list and render the one that match the search
    for(let index = 0; index < userlist.length; index++){
        const usernameSpanTag = userlist[index].querySelector(".username")
        const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
        const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;
        if(isMatch){
            userlist[index].style.display = "block"
        }else{
            userlist[index].style.display="none";
        }
    }
    
}

//calling fetch function
fetchUser();

