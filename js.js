document.addEventListener('DOMContentLoaded', function () {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const shuffledAlphabet = shuffleArray(alphabet.split(''));

    const gameContainer = document.getElementById('matching-game');

    shuffledAlphabet.forEach(letter => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = letter;
        card.addEventListener('click', () => handleCardClick(card, letter));
        gameContainer.appendChild(card);
    });
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function handleCardClick(card, letter) {
    alert(`You clicked on the letter ${letter}`);
    // Add your game logic here
}

function playSound() {
    // Replace the following line with the actual path to your sound file for each letter
    /*const soundPath = `path/to/sound/${letter}.mp3`;
    const audio = new Audio(soundPath);
    audio.play();
*/
    alert("ok")
    // Replace the following line with the actual path to your image file for each letter
    const imagePath = 'A_Letter_LZNQBD.jpg';
    // You can use imagePath to display the image on your website, for example:
    const imageElement = document.getElementById('image-container');

    imageElement.src = imagePath;
    return true;
}

//tracingA

function reloadTracinga() {
    const canvas = document.getElementById('tracing-canvas');
    const context = canvas.getContext('2d');

    // Clear the existing content on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Add your logic to redraw the initial state on the canvas if needed
    // For demonstration purposes, let's draw a simple line

}

function reloadTracingb() {
    const canvas = document.getElementById('tracing-canvasb');
    const context = canvas.getContext('2d');

    // Clear the existing content on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Add your logic to redraw the initial state on the canvas if needed
    // For demonstration purposes, let's draw a simple line

}
function reloadTracingc() {
    const canvas = document.getElementById('tracing-canvasc');
    const context = canvas.getContext('2d');

    // Clear the existing content on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Add your logic to redraw the initial state on the canvas if needed
    // For demonstration purposes, let's draw a simple line

}
function reloadTracingd() {
    const canvas = document.getElementById('tracing-canvasd');
    const context = canvas.getContext('2d');

    // Clear the existing content on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Add your logic to redraw the initial state on the canvas if needed
    // For demonstration purposes, let's draw a simple line

}
function reloadTracinge() {
    const canvas = document.getElementById('tracing-canvase');
    const context = canvas.getContext('2d');

    // Clear the existing content on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Add your logic to redraw the initial state on the canvas if needed
    // For demonstration purposes, let's draw a simple line

}
function reloadTracingf() {
    const canvas = document.getElementById('tracing-canvasf');
    const context = canvas.getContext('2d');

    // Clear the existing content on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Add your logic to redraw the initial state on the canvas if needed
    // For demonstration purposes, let's draw a simple line

}
function reloadTracingg() {
    const canvas = document.getElementById('tracing-canvasg');
    const context = canvas.getContext('2d');

    // Clear the existing content on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Add your logic to redraw the initial state on the canvas if needed
    // For demonstration purposes, let's draw a simple line

}
function reloadTracingh() {
    const canvas = document.getElementById('tracing-canvash');
    const context = canvas.getContext('2d');

    // Clear the existing content on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Add your logic to redraw the initial state on the canvas if needed
    // For demonstration purposes, let's draw a simple line

}
function reloadTracingi() {
    const canvas = document.getElementById('tracing-canvasi');
    const context = canvas.getContext('2d');

    // Clear the existing content on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Add your logic to redraw the initial state on the canvas if needed
    // For demonstration purposes, let's draw a simple line

}
function reloadTracingj() {
    const canvas = document.getElementById('tracing-canvasj');
    const context = canvas.getContext('2d');

    // Clear the existing content on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Add your logic to redraw the initial state on the canvas if needed
    // For demonstration purposes, let's draw a simple line

}
function reloadTracingk() {
    const canvas = document.getElementById('tracing-canvask');
    const context = canvas.getContext('2d');

    // Clear the existing content on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Add your logic to redraw the initial state on the canvas if needed
    // For demonstration purposes, let's draw a simple line

}
function reloadTracingl() {
    const canvas = document.getElementById('tracing-canvasl');
    const context = canvas.getContext('2d');

    // Clear the existing content on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Add your logic to redraw the initial state on the canvas if needed
    // For demonstration purposes, let's draw a simple line

}
function reloadTracingm() {
    const canvas = document.getElementById('tracing-canvasm');
    const context = canvas.getContext('2d');

    // Clear the existing content on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Add your logic to redraw the initial state on the canvas if needed
    // For demonstration purposes, let's draw a simple line

}
function reloadTracingn() {
    const canvas = document.getElementById('tracing-canvasn');
    const context = canvas.getContext('2d');

    // Clear the existing content on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Add your logic to redraw the initial state on the canvas if needed
    // For demonstration purposes, let's draw a simple line

}
function reloadTracingo() {
    const canvas = document.getElementById('tracing-canvaso');
    const context = canvas.getContext('2d');

    // Clear the existing content on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Add your logic to redraw the initial state on the canvas if needed
    // For demonstration purposes, let's draw a simple line

}
function reloadTracingp() {
    const canvas = document.getElementById('tracing-canvasp');
    const context = canvas.getContext('2d');

    // Clear the existing content on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Add your logic to redraw the initial state on the canvas if needed
    // For demonstration purposes, let's draw a simple line

}
function reloadTracingq() {
    const canvas = document.getElementById('tracing-canvasq');
    const context = canvas.getContext('2d');

    // Clear the existing content on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Add your logic to redraw the initial state on the canvas if needed
    // For demonstration purposes, let's draw a simple line

}
function reloadTracingr() {
    const canvas = document.getElementById('tracing-canvasr');
    const context = canvas.getContext('2d');

    // Clear the existing content on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Add your logic to redraw the initial state on the canvas if needed
    // For demonstration purposes, let's draw a simple line

}
function reloadTracings() {
    const canvas = document.getElementById('tracing-canvass');
    const context = canvas.getContext('2d');

    // Clear the existing content on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Add your logic to redraw the initial state on the canvas if needed
    // For demonstration purposes, let's draw a simple line

}
function reloadTracingt() {
    const canvas = document.getElementById('tracing-canvast');
    const context = canvas.getContext('2d');

    // Clear the existing content on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Add your logic to redraw the initial state on the canvas if needed
    // For demonstration purposes, let's draw a simple line

}
function reloadTracingu() {
    const canvas = document.getElementById('tracing-canvasu');
    const context = canvas.getContext('2d');

    // Clear the existing content on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Add your logic to redraw the initial state on the canvas if needed
    // For demonstration purposes, let's draw a simple line

}
function reloadTracingv() {
    const canvas = document.getElementById('tracing-canvasv');
    const context = canvas.getContext('2d');

    // Clear the existing content on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Add your logic to redraw the initial state on the canvas if needed
    // For demonstration purposes, let's draw a simple line

}
function reloadTracingw() {
    const canvas = document.getElementById('tracing-canvasw');
    const context = canvas.getContext('2d');

    // Clear the existing content on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Add your logic to redraw the initial state on the canvas if needed
    // For demonstration purposes, let's draw a simple line

}
function reloadTracingx() {
    const canvas = document.getElementById('tracing-canvasx');
    const context = canvas.getContext('2d');

    // Clear the existing content on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Add your logic to redraw the initial state on the canvas if needed
    // For demonstration purposes, let's draw a simple line

}
function reloadTracingy() {
    const canvas = document.getElementById('tracing-canvasy');
    const context = canvas.getContext('2d');

    // Clear the existing content on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Add your logic to redraw the initial state on the canvas if needed
    // For demonstration purposes, let's draw a simple line

}
function reloadTracingz() {
    const canvas = document.getElementById('tracing-canvasz');
    const context = canvas.getContext('2d');

    // Clear the existing content on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Add your logic to redraw the initial state on the canvas if needed
    // For demonstration purposes, let's draw a simple line

}

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('tracing-canvas');
    const context = canvas.getContext('2d');

    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);


    function startDrawing() {


        isDrawing = true;
    }

    function draw(event) {
        if (!isDrawing) return;

        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        context.lineWidth = 9;
        context.lineCap = 'round';
        context.strokeStyle = '#007BFF';

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }

});




