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