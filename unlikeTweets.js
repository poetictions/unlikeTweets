function nextUnlike() {
  return document.querySelector('[data-testid="unlike"]');
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function removeAll() {
  let count = 0;
  let next = nextUnlike();

  while (next && count < 500) {
    next.focus();
    next.click();
    console.log(`Unliked ${++count} tweets`);

    // Reduce the wait time to make the process faster
    await wait(200);

    // Every 100 tweets, wait for a longer period to avoid rate-limiting
    if (count % 100 === 0) {
      console.log('Waiting to prevent rate-limiting...');
      await wait(5000); // 5 seconds
    }

    next = nextUnlike();
  }

  if (next) {
    console.log('Finished early to prevent rate-limiting');
  } else {
    console.log('Finished, count =', count);
  }
}

// Start the process
removeAll();
