const URL="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#fact");
const btn=document.querySelector("#btn");

const getFact=async ()=>{
    console.log("getting data....")
    let response=await fetch(URL);
    console.log("response",response.status);
    let data=await response.json();
    console.log("data",data[1].text);
    factPara.innerText=data[1].text;
    
}
// const URL1="https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyDCU7WsERkeGFRL2NlA4ZT24y_7W-fasMw"
// const getBooks=async ()=>
// {
//   console.log("geting data...")
//   let response=await fetch(URL1);
//   console.log("RESPONSE",response);
//   let data=await response.json();
//   console.log("data",data);
 

// }
// getBooks()


//promise chaining
// function getFacts()
// {
//     fetch(URL).then((response)=>{
//         return response.json();
//     }).then(data)={
// console.log(data);
//     })
// }
btn.addEventListener("click",getFact);
// getFacts()

