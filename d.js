document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
  
    if (!name || !email || !checkin || !checkout) {
      alert('Please fill in all fields.');
      return;
    }
  
    if (new Date(checkin) >= new Date(checkout)) {
      alert('Check-out date must be after check-in date.');
      return;
    }
  
    alert(Thank you, ${name}! Your booking is confirmed.);
    document.getElementById('bookingForm').reset();
  });
  
  
  