//tracingb

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('tracing-canvasb');
    const context = canvas.getContext('2d');

    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing() {
        isDrawing = true;
    }

    function draw(event) {
        if (!isDrawing) return;

        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        context.lineWidth = 9;
        context.lineCap = 'round';
        context.strokeStyle = '#007BFF';

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }
});

//tracingc

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('tracing-canvasc');
    const context = canvas.getContext('2d');

    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing() {
        isDrawing = true;
    }

    function draw(event) {
        if (!isDrawing) return;

        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        context.lineWidth = 9;
        context.lineCap = 'round';
        context.strokeStyle = '#007BFF';

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }
});

//tracingd

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('tracing-canvasd');
    const context = canvas.getContext('2d');

    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing() {
        isDrawing = true;
    }

    function draw(event) {
        if (!isDrawing) return;

        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        context.lineWidth = 9;
        context.lineCap = 'round';
        context.strokeStyle = '#007BFF';

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }
});


//tracinge

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('tracing-canvase');
    const context = canvas.getContext('2d');

    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing() {
        isDrawing = true;
    }

    function draw(event) {
        if (!isDrawing) return;

        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        context.lineWidth = 9;
        context.lineCap = 'round';
        context.strokeStyle = '#007BFF';

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }
});
//tracingf

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('tracing-canvasf');
    const context = canvas.getContext('2d');

    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing() {
        isDrawing = true;
    }

    function draw(event) {
        if (!isDrawing) return;

        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        context.lineWidth = 9;
        context.lineCap = 'round';
        context.strokeStyle = '#007BFF';

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }
});
//tracingg

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('tracing-canvasg');
    const context = canvas.getContext('2d');

    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing() {
        isDrawing = true;
    }

    function draw(event) {
        if (!isDrawing) return;

        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        context.lineWidth = 9;
        context.lineCap = 'round';
        context.strokeStyle = '#007BFF';

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }
});

