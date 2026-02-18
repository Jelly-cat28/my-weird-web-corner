<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>✨ MY WEIRD WEB CORNER ✨</title>

<style>
body {
    margin: 0;
    padding: 0;
    background: linear-gradient(45deg, hotpink, cyan, lime, yellow);
    background-size: 400% 400%;
    animation: bgMove 8s infinite alternate;
    font-family: "Comic Sans MS", cursive, sans-serif;
    text-align: center;
    overflow-x: hidden;
}

@keyframes bgMove {
    0% { background-position: left; }
    100% { background-position: right; }
}

h1 {
    font-size: 4em;
    color: white;
    text-shadow: 0 0 10px magenta, 0 0 20px cyan;
    animation: spin 6s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg); }
    100% { transform: rotate(-3deg); }
}

p {
    font-size: 1.5em;
    color: black;
    background: rgba(255,255,255,0.7);
    display: inline-block;
    padding: 15px;
    margin: 20px;
    border-radius: 20px;
    box-shadow: 0 0 15px white;
}

.blink {
    animation: blink 1s infinite;
    font-weight: bold;
    font-size: 2em;
    color: red;
}

@keyframes blink {
    50% { opacity: 0; }
}

.marquee {
    font-size: 2em;
    color: white;
    background: black;
    padding: 10px;
}

button {
    font-size: 1.5em;
    padding: 15px 25px;
    background: magenta;
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0 0 15px black;
    transition: 0.2s;
}

button:hover {
    transform: scale(1.2) rotate(5deg);
    background: cyan;
}

.sparkle {
    position: fixed;
    pointer-events: none;
    font-size: 20px;
    animation: floatUp 1s linear forwards;
}

@keyframes floatUp {
    to {
        transform: translateY(-50px);
        opacity: 0;
    }
}
</style>
</head>

<body>

<marquee class="marquee">WELCOME FRIENDS ✨ YOU HAVE ENTERED THE CHAOS ZONE ✨</marquee>

<h1>🌈 MY WEIRD WEB CORNER 🌈</h1>

<p>HEY YOU 👋</p>

<p>
If you're here, you're officially part of the inner circle.
Yes. This means you are cool.
No take-backs.
</p>

<p>
This is my digital hideout.
It is weird.
It is loud.
It is unnecessary.
And it is ONLY for my friends.
</p>

<p class="blink">⚠ HAVE FUN OR ELSE ⚠</p>
    }
}
</script>

</body>
</html>
