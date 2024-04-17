import Home from "./pages/Home.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PostPage from "./pages/PostPage.jsx";
import LDefault from "./Layout/LDefault.jsx";

function App() {

    const routes = createBrowserRouter([
        {
            path:"/",
            element : <LDefault/>,
            // errorElement:<PageNotFound/>,
            children:[
                {
                    index:true,
                    path:"/",
                    element : <Home/>
                },
                {
                    path:"/posts/:id",
                    element : <PostPage />
                }



            ]
        }
    ])

  return (
   <div className=''>
       <RouterProvider router={routes}/>
   </div>
  )
}

export default App