//tracingh

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('tracing-canvash');
    const context = canvas.getContext('2d');

    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing() {
        isDrawing = true;
    }

    function draw(event) {
        if (!isDrawing) return;

        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        context.lineWidth = 9;
        context.lineCap = 'round';
        context.strokeStyle = '#007BFF';

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }
});

//tracingi

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('tracing-canvasi');
    const context = canvas.getContext('2d');

    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing() {
        isDrawing = true;
    }

    function draw(event) {
        if (!isDrawing) return;

        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        context.lineWidth = 9;
        context.lineCap = 'round';
        context.strokeStyle = '#007BFF';

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }
});

//tracingj

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('tracing-canvasj');
    const context = canvas.getContext('2d');

    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing() {
        isDrawing = true;
    }

    function draw(event) {
        if (!isDrawing) return;

        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        context.lineWidth = 9;
        context.lineCap = 'round';
        context.strokeStyle = '#007BFF';

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }
});
//tracingk

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('tracing-canvask');
    const context = canvas.getContext('2d');

    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing() {
        isDrawing = true;
    }

    function draw(event) {
        if (!isDrawing) return;

        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        context.lineWidth = 9;
        context.lineCap = 'round';
        context.strokeStyle = '#007BFF';

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }
});
//tracingl

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('tracing-canvasl');
    const context = canvas.getContext('2d');

    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing() {
        isDrawing = true;
    }

    function draw(event) {
        if (!isDrawing) return;

        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        context.lineWidth = 9;
        context.lineCap = 'round';
        context.strokeStyle = '#007BFF';

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }
});
//tracingm

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('tracing-canvasm');
    const context = canvas.getContext('2d');

    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing() {
        isDrawing = true;
    }

    function draw(event) {
        if (!isDrawing) return;

        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        context.lineWidth = 9;
        context.lineCap = 'round';
        context.strokeStyle = '#007BFF';

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }
});
//tracingn

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('tracing-canvasn');
    const context = canvas.getContext('2d');

    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing() {
        isDrawing = true;
    }

    function draw(event) {
        if (!isDrawing) return;

        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        context.lineWidth = 9;
        context.lineCap = 'round';
        context.strokeStyle = '#007BFF';

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }
});
//tracingo

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('tracing-canvaso');
    const context = canvas.getContext('2d');

    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing() {
        isDrawing = true;
    }

    function draw(event) {
        if (!isDrawing) return;

        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        context.lineWidth = 9;
        context.lineCap = 'round';
        context.strokeStyle = '#007BFF';

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }
});
//tracingp

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('tracing-canvasp');
    const context = canvas.getContext('2d');

    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing() {
        isDrawing = true;
    }

    function draw(event) {
        if (!isDrawing) return;

        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        context.lineWidth = 9;
        context.lineCap = 'round';
        context.strokeStyle = '#007BFF';

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }
});
//tracingqq

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('tracing-canvasq');
    const context = canvas.getContext('2d');

    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing() {
        isDrawing = true;
    }

    function draw(event) {
        if (!isDrawing) return;

        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        context.lineWidth = 9;
        context.lineCap = 'round';
        context.strokeStyle = '#007BFF';

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }
});
//tracingr

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('tracing-canvasr');
    const context = canvas.getContext('2d');

    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing() {
        isDrawing = true;
    }

    function draw(event) {
        if (!isDrawing) return;

        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        context.lineWidth = 15;
        context.lineCap = 'round';
        context.strokeStyle = '#007BFF';

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }
});
//tracings

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('tracing-canvass');
    const context = canvas.getContext('2d');

    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing() {
        isDrawing = true;
    }

    function draw(event) {
        if (!isDrawing) return;

        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        context.lineWidth = 9;
        context.lineCap = 'round';
        context.strokeStyle = '#007BFF';

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }
});
//tracingt

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('tracing-canvast');
    const context = canvas.getContext('2d');

    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing() {
        isDrawing = true;
    }

    function draw(event) {
        if (!isDrawing) return;

        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        context.lineWidth = 9;
        context.lineCap = 'round';
        context.strokeStyle = '#007BFF';

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }
});
//tracingu

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('tracing-canvasu');
    const context = canvas.getContext('2d');

    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing() {
        isDrawing = true;
    }

    function draw(event) {
        if (!isDrawing) return;

        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        context.lineWidth = 9;
        context.lineCap = 'round';
        context.strokeStyle = '#007BFF';

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }
});
//tracingv

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('tracing-canvasv');
    const context = canvas.getContext('2d');

    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing() {
        isDrawing = true;
    }

    function draw(event) {
        if (!isDrawing) return;

        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        context.lineWidth = 9;
        context.lineCap = 'round';
        context.strokeStyle = '#007BFF';

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }
});
//tracingw

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('tracing-canvasw');
    const context = canvas.getContext('2d');

    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing() {
        isDrawing = true;
    }

    function draw(event) {
        if (!isDrawing) return;

        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        context.lineWidth = 9;
        context.lineCap = 'round';
        context.strokeStyle = '#007BFF';

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }
});
//tracingx

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('tracing-canvasx');
    const context = canvas.getContext('2d');

    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing() {
        isDrawing = true;
    }

    function draw(event) {
        if (!isDrawing) return;

        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        context.lineWidth = 9;
        context.lineCap = 'round';
        context.strokeStyle = '#007BFF';

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }
});
//tracingy

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('tracing-canvasy');
    const context = canvas.getContext('2d');

    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing() {
        isDrawing = true;
    }

    function draw(event) {
        if (!isDrawing) return;

        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        context.lineWidth = 9;
        context.lineCap = 'round';
        context.strokeStyle = '#007BFF';

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }
});
//tracingz

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('tracing-canvasz');
    const context = canvas.getContext('2d');

    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing() {
        isDrawing = true;
    }

    function draw(event) {
        if (!isDrawing) return;

        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        context.lineWidth = 9;
        context.lineCap = 'round';
        context.strokeStyle = '#007BFF';

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }
});

