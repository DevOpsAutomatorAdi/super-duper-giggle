function payNow() {
  const mobileNumber = "7821847477";
  const upiProvider = "ibl"; // PhonePe
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
