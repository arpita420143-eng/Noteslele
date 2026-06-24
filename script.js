// 1. Chapter Switch Logic
function changeChapter(event, chapterId) {
    let contents = document.querySelectorAll('.chapter-content');
    contents.forEach(content => content.classList.remove('active-content'));
    
    let buttons = document.querySelectorAll('.chap-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(chapterId).classList.add('active-content');
    event.currentTarget.classList.add('active');
}

// 2. Video Player Logic
function playVideo(type, url) {
    let ytPlayer = document.getElementById('yt-player-ch1');
    let htmlPlayer = document.getElementById('html-player-ch1');

    if(type === 'youtube') {
        htmlPlayer.style.display = 'none';
        htmlPlayer.pause();
        ytPlayer.style.display = 'block';
        ytPlayer.src = url;
    } else {
        ytPlayer.style.display = 'none';
        ytPlayer.src = ""; 
        htmlPlayer.style.display = 'block';

        if(type === 'mp4') {
            htmlPlayer.src = url;
            htmlPlayer.play();
        } else if (type === 'm3u8' && Hls.isSupported()) {
            let hls = new Hls();
            hls.loadSource(url);
            hls.attachMedia(htmlPlayer);
            hls.on(Hls.Events.MANIFEST_PARSED, function() {
                htmlPlayer.play();
            });
        } else if (type === 'mpd' && typeof dashjs !== 'undefined') {
            let player = dashjs.MediaPlayer().create();
            player.initialize(htmlPlayer, url, true);
        } else {
            alert("Your browser does not support this video format.");
        }
    }
}

// 3. Daily Exam Timer (20 Mins)
let dailyTimerInterval;
function startDailyExam() {
    document.getElementById('daily-start-sec').style.display = 'none';
    document.getElementById('daily-exam-sec').style.display = 'block';
    
    let time = 20 * 60; 
    let timerDisplay = document.getElementById('daily-timer');

    dailyTimerInterval = setInterval(function() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        if(seconds < 10) seconds = "0" + seconds;
        timerDisplay.innerHTML = minutes + ":" + seconds;
        time--;
        if (time < 0) {
            clearInterval(dailyTimerInterval);
            alert("Time is up! Your Daily Exam is auto-submitted.");
            submitDailyExam();
        }
    }, 1000);
}

function submitDailyExam() {
    clearInterval(dailyTimerInterval);
    document.getElementById('daily-exam-sec').style.display = 'none';
    document.getElementById('daily-result-sec').style.display = 'block';
}

// 4. Chapter DPP Timer (15 Mins)
let chapterTimerInterval;
function startExam() {
    document.getElementById('dpp-start-sec').style.display = 'none';
    document.getElementById('dpp-exam-sec').style.display = 'block';
    
    let time = 15 * 60;
    let timerDisplay = document.getElementById('timer');

    chapterTimerInterval = setInterval(function() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        if(seconds < 10) seconds = "0" + seconds;
        timerDisplay.innerHTML = minutes + ":" + seconds;
        time--;
        if (time < 0) {
            clearInterval(chapterTimerInterval);
            alert("Time is up! Auto-submitting your exam.");
            submitExam();
        }
    }, 1000);
}

function submitExam() {
    clearInterval(chapterTimerInterval);
    document.getElementById('dpp-exam-sec').style.display = 'none';
    document.getElementById('dpp-result-sec').style.display = 'block';
}

// 5. Anti-Theft Security Code
document.addEventListener("contextmenu", function(e){ e.preventDefault(); });
document.onkeydown = function(e) {
    if(e.keyCode == 123 || 
       (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'C'.charCodeAt(0) || e.keyCode == 'J'.charCodeAt(0))) || 
       (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) {
        return false;
    }
}
