import { useEffect, useState } from "react"

export const useFetch=(url,method="GET")=>{
const [data,setData]=useState([])
const [option,setOption]=useState(null);
const [loading,setLoading]=useState(false);

const optionDetails=(data)=>{
    if(method==="POST")
    {
        setOption({
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
    }
    else if(method==="PATCH")
    {
        setOption({
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
    }
    else if(method==="DELETE")
    {
        setOption({method: 'DELETE'})
    }
};

useEffect(()=>{
    const fetchPost=async(option)=>{
        setLoading(true);
        const respone=await fetch(url,{...option});
        const jsonresponse=await respone.json();
        if(respone.ok)
        {
            
            setData(jsonresponse);
            setLoading(false);
        }
    }

    if(method==="GET"){
        fetchPost();
    }
    else if(method==="POST" && option)
    {
        fetchPost(option);
    }
    else if(method==="PATCH" && option)
    {
        fetchPost(option);
    }
    else if(method==="DELETE" && option)
    {
        fetchPost(option);
    }

},[url,option,method])

return {data,optionDetails,loading};

}