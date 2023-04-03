/**
 * 
 */


var piiRiskCategories = [];
var highRisk = {};
highRisk.name = "High";
highRisk.color = "#df3324";
highRisk.list = [];
highRisk.list.push({columnName: "frequency_ssn", image: "ssn.png", description: "Social Security Number"});
highRisk.list.push({columnName: "frequency_driverslicence", image: "driverslicense.png", description: "Drivers License"});
highRisk.list.push({columnName: "frequency_passport", image: "passport.png", description: "Passport"});
highRisk.list.push({columnName: "frequency_bankaccount", image: "bankaccount.png", description: "Bank Account Number"});
highRisk.list.push({columnName: "frequency_creditcard", image: "creditcard.png", description: "Credit Card Number"});
highRisk.list.push({columnName: "frequency_ip", image: "ssn.png", description: "Social Security Number"});
piiRiskCategories.push(highRisk);

var mediumRisk = {};
mediumRisk.name = "Medium";
mediumRisk.color = "";
mediumRisk.list = [];
mediumRisk.list.push({columnName: "frequency_phone", image: "phone.png", description: "Phone Number"});
piiRiskCategories.push(mediumRisk);

var lowRisk = {};
lowRisk.name = "Low";
lowRisk.color = "";
lowRisk.list = [];
lowRisk.list.push({columnName: "frequency_pn", image: "people.png", description: "Person Name"});
lowRisk.list.push({columnName: "frequency_email", image: "email.png", description: "Email"});
lowRisk.list.push({columnName: "frequency_address", image: "address.png", description: "Address"});
lowRisk.list.push({columnName: "frequency_hashtag", image: "hashtag.png", description: "Hashtag"});
piiRiskCategories.push(lowRisk);
