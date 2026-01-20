function payNow() {
  const mobileNumber = "9112152627";
  const upiProvider = "ybl"; // PhonePe
  const upiId = `${mobileNumber}@${upiProvider}`;

  const amount = "1";
  const name = "All In One Bundle";
  const txnNote = "Lifetime Access";

  const upiUrl =
    `upi://pay?pa=${upiId}` +
    `&pn=${encodeURIComponent(name)}` +
    `&am=${amount}` +
    `&cu=INR` +
    `&tn=${encodeURIComponent(txnNote)}`;

  // Open UPI app (mobile only)
  window.location.href = upiUrl;
}
