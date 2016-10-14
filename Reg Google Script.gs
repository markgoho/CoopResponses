function myFunction(e) {
  
	// general registration data from form
	var className = e.values [1];
	var teacherName = e.values[2];
	var teacherEmail = e.values[3];
	var classDesc = e.values[6];
	var classAge = e.values[9];
	var classCost = e.values[10];
	var checkRecipient = e.values[11];

	// Construct E-mail Subject
	var subject = "Class Description Spring 2017 - ";
	subject +=  teacherName;
	subject += " - ";
	subject += className;

	// Construct E-mail Message
	var Message = "Welcome to Awana Clubs at Pittsford Community Church.\n\n";
	Message = Message + "This e-mail confirms that we have received registration information for " + FirstName + " " + LastName + " for Awana this year at PCC.\n\n";
	Message = Message + "The cost for your child to participate in " + Club + " this year is:    $" + FinalCost + ".\n\n";
	Message = Message + "Please print this e-mail invoice upon receipt.  Submit the printed invoice with payment of cash or check (payable to PCC). "
	Message = Message + "Invoice and payment should be delivered to the box outside Laura Thurston's office or mailed to:\n\n";
	Message = Message + "   Pittsford Community Church\n   Attn: Awana\n   421 Marsh Road\n   Pittsford, NY 14534\n\n";
	Message = Message + "The first night of club this year is Wednesday, September 21 at 6:30 pm.  See you then!\n\n";
	Message = Message + "Sincerely,\n\nKathy Gonzales,\nAwana Commander\npittsfordccawana@gmail.com";

	// Send e-mail
	MailApp.sendEmail(UserEmail, Subject, Message);

}
