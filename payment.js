function payNow() {
  const upiId = "aaditya.sirsam@okaxis";
  const amount = "1";
  const name = "All In One Bundle";
  const txnNote = "Lifetime Access";

  const upiUrl =
    `upi://pay?pa=${upiId}` +
    `&pn=${encodeURIComponent(name)}` +
    `&am=${amount}` +
    `&cu=INR` +
    `&tn=${encodeURIComponent(txnNote)}`;

  // Open UPI app
  window.location.href = upiUrl;

  // Fake success alert after returning
  setTimeout(() => {
    alert("Payment successful");
  }, 3000);
}
