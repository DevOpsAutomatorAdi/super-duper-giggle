function payNow() {
  const mobileNumber = "7821847477";
  const upiProvider = "ybl"; // PhonePe
  const upiId = `${mobileNumber}@${upiProvider}`;

  const amount = "1";
  const name = "All In One Bundle";
  const txnNote = "Lifetime Access";
  const txnId = "TXN" + Date.now(); // unique txn

  const upiUrl =
    `upi://pay?pa=${upiId}` +
    `&pn=${encodeURIComponent(name)}` +
    `&am=${amount}` +
    `&cu=INR` +
    `&tn=${encodeURIComponent(txnNote)}` +
    `&tr=${txnId}`;

  // 1️⃣ Open UPI app (works on mobile only)
  window.location.href = upiUrl;

  // 2️⃣ Show success alert after 30 seconds (UI-based)
  setTimeout(() => {
    alert("✅ Payment successful!");
  }, 30000); // 30 seconds
}
