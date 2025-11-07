const accountId = 144553
let accountEmail = "rajeev@google.com"
var accountPassword = "1234"
accountCity = "Purnea"
let accountState

// accountId = 2 // not allowed

accountEmail = "hcs@gmail.com"
accountPassword = "25426"
accountCity = "Nalanda"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
Do not prefer to use var 
because of issue of block scope({}) and functional scope
*/