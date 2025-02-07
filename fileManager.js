document.getElementById("newFile").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("fileModal").style.display = "block";
});

document.getElementById("cancelButton").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("fileModal").style.display = "none";
});

function hasLetters(str) {
    return /[a-zA-Z]/.test(str);
}

document.getElementById("okButton").addEventListener("click", function() {
    let fileName = document.getElementById("fileName").value.trim();
    if (fileName) {
        let li = document.createElement("li");
        li.setAttribute("class", "item");

        li.innerHTML = `
            <span class="file-name">${fileName}</span>
            <label class="popup">
                <input type="checkbox">
                <div class="burger" tabindex="0">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav class="popup-window">
                    <legend>Actions</legend>
                    <ul>
                        <li>
                            <button class="renameBtn">
                                <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
                                </svg>
                                <span>Rename</span>
                            </button>
                        </li>
                        <hr>
                        <li>
                            <button class="deleteBtn">
                                <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                                    <line y2="18" x2="6" y1="6" x1="18"></line>
                                    <line y2="18" x2="18" y1="6" x1="6"></line>
                                </svg>
                                <span>Delete</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </label>
        `;

        // Delete functionality
        li.querySelector(".deleteBtn").addEventListener("click", function() {
            li.remove();
        });

        // Rename functionality
        li.querySelector(".renameBtn").addEventListener("click", function() {
            document.getElementById("overlay2").style.display = "block";
            document.getElementById("fileModal2").style.display = "block";
        });
        document.getElementById("okButton2").addEventListener("click", function() {
            let newName = document.getElementById("fileName2").value.trim();
            if (hasLetters(newName) === false) {

            } else {
                if (newName && newName.trim()) {
                    li.querySelector(".file-name").textContent = newName.trim();
                    fileName = newName.trim(); // Update stored name
                    document.getElementById("overlay2").style.display = "none";
                    document.getElementById("fileModal2").style.display = "none";
                }
            }

        })

        document.getElementById("cancelButton2").addEventListener("click", function() {
            document.getElementById("overlay2").style.display = "none";
            document.getElementById("fileModal2").style.display = "none";
        });



        document.getElementById("files").appendChild(li);
    }

    document.getElementById("overlay").style.display = "none";
    document.getElementById("fileModal").style.display = "none";
    document.getElementById("fileName").value = "";
});
