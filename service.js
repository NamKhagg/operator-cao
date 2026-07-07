let saveEndpoints = [];

async function connect() {
    try {
        const response = await fetch("http://localhost:3000/info");
        saveEndpoints = response.json();

        console.log("Connected");
        console.log(saveEndpoints);
    } catch(err) {
        console.error(err);
    }
}

connect();