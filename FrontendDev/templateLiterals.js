// Template Literal //
// ``//

const bodyTag = document.getElementsByTagName("body")[0];

const country = "Myanmar";

bodyTag.innerHTML = `
                        <div class="container">
                        <div class="wrapper">
                            <h1>Welcome to ${country}</h1>
                        </div>
                        <div class="welcomeText">
                            <div class="text">Welcome to Myanmar.</div>
                        </div>
                        </div>`;