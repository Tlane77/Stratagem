import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Pagination from "../Pagination";
import Posts from "../Posts"
import NoteBar from "../Notes/NoteBar"
import ResourceForm from "../Resources/ResourceForm"
import Navbar from "../Navbar/Navbar"




const Resources = (props) => {


    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(res.data);
            setLoading(false);
        }
        fetchPosts()
    }, []);

    //Get Current posts for resources
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    //Change Page for Pagination

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
      <>
        <div className="postContainer mt-5">
          <h1 className="text-primary mb-3">My Resources</h1>
          <Posts posts={currentPosts} loading={loading} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </div>
            <div>
                <NoteBar />
          <ResourceForm />
          <Navbar />
          <Posts />
                
        </div>
      </>
    );
};
  


export default Resources;
