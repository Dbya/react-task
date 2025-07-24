

import Card from "../card/Card";
import "./Blog.css"

const Blog = ({blog}) => {
//   const[blog,setBlog]=useState([])
//   const fetchblog = async () => {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/posts"
//     );
//     console.log(response.data, "i m the");
//     setBlog(response.data)
//     console.log(blog,"i am bog data")
//   };
//   useEffect(() => {                
//     fetchblog();
//   }, []);

  return (
    <div className=" card flex flex-wrap mt-16 p-4">
      {/* {blog.map((blog)=>{
      return <Card key={blog.id} blog={blog} />
      })} */}
     {blog.length > 0 ? (
       blog.map((blog)=>{
      return <Card key={blog.id} blog={blog} />
      })
     ):(<p>!opps fetching data wait for a while <br></br>.......... you data will be display soon</p>)}
     

    </div>
  );
};

export default Blog;
