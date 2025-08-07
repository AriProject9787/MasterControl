
  // Set expiry date & time (YYYY-MM-DDTHH:MM:SS in ISO format)
  const expiryDate = new Date("2025-04-10T23:59:59");

  // Check current time
  const now = new Date();

  // Compare
  if (now >= expiryDate) {
    alert("⚠️ This site has expired. Please contact the site owner for access.");
    document.body.innerHTML = "<div style='text-align:center;padding:50px;font-size:1.5rem;color:red;'>⚠️ This site has expired.<br>Please contact <a href='mailto:ariofficial9787@gmail.com' style='color:blue;'>ariofficial9787@gmail.com</a></div>";
  }
