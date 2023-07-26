import chalk from 'chalk'
import { BASE_URL } from '../base.js'

deleteData("posts", 1)

function deleteData(type, id) {

    fetch(`${BASE_URL}/${type}/${id}`, {

        method: "DELETE",
        
    })
    .then((res) => {
        if (!res) {
            console.log(`Status Code: ${res.status}`)
        }

        console.log(chalk.greenBright(`Status Code: ${res.status}`));
        console.log(chalk.yellowBright(`Deleted at: ${res.url}`))
    
        return res.json()
        

    })
    .catch((err) => {
        console.log(chalk.bgRedBright(err.message));
    })

}



export default deleteData