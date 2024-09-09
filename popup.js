document.getElementById("hashButton").addEventListener("click", async () => {
    const inputValue = document.getElementById("inputValue").value;
    if (inputValue) {
        const hash = await sha256(inputValue);
        console.log(`SHA-256 Hash: ${hash}`);
        document.getElementById("hashed").innerHTML = hash;
    } else {
        document.getElementById("hashed").innerHTML = "Please enter a value to hash.";
    }
});

async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    return hashHex;
}