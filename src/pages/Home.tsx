import { useEffect, useState } from "react"
import { Get, Delete } from "../API/ApiMethods"
import { useNavigate } from "react-router-dom"
export default function Home() {
    let navigate = useNavigate()
    let [data, setData] = useState<any>([])
    const getData = () => {
        Get("posts")
        .then((res)=>{
            setData([...res.data])
            
        })
        .catch((error)=>{
            console.log(error);
            
        })
        
        
    }
    const Del = (id:any)=>{
        Delete(`posts/${id}`).then(() => {
            console.log("Post Deleted Successfully");
        })
            .catch((err) => {
                console.log(err);
            });

    }
    useEffect(() => { getData() }, [])
    return <>
            <button className="btn btn-primary w-100 fs-1" onClick={()=>navigate("addForm")}>Add Data</button>
        {
            data.map((x: any, i: any) =>
                <div key={i} style={{backgroundColor:"lightsalmon", padding:"30px" ,margin:"10px"}}>
                    <p>{x.userId}</p>
                    <p>{x.id}</p>
                    <p>{x.title}</p>
                    <p>{x.body}</p>
                    <button className="btn btn-primary"  onClick={()=>navigate(`edit/${x.id}`)}>Edit</button>
                    <button className="btn btn-danger mx-3" onClick={()=> Del(x.id)}>Delete</button>
                </div>
            )
        }

    </>
}

