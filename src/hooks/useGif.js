import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {

    const [gif, setGif] = useState('')
    const [loading, setLoading] = useState('false')

    async function fetchData(tag) {
        setLoading(true)  // pehle loading hogi, phir api call hui, phir loading ko false krdia genrate ke baad 

        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url); // if tag true then use tag vala url otherwise random vala url 
        const imageSource = data.data.images.downsized_large.url    // path of gif where random gif stored
        setGif(imageSource) // jab tk yeh network call nhi hoti ham uppr vala loader dikhate rhenge, isliye upr true, jb n/w call hogi then false

        setLoading(false)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { gif, loading, fetchData }; // we've use gif, loading, .. 'cause we used in random, tag.js
}

export default useGif