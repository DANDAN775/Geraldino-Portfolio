Interactives:
1. Smooth Scrolling on Navigation Link Click
When I click on a navigation link, the page scrolls smoothly to the target section instead of jumping instantly. I utilized the CSS property scroll-behavior: smooth; in the body style to enable smooth scrolling for anchor links. This effect is triggered by the click event on each navigation link. The default jump behavior is overridden by the smooth scrolling property.

2. Contact Form Submission with Validation
When I submit the contact form, it validates the input fields to ensure they are filled out and that the email format is correct. I added an event listener to the form that checks if the fields are empty and uses a regular expression to validate the email format. If validation fails, an error message is displayed. This occurs on the submit event of the contact form. If validation fails, the form submission is prevented, and an error message is shown.

3. Dynamic Response Message After Form Submission
After successfully submitting the contact form, a confirmation message is displayed to the user. I used a timeout to simulate a message being sent, and then updated the response message to thank the user for their submission. This happens after the form is validated and submitted. The form fields are reset after the message is displayed.

4. Interactive Job Experience Details on Click
When I click on a job experience paragraph, a modal popup appears with additional details about the job. I added an event listener to each paragraph in the job experience section that triggers the showModal function, creating a modal overlay with the job details. This occurs on the click event of the job experience paragraphs. The modal remains open until the user clicks the close button, which removes the modal from the DOM.

5. Hover Effect on Job Experience Paragraphs
When I hover over a job experience paragraph, the text color changes and the font becomes bold to indicate interactivity. I applied a CSS hover effect that changes the color and weight of the text when the mouse is over the paragraph. This happens on the hover event of the job experience paragraphs. The effect is removed when the mouse leaves the paragraph, returning it to its original style.
