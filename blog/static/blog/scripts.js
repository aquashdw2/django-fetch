async function readLorem(){
    let postListDiv = document.querySelector("#post-list");
    postListDiv.children = [];

    try{
        let response = await fetch("/post/lorem/");
        if(response.status == 200) {
            let jsonBody = await response.json();
            
            let postElementTitle = document.createElement("h3");
            let postElementContent = document.createElement("p");
    
            postElementTitle.textContent = jsonBody.title;
            postElementContent.textContent = jsonBody.content;
    
            let postElement = document.createElement("div");
            postElement.appendChild(postElementTitle);
            postElement.appendChild(postElementContent);
            postListDiv.appendChild(postElement);
            
        }
    } catch (error) {
        alert(error);
    }
    
}


function createPostRequest(){
    document.querySelector("#post-create-button").disabled = true;

    let title = document.querySelector("#post-title").value;
    let content = document.querySelector("#post-content").value;
    fetch("/post/create/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCsrfToken(),
        },
        body: JSON.stringify({
            title: title,
            content: content,
        })
    }).then(response => {
        alert(response.status);
        document.querySelector("#post-create-button").disabled = false;
        document.querySelector("#post-title").value = "";
        document.querySelector("#post-content").value = "";

    }).catch(error => {
        alert(error);
        document.querySelector("#post-create-button").disabled = false;
    });
    
}


function getCsrfToken(){
    return document.cookie.split(";")
        .find((item) => item.includes("csrftoken"))
        .split("=")[1];
}