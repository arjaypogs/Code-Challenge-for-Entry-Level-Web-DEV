
function takeData(){
fetch("https://jsonplaceholder.typicode.com/posts")
//request
.then(response =>{
  return response.json();
})
//callback
.then(data => {
//map the data and values
var html = data.map(user => {
  //html format bootstrap table in js file
    return `
    <table class="tables">
  <thead>
    <tr>
      <th>USER I.D</th>
      <th>I.D</th>
      <th>TITLE</th>
      <th>BODY</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${user.userId}</td>
      <td>${user.id}</td>
      <td>${user.title}</td>
      <td>${user.body}</td>
    </tr>
  </tbody>
</table>
    `;
  })
document.querySelector("#table").insertAdjacentHTML("afterbegin", html);
})
.catch(error => {
  console.log(error);
});
}
takeData(); //return
