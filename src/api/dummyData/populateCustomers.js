const Customer = require("../schema/customer.js");

exports.populateCustomers = function () {

Customer.insertMany([
  {
		"name": "Anne Duran",
		"email": "sapien.aenean.massa@protonmail.net",
		"password": "VXG90HUY0VZ",
		"salt": "JCL30KWH3XV"
	},
	{
		"name": "Isabelle Perkins",
		"email": "lorem@google.couk",
		"password": "YWF07VCG8KG",
		"salt": "EIF15XID4LB"
	},
	{
		"name": "Oliver Stanton",
		"email": "nisi.a@google.ca",
		"password": "KOG69OGZ1EN",
		"salt": "LMV94CDW9JH"
	},
	{
		"name": "Hyatt Pittman",
		"email": "duis.gravida@protonmail.net",
		"password": "CXI21XUA2YZ",
		"salt": "EAM33TXG2UY"
	},
	{
		"name": "Norman Huffman",
		"email": "praesent@aol.edu",
		"password": "FTO38PST7JY",
		"salt": "JWM51XTZ2ME"
	}
])
  .then(() => {console.log("Customers inserted")})
  .catch((err) => {console.error(err);});
};
