# Unlike Tweets
This JavaScript script automates the process of unliking tweets on your Twitter account. It unlikes tweets in bulk directly from your browser's console.

### How it Works
1. Selects the Unlike Button: The script identifies the "unlike" button for each liked tweet.
2. Clicks the Button: It automatically clicks the "unlike" button to remove the like from the tweet.
3. Delays Between Actions: Introduces short delays between actions to avoid triggering Twitter's rate limits.
4. Periodic Longer Delays: Includes periodic longer delays after unliking a certain number of tweets to further mitigate the risk of rate-limiting.
5. Stops After a Set Limit: The script stops after unliking 500 tweets to prevent excessive actions that could lead to account suspension.
   
### Usage
#### Step-by-Step Instructions
1. Open Twitter Likes Page: Go to your Twitter Likes page (e.g., https://twitter.com/your_username/likes).
2. Open Browser Developer Tools:
      * Chrome: Press F12 or right-click on the page and select "Inspect".
      * Firefox: Press F12 or right-click on the page and select "Inspect Element".
      * Edge: Press F12 or right-click on the page and select "Inspect".
3. Go to the Console Tab: Navigate to the "Console" tab within the developer tools.
4. Paste the Script: Copy the entire script provided below and paste it into the console.
5. Run the Script: Press Enter to execute the script.
