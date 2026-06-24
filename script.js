// Function to switch between chapters
function changeChapter(event, chapterId) {
    // Sabhi chapter contents ko chhupao
    let contents = document.querySelectorAll('.chapter-content');
    contents.forEach(content => {
        content.classList.remove('active-content');
    });
    
    // Sabhi buttons se 'active' status hatao
    let buttons = document.querySelectorAll('.chap-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Clicked chapter ko show karo aur button ko active karo
    document.getElementById(chapterId).classList.add('active-content');
    event.currentTarget.classList.add('active');
}

// PREMIUM SECURITY CODE (Anti-Theft)
// Disable Right Click
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
});

// Disable Inspect Element Keyboard Shortcuts
document.onkeydown = function(e) {
    if(e.keyCode == 123) { // F12 Key
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { // Ctrl+Shift+I
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { // Ctrl+Shift+C
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { // Ctrl+Shift+J
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { // Ctrl+U (View Source)
        return false;
    }
}
