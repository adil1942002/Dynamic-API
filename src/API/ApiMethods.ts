import axios from "axios";
export const apiHandle = axios.create({baseURL: "https://jsonplaceholder.typicode.com"})

export const Get = (endPoint: string, id?: (string | number))=>
{return apiHandle.get(`${endPoint}/${id ? id : ''}`)}
export const Post = (endPoint: string ,pushData:{})=>
{return apiHandle.post(endPoint,pushData)}

export const EditByID = (Editpath:any ,pushData:{})=>
{return apiHandle.put(Editpath,pushData)}
export const Delete = (DeletePath: any)=>
{return apiHandle.delete(DeletePath)}
