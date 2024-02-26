function clickSecondRefreshElement() {

    const elementsWithExactRefreshTitle = document.querySelectorAll('[title="Refresh"]');

    if (elementsWithExactRefreshTitle.length >= 2) {

        const secondElement = elementsWithExactRefreshTitle[0];

        secondElement.click();

        console.log('Clicked second element with title "Refresh"');

		// Calculate next refresh time

        const now = new Date();

        const nextRefresh = new Date(now.getTime() + 60000); // Add 1 minute to current time

        const nextRefreshTime = nextRefresh.toLocaleTimeString(); // Convert next refresh time to string format

        console.log('Button clicked at:', now.toLocaleTimeString());

        // Display countdown until next refresh

        let countdown = 60; // seconds

        const countdownInterval = setInterval(() => {

            countdown--;

            console.log(`Next refresh in: ${countdown} seconds\r`);

            if (countdown === 0) {

                clearInterval(countdownInterval);

                console.log(); // Move to the next line after countdown finishes

            }

        }, 1000); // Update countdown every second


		const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');

		const selectors = [];

		for (const alphabet of alphabets) {

			const selector = `div[class*="pa-a"].pa-${alphabet}.flexbox > div > div > span`;

			selectors.push(selector);

		}

		let elements = null;

		for (const selector of selectors) {

			elements = document.querySelectorAll(selector);

			if (elements.length >= 2) {

				break;

			}

		}

        if (elements && elements.length >= 2) {

            const secondElement = elements[0];

            console.log('Text content of the second element:', secondElement.textContent);

            const previousValue = localStorage.getItem('myKey');

            console.log('Previous localStorage value:', previousValue);

            //if (secondElement.textContent.trim() !== previousValue) {

				if (secondElement.textContent.trim() !== '0 - 0 of 0') {

					try {

						if (secondElement.textContent.trim() === '1 - 1 of 1'){

						var url=["https","://soundbible",".com/grab.php?id=1446&type=mp3"].join("");

						mCoinSound=new Audio(url);

						mCoinSound.play();

						console.log('Sound played successfully.');

						}

						if (secondElement.textContent.trim() === '1 - 2 of 2'){

						var url=["https","://soundbible",".com/grab.php?id=2210&type=mp3"].join("");

						mCoinSound=new Audio(url);

						mCoinSound.play();

						console.log('Sound played successfully.');

						}

						if (secondElement.textContent.trim() === '1 - 3 of 3'){

						var url=["https","://soundbible",".com/grab.php?id=2218&type=mp3"].join("");

						mCoinSound=new Audio(url);

						mCoinSound.play();

						console.log('Sound played successfully.');

						}

						if (secondElement.textContent.trim() === '1 - 4 of 4'){

						var url=["https","://soundbible",".com/grab.php?id=2190&type=mp3"].join("");

						mCoinSound=new Audio(url);

						mCoinSound.play();

						console.log('Sound played successfully.');

						}

						if (secondElement.textContent.trim() === '1 - 5 of 5'){

						var url=["https","://soundbible",".com/grab.php?id=2197&type=mp3"].join("");

						mCoinSound=new Audio(url);

						mCoinSound.play();

						console.log('Sound played successfully.');

						}

						try {

							for (let i = 0; i <= 5; i++) {

							//let msgText = "";

							// Select all HTML elements matching the attribute selector

							const elements = document.querySelectorAll(`[data-lp-id="MscrmControls.Grid.ReadOnlyGrid|Component2290526|null|9281653c-c3be-ee11-9079-6045bdef7c5a|incident|cc-grid|cc-grid-cell|cell-${i}-2"]`);

 
							// Check if any elements were found

							if (elements.length > 0) {

								// Iterate over each found element

								elements.forEach(element => {

									// Find the <span> element within the selected <div>

									const spanElement = element.querySelector('span');
 
									// Check if the <span> element exists

									if (spanElement) {

										// Retrieve the text content of the <span> element

										const spanText = spanElement.textContent;

										console.log("Text content of the span:", spanText);

										var msgText = "Your Queue has ticket with CaseNumber: " + spanText +" , Last refreshed at " + now.toLocaleTimeString();

										// Define the URL you want to make a request to

										const url = "https://api.telegram.org/bot6040455031:AAGlQI5tkp23S4uYS2FQacJRo5RCNDA-BKk/sendMessage?chat_id=-1002089818313&text="+msgText;
 
										// Use fetch to make a GET request to the URL

										fetch(url)

										  .then(response => {

											if (response.ok) {

											  console.log("Request successful!");

											} else {

											  console.error("Request failed with status:", response.status);

											}

										  })

										  .catch(error => {

											console.error("Request failed with error:", error);

										  });


										// Check if the browser supports notifications

										if (!("Notification" in window)) {

										  // The browser does not support notifications

										} else {

										  // Ask the user for permission to show the notification

										  Notification.requestPermission().then(function(permission) {

											if (permission === "granted") {

											  // The user granted permission

											  // Create a notification object

											  var notification = new Notification("Your FnO queue has pending CaseNumber: "+spanText);

											  // Show the notification

											  notification.show();

											} else {

											  // The user denied permission

											}

										  });

										}


									} else {

										console.log("Span element not found within the div!");

									}

								});

							} else {

								console.log("No elements found with the specified attribute selector!");

							}

						}

						} catch (error) {

						console.error('Error getting ticket number:', error);

						}

					} catch (error) {

						console.error('Error playing sound:', error);

					}

				}

                localStorage.setItem('myKey', secondElement.textContent.trim());

                console.log('Updated localStorage value:', secondElement.textContent);

            //}

            console.log('mActiveUsers:', secondElement.textContent);

        } else {

            console.log('Less than two elements found');

        }

    } else {

        console.log('Second element with title "Refresh" not found');

    }

}

clickSecondRefreshElement();

setInterval(clickSecondRefreshElement, 60000);
