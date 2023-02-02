const bouquets = [{
    name : "Flower 1",
    price : 50,
    source : "images/Flower 1.jpg",
    type : "fresh",
    description: `Size L

    Bean coloured wrapping + one of my favourite songs 🥰
    
    🌸🫘🌸🫘🌸🫘
    Includes:
    - Red Roses
    - Pink Gerberra
    - Baby Breath
    - Mini Eucalyptus
    🌸🫘🌸🫘🌸🫘
    Wrapped in Bean, complemented with pink paper and baby pink ribbon`
},
{
    name : "Flower 2",
    price : 49,
    source : "images/Flower 2.jpg",
    type : "fresh",
    description: `Size L

    Bean coloured wrapping + one of my favourite songs 🥰
    
    🌸🫘🌸🫘🌸🫘
    Includes:
    - Red Roses
    - Pink Gerberra
    - Baby Breath
    - Mini Eucalyptus
    🌸🫘🌸🫘🌸🫘
    Wrapped in Bean, complemented with pink paper and baby pink ribbon`
},
{
    name : "Flower 3",
    price : 48,
    source : "images/Flower 3.jpg",
    type : "fresh",
    description: `Size L

    Bean coloured wrapping + one of my favourite songs 🥰
    
    🌸🫘🌸🫘🌸🫘
    Includes:
    - Red Roses
    - Pink Gerberra
    - Baby Breath
    - Mini Eucalyptus
    🌸🫘🌸🫘🌸🫘
    Wrapped in Bean, complemented with pink paper and baby pink ribbon`
},
{
    name : "Flower 4",
    price : 47,
    source : "images/Flower 4.jpg",
    type : "fresh",
    description: `Size L

    Bean coloured wrapping + one of my favourite songs 🥰
    
    🌸🫘🌸🫘🌸🫘
    Includes:
    - Red Roses
    - Pink Gerberra
    - Baby Breath
    - Mini Eucalyptus
    🌸🫘🌸🫘🌸🫘
    Wrapped in Bean, complemented with pink paper and baby pink ribbon`
},
{
    name : "Flower 5",
    price : 49,
    source : "images/Flower 5.jpg",
    type : "fresh",
    description: `Size L

    Bean coloured wrapping + one of my favourite songs 🥰
    
    🌸🫘🌸🫘🌸🫘
    Includes:
    - Red Roses
    - Pink Gerberra
    - Baby Breath
    - Mini Eucalyptus
    🌸🫘🌸🫘🌸🫘
    Wrapped in Bean, complemented with pink paper and baby pink ribbon`
},
{
    name : "Flower 6",
    price : 49,
    source : "images/Flower 6.jpg",
    type : "fresh",
    description: `Size L

    Bean coloured wrapping + one of my favourite songs 🥰
    
    🌸🫘🌸🫘🌸🫘
    Includes:
    - Red Roses
    - Pink Gerberra
    - Baby Breath
    - Mini Eucalyptus
    🌸🫘🌸🫘🌸🫘
    Wrapped in Bean, complemented with pink paper and baby pink ribbon`
},
{
    name : "Flower 7",
    price : 49,
    source : "images/Flower 7.jpg",
    type : "fresh",
    description: `Size L

    Bean coloured wrapping + one of my favourite songs 🥰
    
    🌸🫘🌸🫘🌸🫘
    Includes:
    - Red Roses
    - Pink Gerberra
    - Baby Breath
    - Mini Eucalyptus
    🌸🫘🌸🫘🌸🫘
    Wrapped in Bean, complemented with pink paper and baby pink ribbon`
},
{
    name : "Flower 8",
    price : 49,
    source : "images/Flower 8.jpg",
    type : "fresh",
    description: `Size L

    Bean coloured wrapping + one of my favourite songs 🥰
    
    🌸🫘🌸🫘🌸🫘
    Includes:
    - Red Roses
    - Pink Gerberra
    - Baby Breath
    - Mini Eucalyptus
    🌸🫘🌸🫘🌸🫘
    Wrapped in Bean, complemented with pink paper and baby pink ribbon`
},
{
    name : "Flower 9",
    price : 49,
    source : "images/Flower 9.jpg",
    type : "fresh",
    description: `Size L

    Bean coloured wrapping + one of my favourite songs 🥰
    
    🌸🫘🌸🫘🌸🫘
    Includes:
    - Red Roses
    - Pink Gerberra
    - Baby Breath
    - Mini Eucalyptus
    🌸🫘🌸🫘🌸🫘
    Wrapped in Bean, complemented with pink paper and baby pink ribbon`
},
]

document.getElementById("bouquet-count").innerText = bouquets.length + " Bouquets"

bouquets.forEach(element => addbouquet(element.name,element.price,element.source));

function addbouquet(name,price,source) {
    //first, create a bouquet-box div
    const bouquetbox = document.createElement("div");
    bouquetbox.className = "bouquet-box";
    //create image and append into bouquet-box
    const img = document.createElement("img");
    img.className = "bouquet-smallpic";
    img.src = source;
    bouquetbox.appendChild(img);
    //create h2 for name
    const h2 = document.createElement("h2");
    h2.className = "bouquet-smallname"
    h2.innerHTML = name;
    bouquetbox.appendChild(h2);
    //create pricetag
    const h3 = document.createElement("h3");
    h3.className = "bouquet-price"
    h3.innerHTML = "$" + price;
    bouquetbox.appendChild(h3);
    //add bouquet-box div to grid
    document.getElementById("bouquet-grid").appendChild(bouquetbox);
}

function addbouquetmodal(name,price,source,description) {
    //firstm create a modal div
    
}

//Filter dropbox
function showdropbox() {
    const dropboxcont = document.getElementById("sortby-content");
    if(dropboxcont.style.visibility == "visible") {
        dropboxcont.style.visibility = "hidden";
        dropboxcont.style.opacity= "0";
    }
    else {
        dropboxcont.style.visibility = "visible";
        dropboxcont.style.opacity= "1";
    }
}

//Hide dropbox(div) on clicking outside
window.addEventListener('mouseup',function(event){
    const dropboxcont = document.getElementById("sortby-content");
    if(event.target != dropboxcont && event.target.parentNode != dropboxcont){
        dropboxcont.style.visibility = "hidden";
        dropboxcont.style.opacity= "0";
    }
});  

function render() {
    document.getElementById("bouquet-grid").innerHTML = "";
    bouquets.forEach(element => addbouquet(element.name,element.price,element.source));
}


function sortbyprice(lowest) {
    if(lowest){
        bouquets.sort((a,b) => (a.price-b.price));
    }
    else{
        bouquets.sort((a,b) => (b.price-a.price));
    }
    render();
}

function sortbyname(lowest) {
    if(lowest){
        bouquets.sort((a,b) => (a.name.localeCompare(b.name)));
    }
    else{
        bouquets.sort((a,b) => (b.name.localeCompare(a.name)));
    }
    render();
}
