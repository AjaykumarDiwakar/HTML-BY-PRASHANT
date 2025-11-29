var n = 10;
if (n % 100 == 0 && n % 400 != 0) {
  console.log("Not a leap year");
} else if (n % 4 == 0) {
  console.log("This is a leap year");
} else {
  console.log("This is not a leap year");
}
