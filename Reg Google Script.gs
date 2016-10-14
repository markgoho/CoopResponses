function descriptionReponse(e) {
  
	// general registration data from form
	var className = e.values[1];
	var teacherName = e.values[2];
	var teacherEmail = e.values[3];
	var coteacherName = e.values[4];
	var coteacherEmail = e.values[5];
	var classDesc = e.values[6];
	var classAge = e.values[9];
	var classCost = e.values[10];
	var checkRecipient = e.values[11];
	var responseUrl = e.getEditResponseUrl();

	// Construct E-mail Subject
	var subject = "Class Description Spring 2017 - ";
	subject +=  teacherName;
	subject += " - ";
	subject += className;

	// Construct E-mail message
	var message = "Thanks for submitting a class description!\n\n";
	message += "This e-mail confirms that we have received your class information for " + className + ".\n\n";
	message += "Please ensure the following information is correct:\n\n";
	message += "Class Name: " + className + "\n";
	message += "Teacher Name: " + teacherName + "\n";
	if (coteacherName !== null) {
		message += "Co-teacher Name: " + coteacherName + "\n";
	}
	message += "Age Range: " + classAge + "\n";
	message += "Cost: " + classCost + "\n";
	message += "Check made to: " + checkRecipient + "\n\n";
	message += "If you need to edit your response, please click the following URL:\n\n";
	message += responseUrl + "\n\n";
	message += "If you have any questions or concerns please reply to this email.";

	// Send e-mail
	MailApp.sendEmail({
		to: teacherEmail,
		subject: subject,
		cc: coteacherEmail,
		body: message,
		replyTo: "mac68@rochester.rr.com"
	});

}