//^puz
document.addEventListener('DOMContentLoaded', function () { initPuzzle(); });
function initPuzzle() {
    const puzzleContainer = document.getElementById('puzzle');
    const puzzleImage = 'images/A_Letter_LZNQBD.jpg'; // Replace with the path to your image

    puzzleContainer.style.backgroundImage = `url(${puzzleImage})`;
    puzzleContainer.style.backgroundSize = 'cover';

    const pieces = createPuzzlePieces();
    pieces.forEach(piece => puzzleContainer.appendChild(piece));
}

function createPuzzlePieces() {
    const pieces = [];
    for (let i = 0; i < 9; i++) {
        const piece = document.createElement('div');
        piece.classList.add('puzzle-piece');
        piece.style.backgroundImage = `url('images/A_Letter_LZNQBD.jpg')`; // Replace with the path to your image
        piece.style.backgroundSize = 'cover';
        piece.style.width = '100px';
        piece.style.height = '100px';
        piece.style.border = '2px solid #007BFF';
        piece.style.cursor = 'pointer';
        piece.addEventListener('mousedown', startDragging);
        pieces.push(piece);
    }
    return pieces;
}

let activePiece = null;

function startDragging(event) {
    activePiece = event.target;
    activePiece.style.zIndex = '2';

    document.addEventListener('mousemove', dragPiece);
    document.addEventListener('mouseup', stopDragging);
}

