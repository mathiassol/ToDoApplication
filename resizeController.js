const container = document.getElementById("container");
const leftPanel = document.getElementById("left_panel");
const rightPanel = document.getElementById("right_panel");
const drag = document.getElementById("drag");

let isResizing = false;

function getStoredPosition() {
    let ratio = parseFloat(localStorage.getItem("panelPosition"));
    return isNaN(ratio) ? 0.2 : ratio;
}
function savePosition(ratio) {
    localStorage.setItem("panelPosition", ratio);
}
function updatePanelSize(ratio) {
    let containerWidth = container.clientWidth;
    let minWidth = containerWidth * 0.15;
    let maxWidth = containerWidth * 0.5;
    let leftWidth = minWidth + ratio * (maxWidth - minWidth);

    leftPanel.style.width = leftWidth + "px";
    rightPanel.style.width = containerWidth - leftWidth - drag.clientWidth + "px";
}
function resize(e) {
    if (!isResizing) return;

    let containerWidth = container.clientWidth;
    let minWidth = containerWidth * 0.15;
    let maxWidth = containerWidth * 0.5;
    let leftWidth = Math.max(minWidth, Math.min(e.clientX, maxWidth));

    let ratio = (leftWidth - minWidth) / (maxWidth - minWidth);
    savePosition(ratio);
    updatePanelSize(ratio);
}
function stopResize() {
    isResizing = false;
    document.removeEventListener("mousemove", resize);
    document.removeEventListener("mouseup", stopResize);
}
updatePanelSize(getStoredPosition());

drag.addEventListener("mousedown", (e) => {
    isResizing = true;
    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", stopResize);
});
document.addEventListener("fullscreenchange", () => {
    updatePanelSize(getStoredPosition());
});
window.addEventListener("resize", () => {
    updatePanelSize(getStoredPosition());
});