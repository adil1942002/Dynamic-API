import { EditByID, Post, Get } from "../API/ApiMethods"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
export default function AddForm() {
    let [pushData, setPushData] = useState<any>({})
    let params = useParams()
    const GetDataForEdit = () => {
        Get(`posts/${params.id}`)
            .then((res) => { setPushData({ ...res.data }) })
            .catch((error) => { console.log(error); })
    }
    const Submit = () => {
        Post("posts", pushData)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    const Edit = () => {
        EditByID(`posts/${params.id}`, pushData)
            .then((res) => { console.log(res.data); })
            .catch((error) => { console.log(error); })
    }
    useEffect(() => {
        if (params.id) {
            GetDataForEdit()
        }
    }, [])

    return <>
        <div className="text-center pt-5 " style={{ backgroundColor: "lightyellow", width: "100%", height: "100vh" }}>
            {params.id ?
                <h1>Edit data</h1>
                :
                <h1>Add data</h1>
            }
            <form >
                <div className="mt-3 ">
                    <input value={pushData.userId} onChange={(e) => setPushData({ ...pushData, userId: e.target.value })} type="number" placeholder="Enter User ID" />
                </div>
                <div className="mt-3 ">
                    <input value={pushData.id} onChange={(e) => setPushData({ ...pushData, id: e.target.value })} type="number" placeholder="Enter ID" />
                </div>
                <div className="mt-3 ">
                    <input value={pushData.title} onChange={(e) => setPushData({ ...pushData, title: e.target.value })} type="text" placeholder="Enter Name" />
                </div>
                <div className="mt-3 ">
                    <input value={pushData.body} onChange={(e) => setPushData({ ...pushData, body: e.target.value })} type="text" placeholder="Enter Des...." />
                </div>
            </form>
            {params.id ?
                <button className="btn btn-secondary m-4" onClick={Edit}>Edit Data</button>
                :
                <button className="btn btn-secondary m-4" onClick={Submit}>Submit</button>
            }
        </div>
    </>
}