const fs = require('fs');

filename = process.argv[2];

try {
    fs.readFile(filename, 'utf-8', async function(error, data) {
        if(error) {
            console.log(error.message);
            process.exit(1);
        }
        [...data.split('\n')]
            .filter(line => !!line)
            .forEach(urlString => {
                try {
                    let url = new URL(urlString);
                    fetch(url)
                        .then( res => {
                            res.text()
                                .then( body => {
                                    fs.writeFile(`${url.hostname}.html`, body, {encoding: 'utf-8', flag: 'w'}, (err, data) => {
                                        if(err) {
                                            console.log(err.message);
                                        } else {
                                            console.log(`Response saved to ${url.hostname}.html`)
                                        }
                                    })
                                })
                        })
                        .catch( err => {
                            console.log(err.message, url.hostname)
                        });
                } catch(err) {
                    console.log(`${err.message}: ${urlString}`)
                }
            });
    });
} catch(err) {
    console.log(err.message)
}