import {useParams} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";
import AddCommentModal from "../components/AddCommentModal.jsx";
import './postPage.css'

export default function PostPage() {

    const {id} = useParams();
    const [info, setInfo] = useState({})
    const [comments, setComments] = useState([])
    const [showModalAdd, setShowModalAdd] = useState(false)

    const
        fetchPostSingle = () => {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(res => {
                    setInfo(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }

    const fetchPostComment = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(res => {
                setComments(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchPostSingle()
        fetchPostComment()
    }, [])
    return (
        <div className='  relative '>

            <div className='max-w-[1440px] m-auto'>
                <table className="items-center bg-transparent w-full border-collapse mt-10">
                    <thead>
                    <tr>
                        <th className="px-3  bg-slate-100 border-r-2  align-middle text-xs uppercase border-l-0 py-3 whitespace-nowrap font-semibold text-left">
                            {info?.id}
                        </th>
                        <th className="px-3  bg-slate-100 border-r-2  align-middle text-xs uppercase border-l-0 py-3 whitespace-nowrap font-semibold text-left">
                            {info?.userId}
                        </th>
                        <th className="px-3  bg-slate-100 border-r-2  align-middle text-xs uppercase border-l-0 py-3 whitespace-nowrap font-semibold text-left">
                            {info?.title}
                        </th>
                        <th className="px-3  bg-slate-100 border-r-2  align-middle text-xs uppercase border-l-0 py-3 whitespace-nowrap font-semibold text-left">
                            {info?.body}
                        </th>
                    </tr>
                    </thead>
                    <h1 className='flex justify-center text-[28px] text-gray-700 font-semibold my-4 px-6'>Comments: </h1>

                    <tbody>
                    {comments && comments.map((comment) => {
                        return (
                            <tr key={comment.id}>
                                <td className='px-3 border-b align-middle bg-slate-100 border-r-2 py-3'>{comment.id}</td>
                                <td className='px-3 border-b align-middle bg-slate-100 border-r-2 py-3'>{comment.name}</td>
                                <td className='px-3 border-b align-middle bg-slate-100 border-r-2 py-3'>{comment.email}</td>
                                <td className='px-3 border-b align-middle bg-slate-100 border-r-2 py-3'>{comment.body}</td>

                            </tr>
                        )
                    })}
                    </tbody>

                </table>
                {showModalAdd && <div className='absolute commentModal'></div>}
                {showModalAdd && <AddCommentModal id={id} setShowModalAdd={setShowModalAdd}/>}
                <div className='px-3 my-3'>
                    <button onClick={() =>setShowModalAdd(true)} className='bg-green-400 px-3 py-1 text-white rounded-lg hover:bg-green-500 duration-200'>Add
                        Comment
                    </button>
                </div>

            </div>
        </div>
    )
}
