export const getGifts = async (categoria)=>{
    const apiKey = "2ZXewLdwiAGZPgVkSLn3AqitEO6CeN4I"
   
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${categoria}&limit=2`
    
        const response = await fetch(url)
        const {data} = await response.json()
    
        const gifsArray = data.map((element)=>({
            id: element.id,
            title: element.title,
            url: element.images.downsized_medium.url
        }))
        return gifsArray
    }