function dragPiece(event) {
    const x = event.clientX;
    const y = event.clientY;

    activePiece.style.left = x - activePiece.offsetWidth / 2 + 'px';
    activePiece.style.top = y - activePiece.offsetHeight / 2 + 'px';
}

function stopDragging() {
    activePiece.style.zIndex = '1';
    document.removeEventListener('mousemove', dragPiece);
    document.removeEventListener('mouseup', stopDragging);
}

function shufflePuzzle() {
    const puzzleContainer = document.getElementById('puzzle');
    const puzzlePieces = puzzleContainer.getElementsByClassName('puzzle-piece');

    for (let piece of puzzlePieces) {
        piece.style.left = Math.random() * (puzzleContainer.offsetWidth - piece.offsetWidth) + 'px';
        piece.style.top = Math.random() * (puzzleContainer.offsetHeight - piece.offsetHeight) + 'px';
    }
}


/////// puzzel


var rows = 3;
var columns = 3;

var currTile;
var otherTile; //blank tile


// var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var imgOrder = ["Ap/4", "Ap/2", "Ap/8", "Ap/5", "Ap/1", "Ap/6", "Ap/7", "Ap/9", "Ap/3"];

window.onload = function () {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            //<img id="0-0" src="1.jpg">
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);  //click an image to drag
            tile.addEventListener("dragover", dragOver);    //moving image around while clicked
            tile.addEventListener("dragenter", dragEnter);  //dragging image onto another one
            tile.addEventListener("dragleave", dragLeave);  //dragged image leaving anohter image
            tile.addEventListener("drop", dragDrop);        //drag an image over another image, drop the image
            tile.addEventListener("dragend", dragEnd);      //after drag drop, swap the two tiles

            document.getElementById("board").append(tile);

        }
    }
}

function dragStart() {
    currTile = this; //this refers to the img tile being dragged
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this; //this refers to the img tile being dropped on
}

function dragEnd() {
    if (!otherTile.src.includes("Ap/6.jpg")) {
        return;
    }

    let currCoords = currTile.id.split("-"); //ex) "0-0" -> ["0", "0"]
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = r == r2 && c2 == c - 1;
    let moveRight = r == r2 && c2 == c + 1;

    let moveUp = c == c2 && r2 == r - 1;
    let moveDown = c == c2 && r2 == r + 1;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isAdjacent) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;
    }


}

//4444




document.addEventListener('DOMContentLoaded', function () {
    const targetLetter = document.getElementById('target-letter');
    const resultMessage = document.getElementById('result-message');

    targetLetter.addEventListener('click', checkLetter);
});

function checkLetter() {
    const clickedLetter = this.textContent;
    const targetLetter = document.getElementById('target-letter').textContent;

    const resultMessage = document.getElementById('result-message');
    if (clickedLetter === targetLetter) {
        resultMessage.textContent = 'Correct! You found the letter ' + targetLetter;
    } else {
        resultMessage.textContent = 'Oops! Try again.';
    }

    // Change the target letter for the next round
    generateRandomLetter();
}

