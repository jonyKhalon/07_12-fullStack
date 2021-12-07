/*let inputList;
let click;
inputList = document.getElementsByClassName("input");
console.log(inputList);
for(var i=0;i<4;i++)
{
   inputList[i].value="hello!";
}
*/

 const func=()=>
{
    let data={};
    let list = document.getElementsByClassName("input");

    for(let i=0;i<list.length;i++)
    {
        //console.log[list[i].id];
        data[list[i].id]=list[i].value;
    }
    console.log(data);
    debugger;
}


// const car = {name:"aaaa", email:"aaaa", password:"aaaa",Valpassword:"aaaa"};