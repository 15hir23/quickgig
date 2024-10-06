// Timer logic
let countdownElement = document.getElementById('countdown');
let time = 30; // 5 minutes in seconds

let timer = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) seconds = '0' + seconds;

    countdownElement.textContent = `${minutes}:${seconds}`;
    time--;

    if (time < 0) {
        clearInterval(timer);
        document.querySelectorAll('.bid-btn').forEach(btn => btn.disabled = true);
        alert('Bidding has ended!');
    }
}, 1000);

// Bid Popup logic
let bidBtns = document.querySelectorAll('.bid-btn');
let popup = document.getElementById('popup');
let closePopupBtn = document.getElementById('closePopup');
let bidForm = document.getElementById('bidForm');
let currentBidElem = document.getElementById('currentBid');
let bidderNameElem = document.getElementById('bidderName');

bidBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        let card = this.parentElement;
        let currentBid = card.getAttribute('data-bid');
        let username = card.getAttribute('data-username');

        bidderNameElem.textContent = username;
        currentBidElem.textContent = currentBid;

        popup.style.display = 'flex';
    });
});

closePopupBtn.addEventListener('click', function() {
    popup.style.display = 'none';
});

bidForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let newBid = document.getElementById('newBid').value;

    if (newBid > currentBidElem.textContent) {
        alert('Bid placed successfully!');
        popup.style.display = 'none';
    } else {
        alert('Your bid must be higher than the current bid!');
    }
});

let highestBid = 0;
let highestBidder = '';

function submitBid() {
    const bidId = document.getElementById("newBidId").value;
    const bidAmount = document.getElementById("newBid").value;

    if (bidAmount > highestBid) {
        highestBid = bidAmount;
        highestBidder = bidId;

        document.getElementById("bidderName").textContent = highestBidder;
        document.getElementById("highestBidder").style.display = "block";
    }

    closePopup(); // Close the popup after submitting bid
}

function openPopup() {
    document.getElementById("biddingPopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("biddingPopup").style.display = "none";
}
