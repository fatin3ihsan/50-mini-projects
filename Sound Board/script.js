// const button = document.querySelector(".btn");
// const applause = document.getElementById("applause");
// const boo = document.getElementById("boo");
// const gasp = document.getElementById("gasp");
// const tada = document.getElementById("tada");
// const victory = document.getElementById("victory");
// const wrong = document.getElementById("wrong");

// applauseBtn = document.createElement("button");
// applauseBtn.innerHTML = "Applause";
// applauseBtn.className = "btn";
// applause.play();

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}