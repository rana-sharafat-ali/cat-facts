const URL = "https://catfact.ninja/fact";
const getdata = async () => {
    document.getElementById('facts').innerText= ('Thinking.... ');
    let x = await fetch(URL);
    let data = await x.json();
    document.getElementById('facts').innerText=data.fact;
};

const btn = document.getElementById('newFact');
   btn.addEventListener('click', function (e){
   getdata()
   }) 