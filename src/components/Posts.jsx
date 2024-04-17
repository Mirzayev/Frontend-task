import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import './posts.css'

export default function Posts() {

    const navigate = useNavigate();


    const [info, setInfo] = useState([])
    const [post, setPost] = useState('')


    //Paginations

    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 20;

    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage

    const records = info.slice(firstIndex, lastIndex)
    const npage = Math.ceil(info.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)

    // console.log(numbers)


    function prePage(e) {
        e.preventDefault()
        if (currentPage !== firstIndex) {
            setCurrentPage(currentPage - 1)
        }
    }

    function changeCPage(id) {
        setCurrentPage(id)
    }

    function nextPage(e) {
        e.preventDefault()
        if (currentPage !== firstIndex) {

            setCurrentPage(currentPage + 1)
        }
    }

    //End Pagination


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                // console.log(res)
                setInfo(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const routePage = (id) => {
        // console.log(id)
        navigate(`posts/${id}`)
    }


    return (

        <div className='max-w-[1440px] m-auto'>
            <div className="relative overflow-x-auto shadow-lg pt-4 shadow-slate-500 my-10">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                    <thead className="text-lg text-gray-900  dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            UserId
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Body
                        </th>
                    </tr>
                    </thead>
                    <tbody className=''>
                    {info.length && records.map((event) => {
                        return (

                            <tr onClick={() => routePage(event.id)} key={event.id}
                                className="bg-white dark:bg-gray-800 cursor-pointer shadow-md shadow-black  border-black w-full overflow-hidden overflow-x-auto hover:bg-slate-200 duration-200">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {event.id}
                                </th>
                                <td className="px-6 py-4">
                                    {event.userId}
                                </td>
                                <td className="px-6 py-4">
                                    {event.title}
                                </td>
                                <td className="px-6 py-4">
                                    {event.body}
                                </td>
                            </tr>


                        )
                    })}

                    </tbody>

                </table>

                {/*Pagination*/}


                <div className=''>
                    <ul className=' flex py-8 px-8 gap-4 bg-blue-300 text-white '>
                        <li className='bg-green-500 px-5 py-[3px] cursor-pointer hover:bg-green-600 rounded duration-200'
                            onClick={prePage}><a href="">
                            pre
                        </a></li>

                        {numbers.map((n, i) => {
                            return (<li key={i}
                                        className={`cursor-pointer bg-green-500 text-white px-5 py-[3px] hover:bg-green-600 rounded duration-200 ${currentPage === n ? 'active' : ''}`}
                                        onClick={() => changeCPage(n)}>
                                {n}
                            </li>)
                        })}


                        <li className='bg-green-500 text-white px-5 pt-[3px] hover:bg-green-600 rounded duration-200'
                            onClick={nextPage}><a href="">
                            Next
                        </a></li>
                    </ul>
                </div>


            </div>
        </div>)
}