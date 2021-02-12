
const baseURL = "https://platzi-avo.vercel.app"
const URL = `${baseURL}/api/avo`

async function getProcessData() {
    const getData = async () => {
        const response =  await fetch(URL)
        const data = response.json()
        return data
    }
    try {
        const { data }  = await getData()
        const app = document.querySelector("#app")
        app.className = "flex flex-wrap justify-center"
        const htmlElements = []

        function Formatprice(price, locale) {
            const priceFormater = new window.Intl.NumberFormat(`${locale}`, {
                style: "currency",
                currency: "USD",
            })
            return priceFormater.format(price)
        }

        data.forEach(avocado => {
            const container = document.createElement("div")
            container.className = "shadow-md m-2.5 p-4 rounded-lg text-center max-w-md"

            const img =  document.createElement("img")
            img.src = `${baseURL}${avocado.image}`
            img.className = ""

            const title = document.createElement("h3")
            title.textContent = avocado.name
            title.className = "font-bold text-green-600 text-xl"

            const price = document.createElement("span")
            price.textContent = `Price: ${Formatprice(avocado.price, "en-EN")}`
            price.className = "font-semibold m-1.5 text-blue-800"

            const description = document.createElement("p")
            description.textContent = avocado.attributes.description
            description.className = "text-gray-900 text-sm"

            const allElements = [img, title, price, description]
            container.append(...allElements)
            htmlElements.push(container)
        });
        
        app.append(...htmlElements)

    }catch (e){
        alert(e.message)
        throw new Error(e.message)
    }

}
getProcessData()


