function submitFile(event) {
    document.getElementById('submitBtn').addEventListener('click', function () {
        const fileInput = document.getElementById('myFile');
        const file = fileInput.files[0];

        if (file) {
            // Create a FileReader to read the file content
            const reader = new FileReader();

            // Read the file as text (or ArrayBuffer, or DataURL based on your needs)
            reader.readAsText(file);

            // Once the file is loaded, store it in memory or process it
            reader.onload = function (event) {
                const fileContent = event.target.result;
                console.log('File content:', fileContent);

                // You can store this fileContent in a variable for in-app use
                const inAppMemory = {
                    filename: file.name,
                    content: fileContent,
                };

                console.log('Stored in memory:', inAppMemory);
            };

            // Handle errors during reading
            reader.onerror = function () {
                console.error('Error reading file:', reader.error);
            };
        } else {
            alert('No file selected. Please choose a file.');
        }
    });

}
function logout(event) {
    window.location.href = 'main.html';
}
