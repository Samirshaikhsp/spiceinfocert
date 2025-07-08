const certificates = {
  "SPICEINFO/FSWD/072024/001": {
    name: "Vaibhav More",
    course: "Become a Full Stack Web Developer",
    status: "Verified"
  },
  // Add more certificate records here
};

function verifyCertificate() {
  const input = document.getElementById('certificateId').value.trim();
  const resultDiv = document.getElementById('result');

  if (certificates[input]) {
    const cert = certificates[input];
    resultDiv.innerHTML = `✅ <b>${cert.name}</b> has successfully completed the course <i>\"${cert.course}\"</i>.<br>Status: <span style='color:green;'>${cert.status}</span>`;
  } else {
    resultDiv.innerHTML = `❌ Certificate not found. Please check the ID and try again.`;
  }
}
