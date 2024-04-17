import {useEffect} from "react";
import axios from "axios";


export default function CommentPage(){

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')


    }, [])

    return(

        <div>

        </div>
    )
 }