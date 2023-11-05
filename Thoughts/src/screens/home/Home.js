import './Home.css'
import Post from '../../components/posts/Post';
import { useFetch } from '../../hooks/useFetch';
export default function Home() {
  const {data:post,loading}=useFetch("https://thoughts-yyh3.onrender.com/api");
  return (
    <div className='Home'>
        {
            post && post.map((post)=>{
               return <Post post={post}/> //ERROR OOCURED miss in return
            })
        }
       {
        loading && <div className="spinner-grow text-primary load" role="status">
        <span class="sr-only">Loading...</span>
      </div>
       }
    </div>
  )
}
