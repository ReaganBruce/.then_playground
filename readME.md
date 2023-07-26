

<h1>.THEN</h1>

<p>I've become so use to async/await when performing network requests, that I thought it would be fun to refamiliarize myself with <b>.then</b> syntax. </p>

<br>
<p>Honestly, pretty neat in how promises are chained together.. I remember first learning this two years ago and not understanding the logic behind it at all 😂! </p>



<h5>Simple GET Request:</h5>

```
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

fetchData('posts')

```

<h5>Simple POST Request:</h5>

```
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

```