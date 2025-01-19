const accountId = 28112000
let accountEmail = "nirajsharma@google.com"
var accountPassword = "NirajKumarSharma@Niraj@kumar@SharmaAat"
accountCity = "Bangalore"


// accountId = 2234  // not allowed

accountEmail = "Niraj@spacex.com"
accountPassword = "@SpaceX"
accountCity = "LA"


/*
prefer not to use var
because of issues in block scope and functional scope
*/


console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)

console.log([accountEmail, accountId, accountPassword, accountCity])
console.table([accountEmail, accountId, accountPassword, accountCity])