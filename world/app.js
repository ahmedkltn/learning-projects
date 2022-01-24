const row=document.querySelector(".row")
async function getData(){
    try{
    db=await axios.get("https://restcountries.com/v2/all")
    return db
    }catch(e){
        console.log(e)
    }
}
const allData=async()=>{
    const db=await getData();
    console.log(db.data[1])
    for(let i=0;i<250;i++){
        random=i
        let col=document.createElement("div")
        col.classList.add("col-lg-3")
        col.classList.add("col-sm-6")
        let card=document.createElement("div")
        card.classList.add("card")
        let img=document.createElement("img")
        img.classList.add("card-img-top")
        img.src=db.data[random].flags.svg
        let div=document.createElement("div")
        div.classList.add("card-body")
        let cName=document.createElement("p")
        cName.innerText=db.data[random].name
        cName.classList.add("card-text")
        let capital=document.createElement("p")
        capital.classList.add("card-text")
        capital.innerText="Capital : "+db.data[random].capital
        let pop=document.createElement("p")
        pop.classList.add("card-text")
        pop.innerText="Population :"+db.data[random].population
        div.appendChild(cName)
        div.appendChild(capital)
        div.appendChild(pop)
        card.appendChild(img)
        card.appendChild(div)
        col.appendChild(card)
        row.appendChild(col)
    }
}
allData()