function generateRandomLetter() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * letters.length);
    const randomLetter = letters[randomIndex];

    const targetLetter = document.getElementById('target-letter');
    targetLetter.textContent = randomLetter;

    const resultMessage = document.getElementById('result-message');
    resultMessage.textContent = ''; // Clear the result message for the new round
}



//Alphabet quiz

document.addEventListener('DOMContentLoaded', function () {
    generateQuizQuestions();
});

const quizQuestions = [
    { question: 'What letter comes after B?', options: ['C', 'D', 'A', 'E'], correctAnswer: 'C' },
    { question: 'Which letter is a vowel?', options: ['B', 'D', 'A', 'F'], correctAnswer: 'A' },
    { question: 'What letter comes before P?', options: ['O', 'Q', 'R', 'N'], correctAnswer: 'O' }
    // Add more quiz questions as needed
];

function generateQuizQuestions() {
    const quizContainer = document.getElementById('quiz-container');

    quizQuestions.forEach((questionObj, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('quiz-question');
        questionElement.innerHTML = `<p>${index + 1}. ${questionObj.question}</p>`;

        questionObj.options.forEach((option, optionIndex) => {
            const optionElement = document.createElement('input');
            optionElement.type = 'radio';
            optionElement.name = `question-${index}`;
            optionElement.value = option;
            optionElement.id = `option-${index}-${optionIndex}`;
            const labelElement = document.createElement('label');
            labelElement.htmlFor = `option-${index}-${optionIndex}`;
            labelElement.textContent = option;

            questionElement.appendChild(optionElement);
            questionElement.appendChild(labelElement);
        });

        quizContainer.appendChild(questionElement);
    });
}

function submitQuiz() {
    const quizResult = document.getElementById('quiz-result');
    let correctAnswers = 0;

    quizQuestions.forEach((questionObj, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption && selectedOption.value === questionObj.correctAnswer) {
            correctAnswers++;
        }
    });
}
function submitQuiz() {
    const quizResult = document.getElementById('quiz-result');
    let correctAnswers = 0;

    quizQuestions.forEach((questionObj, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption && selectedOption.value === questionObj.correctAnswer) {
            correctAnswers++;
        }
    });

    quizResult.textContent = `You got ${correctAnswers} out of ${quizQuestions.length} questions correct!`;
}
// mmcards

const card = document.querySelectorAll('.cell')
const front = document.querySelectorAll('.front')
const container = document.querySelector('.container')
const score = document.querySelector('.score span')



suffleImage()
clicking()
function suffleImage(){


    card.forEach(c=>{

        const num = [...Array(card.length).keys()]
        const random = Math.floor(Math.random()*card.length)

        c.style.order = num[random]
    })
}


function clicking(){

    for(let i =0; i<card.length; i++){


        front[i].classList.add('show')

        setInterval(() => {
            front[i].classList.remove('show')
        }, 2000);

        card[i].addEventListener('click' ,()=>{

            front[i].classList.add('flip')
           const filppedCard = document.querySelectorAll('.flip')

            if(filppedCard.length == 2){

                container.style.pointerEvents ='none'
                
                setInterval(() => {
                    
                    container.style.pointerEvents ='all'
                }, 1000);
 
                match(filppedCard[0] , filppedCard[1])
            }
        })
    }
}




function match(cardOne , cardTwo){

    if(cardOne.dataset.index == cardTwo.dataset.index){

        score.innerHTML = parseInt(score.innerHTML) + 1
       
        cardOne.classList.remove('flip') 
        cardTwo.classList.remove('flip') 


        cardOne.classList.add('match')
        cardTwo.classList.add('match')


    }else{

        setTimeout(() => {
            
            cardOne.classList.remove('flip') 
            cardTwo.classList.remove('flip') 
        }, 1000);
    }
}


var dd_main = document.querySelector(".dd_main");

	dd_main.addEventListener("click", function(){
		this.classList.toggle("active");
	})