function addRandomEpisodeButton() {
    // Check if button already exists
    if (document.getElementById("random-episode-btn")) return;

    // Find the button row (but not inside a preview modal)
    const buttonRow = document.querySelector(".buttonControls--container:not(.has-smaller-buttons)");

    console.log("🎲 Adding 'Random Episode' button...");

    // Create button
    const randomButton = document.createElement("button");
    randomButton.id = "random-episode-btn";
    randomButton.setAttribute("aria-label", "Random Episode");
    randomButton.classList.add("color-supplementary", "hasIcon", "round", "ltr-1t5n97z");
    randomButton.innerHTML = `<div class="ltr-1st24vv">
                                <div class="small ltr-iyulz3" role="presentation">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="currentColor" d="M20.25 4.5H8.25C7.25629 4.50277 6.30409 4.89875 5.60144 5.60144C4.89875 6.30409 4.50277 7.25629 4.5 8.25V20.25C4.5 22.3125 6.18753 24 8.25 24H20.25C22.3125 24 24 22.3125 24 20.25V8.25C24 6.18753 22.3125 4.5 20.25 4.5ZM9.75 21C9.15305 20.9998 8.58065 20.7625 8.15869 20.3402C7.73673 19.918 7.49978 19.3454 7.5 18.7485C7.50022 18.1516 7.73755 17.5792 8.15978 17.1572C8.58202 16.7353 9.15458 16.4983 9.75153 16.4985C10.3484 16.4987 10.9208 16.736 11.3428 17.1583C11.7647 17.5805 12.0017 18.1531 12.0015 18.75C12.0013 19.3469 11.764 19.9193 11.3417 20.3413C10.9195 20.7633 10.3469 21.0002 9.75 21ZM9.75 12C9.15305 11.9998 8.58065 11.7625 8.15869 11.3402C7.73673 10.918 7.49978 10.3454 7.5 9.74847C7.50022 9.15158 7.73755 8.57918 8.15978 8.15722C8.58202 7.73525 9.15458 7.49831 9.75153 7.49853C10.3484 7.49869 10.9208 7.73602 11.3428 8.15826C11.7647 8.58049 12.0017 9.15305 12.0015 9.75C12.0013 10.3469 11.764 10.9193 11.3417 11.3413C10.9195 11.7633 10.3469 12.0002 9.75 12ZM14.25 16.5C13.9544 16.4999 13.6618 16.4416 13.3887 16.3284C13.1157 16.2152 12.8677 16.0493 12.6587 15.8402C12.2367 15.418 11.9998 14.8454 12 14.2485C12.0001 13.9529 12.0584 13.6603 12.1716 13.3873C12.2848 13.1142 12.4507 12.8661 12.6598 12.6572C13.082 12.2353 13.6546 11.9983 14.2515 11.9985C14.8484 11.9987 15.4208 12.236 15.8428 12.6583C16.2647 13.0805 16.5017 13.6531 16.5015 14.25C16.5013 14.8469 16.264 15.4193 15.8417 15.8413C15.4195 16.2633 14.8469 16.5002 14.25 16.5ZM18.75 21C18.1531 20.9998 17.5807 20.7625 17.1587 20.3402C16.7367 19.918 16.4998 19.3454 16.5 18.7485C16.5002 18.1516 16.7375 17.5792 17.1598 17.1572C17.582 16.7353 18.1546 16.4983 18.7515 16.4985C19.3484 16.4987 19.9208 16.736 20.3428 17.1583C20.7647 17.5805 21.0017 18.1531 21.0015 18.75C21.0013 19.3469 20.764 19.9193 20.3417 20.3413C19.9195 20.7633 19.3469 21.0002 18.75 21ZM18.75 12C18.1531 11.9998 17.5807 11.7625 17.1587 11.3402C16.7367 10.918 16.4998 10.3454 16.5 9.74847C16.5002 9.15158 16.7375 8.57918 17.1598 8.15722C17.582 7.73525 18.1546 7.49831 18.7515 7.49853C19.3484 7.49869 19.9208 7.73602 20.3428 8.15826C20.7647 8.58049 21.0017 9.15305 21.0015 9.75C21.0013 10.3469 20.764 10.9193 20.3417 11.3413C19.9195 11.7633 19.3469 12.0002 18.75 12ZM19.4235 3C19.2481 2.15452 18.7873 1.39504 18.1185 0.848853C17.4497 0.302669 16.6135 0.0029738 15.75 0H3.75C2.75629 0.00277077 1.80407 0.398749 1.10141 1.10141C0.398749 1.80407 0.00277077 2.75629 0 3.75V15.75C0 17.556 1.293 19.074 3 19.4235V4.5C3 3.675 3.675 3 4.5 3H19.4235Z"/>
                                    </svg>
                                </div>
                              </div>`;

    buttonRow.appendChild(randomButton);
    randomButton.addEventListener("click", pickRandomEpisode);
}

// Function to pick a random episode
async function pickRandomEpisode() {
    console.log("🎲 Random episode button clicked!");

    // Open the season selector
    const seasonDropdownButton = document.querySelector("button.dropdown-toggle");
    if (!seasonDropdownButton) return console.error("❌ Season dropdown button not found.");
    seasonDropdownButton.click();
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Select "See All Episodes"
    const seasonOptions = document.querySelectorAll(".episodeSelector-dropdown li[data-uia='dropdown-menu-item']");
    if (seasonOptions.length > 0) {
        seasonOptions[seasonOptions.length - 1].click();
        console.log("✅ Selected 'See All Episodes'");
        await new Promise(resolve => setTimeout(resolve, 2000));
    } else {
        return console.error("❌ Could not find 'See All Episodes' option.");
    }

    // Find all episode items and convert NodeList to an array
    const episodes = Array.from(document.querySelectorAll(".episode-item"));
    console.log(`🎲 Found ${episodes.length} episodes.`);

    if (episodes.length > 0) {
        const randomEpisode = episodes[Math.floor(Math.random() * episodes.length)];
        console.log(`🎯 Clicking on episode ${episodes.indexOf(randomEpisode) + 1}`);
        randomEpisode.click();
    } else {
        console.error("❌ No episodes found.");
    }
}

// ✅ MutationObserver: Ensures the button always appears, but NOT in preview mode
function observeNetflixChanges() {
    console.log("👀 Watching for Netflix page changes...");
    new MutationObserver(() => {
        console.log("🔄 Detected Netflix UI change. Checking for button...");
        addRandomEpisodeButton();
    }).observe(document.body, { childList: true, subtree: true });
}

// Start observer & ensure button is added
observeNetflixChanges();
addRandomEpisodeButton();