import {useEffect, useState} from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react/prop-types
export default function AddCommentModal({setShowModalAdd,id}) {



const [title,setTitle] = useState("")
const [body,setBody] = useState("")

    const handleSubmit = () =>{
    onClose()
        const obj = {
            userId : id,
            title,
            body
        }

        axios.post("https://jsonplaceholder.typicode.com/posts",obj).then((res)=>{
            console.log(res)
            if(res.status === 201){
                onClose()
                toast("Wow so easy!")
            }
        }).catch((err)=> console.log(err))
    }


    function  onClose(){
        setShowModalAdd(false)
        document.body.style.overflow = 'auto'
    }


    useEffect(()=> {
if (setShowModalAdd){
    document.body.style.overflow = 'hidden'
}else document.body.style.overflow = 'auto'
    }, [])



    // axios.post('https://jsonplaceholder.typicode.com/posts/1/comments', )

    return (
        <div className='absolute  py-4  flex justify-center items-center w-full'>
            <div className='relative  '>

                <div className='w-[400px] bg-white shadow-md shadow-black  rounded-lg fixed top-[20%] left-[40%]'>
                    <i onClick={() => onClose()}
                       className="fa-regular fa-circle-xmark absolute top-1 right-2 text-xl text-red-400 cursor-pointer hover:text-red-800"></i>
                    <div className='pb-4 pt-8 px-3'>
                        <span>Name:</span> <input value={title} onChange={(e)=> setTitle(e.target.value)} className='border py-1 outline-none  px-1' type="text"
                                                  placeholder='Enter you name' /><br/>
                    </div>

                    <div className='py-4 px-3 items-center flex gap-2'>
                        <span>Comment:</span> <textarea value={body} onChange={(e)=> setBody(e.target.value)} className='border outline-none px-1 ' cols='30' rows='3' name=""
                                                        id="" placeholder='Enter you comment' ></textarea>
                    </div>
                    <button onClick={()=> handleSubmit()}
                        className='bg-green-400 mx-3 px-4 text-white py-[2px] my-3 rounded hover:bg-green-500 duration-200'>Add
                    </button>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        transition: Bounce
                    />
                    <ToastContainer />
                </div>
            </div>
        </div>
    )
}
