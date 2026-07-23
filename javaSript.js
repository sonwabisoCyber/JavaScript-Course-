// Simulate a login role check (This check if the user logs in as a municipality staff or as a Resident)
const role = "resident"
const isLoggedIn = true // Flag to track user login status

// Checks if its a resident or the municipality staff member 
if (role === "resident") {
    console.log("Welcome! Redirecting to Resident Dashboard")
} else if (role === "staff") {
    console.log("Welcome! Redirecting to Staff Dashboard")
} else {
    console.log("Unknown role. Access denied.")
}

// Check if logged in using.  Both must be true the user must be logged in and be a staff member 
if (isLoggedIn && role === "staff") {
    console.log("Staff member is logged in")
}

// 
let dashboard = role === "resident" ? "Resident Dashboard" : "Staff Dashboard"
console.log(`You are being directed to: ${dashboard}`)

// Switch for issue status
const issueStatus = "pending"

switch (issueStatus) {
    case "pending":
        console.log("Issue is awaiting action")
        break
    case "in-progress":
        console.log("Issue is being worked on")
        break
    case "resolved":
        console.log("Issue has been resolved")
        break
    default:
        console.log("Unknown status")
}