document.getElementById("newFile").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("fileModal").style.display = "block";
});
document.getElementById("cancelButton").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("fileModal").style.display = "none";
    document.getElementById("fileName").value = "";
});
function hasNonSpaceCharacter(str) {
    return /\S/.test(str);
}
document.getElementById("okButton").addEventListener("click", function() {
    let fileName = document.getElementById("fileName").value.trim();
    if (hasNonSpaceCharacter(fileName) === false) {
        document.getElementById("nameText").textContent = "Name Requierd";
        document.getElementById("fileName").value = "";
    } else {
        document.getElementById("nameText").textContent = "Enter file name:";
        document.getElementById("fileName").value = "";
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
        li.querySelector(".deleteBtn").addEventListener("click", function() {
            li.remove();
        });
        li.querySelector(".renameBtn").addEventListener("click", function() {
            const currentLi = li;

            document.getElementById("overlay2").style.display = "block";
            document.getElementById("fileModal2").style.display = "block";
            document.getElementById("fileName2").value = currentLi.querySelector(".file-name").textContent;

            document.getElementById("okButton2").addEventListener("click", function() {
                let newName = document.getElementById("fileName2").value.trim();
                if (hasNonSpaceCharacter(newName) === false) {
                    document.getElementById("nameText2").textContent = "Name Required";
                    document.getElementById("fileName2").value = "";
                } else {
                    currentLi.querySelector(".file-name").textContent = newName.trim();
                    document.getElementById("overlay2").style.display = "none";
                    document.getElementById("fileModal2").style.display = "none";
                }
            });
            document.getElementById("cancelButton2").addEventListener("click", function() {
                document.getElementById("overlay2").style.display = "none";
                document.getElementById("fileModal2").style.display = "none";
                document.getElementById("fileName2").value = "";
            });
        });

        document.getElementById("cancelButton2").addEventListener("click", function() {
            document.getElementById("overlay2").style.display = "none";
            document.getElementById("fileModal2").style.display = "none";
            document.getElementById("fileName2").value = "";
        });



        document.getElementById("files").appendChild(li);
        document.getElementById("overlay").style.display = "none";
        document.getElementById("fileModal").style.display = "none";
    }

    document.getElementById("fileName").value = "";
});