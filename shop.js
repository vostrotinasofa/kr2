async function getResponce() {
    let responce = await fetch ("Knigolov.json")
    let content = await responce.text()
    console.log(content)
    content = JSON.parse(content)
    content = content.splice(0, 9)
    console.log(content)

    let key
    for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }

    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content) {
        node_for_insert.innerHTML += `
        <li class="product-block">
        <img src=${content[key].img}>
        <h3>${content[key].title}</h3>
        <p>${content[key].description}. Цена ${content[key].price} р.</p>
        <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
        <p>Заказать <input class="w-25" type="number" name="am" value="0"></p>
        </li>
                `
    }


}
getResponce()