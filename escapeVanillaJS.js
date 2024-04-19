document.addEventListener("DOMContentLoaded", () => {
    // 🪲 Bug: Incorrect ID used for attaching the event listener // corrected //
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                // 🪲 Bug: Incorrect element ID // corrected //
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    // Other room event listeners...
});

function findMostRecentBook(books) {
     // 🪲 Bug: Logic error // corrected //
    return books.reduce((mostRecent, book) => new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent);
}

document.addEventListener("DOMContentLoaded", () => {
    // Room 1 listener...

    document.getElementById("solveRoom2").addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'async']); // Added 'async'
        // 🪲 Bug: What's mssing from JS concepts? // corrected //
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
         // 🪲 Bug: Incorrect function call // corrected //
        const commonConcepts = findIntersection(jsConcepts, reactConcepts); // Fixed function call
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    // Room 3 listener...
});

function findIntersection(setA, setB) {
     // 🪲 Bug: Incorrect logic // corrected //
    const intersection = new Set([...setA].filter(x => setB.has(x))); // Fixed logic
    return intersection;
}
document.addEventListener("DOMContentLoaded", () => {
    // Room 1 and Room 2 listeners...
// 🪲 Bug: Asynchronous function ? // corrected //
    document.getElementById("solveRoom3").addEventListener("click", () => {
        fetch('directions.json') 
            .then(response => response.json())
            .then(directions => {
                navigateLabyrinth(directions)
                    .then(message => {
                         // 🪲 Bug: Incorrect method // corrected //
                        document.getElementById("room3Result").innerHTML = message;
                    });
            });
    });
});

async function navigateLabyrinth(directions) {
    // 🪲 Bug: No delay // corrected //
    for (let direction of directions) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Added await
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}



    return books.reduce((mostRecent, book) => new Date(book.published) < new Date(mostRecent.published) ? book : mostRecent);
}

function findIntersection(setA, setB) {
    // 🪲 Bug: Incorrect logic
    const intersection = new Set([...setA]);
    return intersection;
}

async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // 🪲 Bug: No delay
        new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}

