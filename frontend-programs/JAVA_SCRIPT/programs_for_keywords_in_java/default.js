
// default is used in switch case and is executed when other cases in the switch case fails.

let day = "Saturday";
switch (day) {
    case "Monday":
        console.log("Start of the work week");
        break;
    default:
        console.log("Weekend");
}
