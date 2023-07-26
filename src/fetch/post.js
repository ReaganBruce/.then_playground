import chalk from "chalk";
import { BASE_URL } from "../base.js";
import { httpResponse } from "../utils.js";


createData("posts")

function createData(type) {

    const postData = {

      title: "Posting, breh!",
      content: "Data Created.",
      
    };
  
    fetch(`${BASE_URL}/${type}`, {
  
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(postData),
  
    })
      .then((res) => {
  
        res.ok
          ? httpResponse(
              res.status,
              chalk.yellowBright("Post Request Handled."),
            )
          : httpResponse(res.status, chalk.redBright("Error processing request"));
        return res.json();
  
      })
  
      .then((json) => {
        console.log(json);
      })
  
      .catch((err) => {
        console.log(chalk.bgRedBright(err.message));
      });
  }

  export default createData