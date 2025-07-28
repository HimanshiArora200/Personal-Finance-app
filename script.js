// ✅ Pots
const potsListData = [
  { title: "Savings", amount: "$150", color: "#4bc0c0" },
  { title: "Concert Ticket", amount: "$110", color: "#ffcd56" },
  { title: "Gift", amount: "$40", color: "#ff6384" },
  { title: "New Laptop", amount: "$10", color: "#36a2eb" }
];
function renderPotsList(){
  const list=document.getElementById("pots-list");
  potsListData.forEach(p=>{
    const item=document.createElement("div");
    item.classList.add("pot-item");
    item.innerHTML=`
      <div class="pot-color" style="background:${p.color};"></div>
      <div class="pot-text">
        <span class="pot-title">${p.title}</span>
        <span class="pot-amount">${p.amount}</span>
      </div>`;
    list.appendChild(item);
  });
}

// ✅ Transactions
const transactionsData=[
  {img:"https://randomuser.me/api/portraits/women/44.jpg",name:"Emma Richardson",date:"19 Aug 2024",amount:"+ $75.50",color:"green"},
  {img:"https://randomuser.me/api/portraits/men/12.jpg",name:"Savory Bites Bistro",date:"18 Aug 2024",amount:"- $55.50",color:"Black"},
  {img:"https://randomuser.me/api/portraits/men/33.jpg",name:"Daniel Carter",date:"18 Aug 2024",amount:"- $42.30",color:"Black"},
  {img:"https://randomuser.me/api/portraits/men/66.jpg",name:"Sun Park",date:"17 Aug 2024",amount:"+ $120.00",color:"green"},
  {img:"https://randomuser.me/api/portraits/men/75.jpg",name:"Urban Services Hub",date:"17 Aug 2024",amount:"- $65.00",color:"Black"}
];
function renderTransactions(){
  const tContainer=document.getElementById("transactions-container");
  transactionsData.forEach(tx=>{
    const tDiv=document.createElement("div");
    tDiv.classList.add("transaction");
    tDiv.innerHTML=`
      <div class="transaction-left">
        <img src="${tx.img}" alt="${tx.name}">
        <div>
          <span class="name">${tx.name}</span>
          <span class="transaction-date">${tx.date}</span>
        </div>
      </div>
      <span class="amount" style="color:${tx.color};">${tx.amount}</span>`;
    tContainer.appendChild(tDiv);
  });
}

// ✅ Sidebar Minimize Toggle
document.getElementById("toggleMenu").addEventListener("click",()=>{
  document.getElementById("sidebar").classList.toggle("minimized");
});

document.addEventListener("DOMContentLoaded",()=>{
  renderPotsList();
  renderTransactions();
});
