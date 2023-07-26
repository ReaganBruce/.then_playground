import chalk from 'chalk';
import { BASE_URL } from '../base.js';


const updateData = (type, id) => {

    fetch(`${BASE_URL}/${type}/${id}`, {

        method: "PUT",
        headers: {
            'Content-type': "application/json"
        },

        body: JSON.stringify({

            title: "Updated Title",
            content: "Updated Content, babbyyyyy.",
        })
    })
    .then((res) => {

        if (!res.ok) {
            console.log(`Status Code: ${res.status}`);
        }

        console.log(chalk.greenBright(`Status Code: ${res.status}`));

        return res.json()
    })
    .then((json) => {
        console.log(chalk.yellowBright(`Updated Object ID: ${json.id}`))
        console.log(json);
    })
    .catch((err) => {
        console.log(chalk.bgRedBright(err.message));
    })
}

updateData("posts", 1)

export default updateData