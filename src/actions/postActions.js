import {FETECH_POST,NEW_POST} from './types';


export const fetchPost=()=>dispatch=>{
    
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(json=>dispatch({
            type:FETECH_POST,
            payload:json
        }))
    
}


export const createfetchPost=(post)=>dispatch=>{
    console.log('action called ')
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(post)
    }).then(res=>res.json())
    .then(data=>dispatch({
        type:NEW_POST,
        payload:post
    }));

}