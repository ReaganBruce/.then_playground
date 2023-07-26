import chalk from "chalk";
import { BASE_URL } from "../base.js";


const fetchData = (type) => {


    fetch(`${BASE_URL}/${type}`, {

        method: 'GET', 
        headers: {
            'Content-type': 'application/json'
        }
    })
    
    .then((res) => {
        if (!res.ok) {
            console.log(`Status Code: ${res.status}`);
        }

        console.log(chalk.greenBright(`Status Code: ${res.status}`));

        return res.json()
    })

    .then(json => {
        json.map(user => {

            const newDataArray = []

            const userObject = {
                id: user.id,
                title: user.title,
                body: user.body
            }
            
            if (user.id <= 1) {
                newDataArray.push(userObject)
                newDataArray.forEach(element => {
                    console.log(chalk.blueBright(`GET: ID ${element.id} - ${element.title}`))
                })
            }

        })
    })
    .catch((err) => {
        console.log(chalk.bgRedBright(err.message));
    })
    
}

fetchData('postS')

export default fetchData