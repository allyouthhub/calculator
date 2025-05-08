// Set max date to today
document.getElementById('birthdate').max = new Date().toISOString().split('T')[0];

function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const now = new Date();
    
    if (!birthdate.getTime()) {
        alert('Please select a valid date');
        return;
    }

    let years = now.getFullYear() - birthdate.getFullYear();
    let months = now.getMonth() - birthdate.getMonth();
    let days = now.getDate() - birthdate.getDate();

    if (days < 0) {
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // Calculate time difference in milliseconds
    const diff = now - birthdate;
    const daysTotal = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hoursTotal = Math.floor(diff / (1000 * 60 * 60));
    const minutesTotal = Math.floor(diff / (1000 * 60));
    const secondsTotal = Math.floor(diff / 1000);

    // Update result display
    document.getElementById('years').innerHTML = `${years} Years`;
    document.getElementById('months').innerHTML = `${months} Months`;
    document.getElementById('days').innerHTML = `${days} Days`;
    document.getElementById('hours').innerHTML = `${hoursTotal} Hours`;
    document.getElementById('minutes').innerHTML = `${minutesTotal} Minutes`;
    document.getElementById('seconds').innerHTML = `${secondsTotal} Seconds`;

    // Show result
    document.getElementById('result').classList.add('show');
}