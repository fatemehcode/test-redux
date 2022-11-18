import { auth, db } from '../config/firebase';
import{getDocs,collection} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Post from './create-post/Post';
export interface Post{
    id: string;
    userId: string;
    title: string;
    description: string;
    username: string;
    }

const Main = () => {
    const postRef=collection(db,"posts");
    const [postList,setPostList]=useState<Post[]|null>(null);
    const getPosts=async()=>{
        const data=await getDocs(postRef);
        setPostList(data.docs.map((doc)=>({...doc.data(),id:doc.id}))as Post[]);
    };
    
    useEffect(()=>{
       getPosts(); 
    },[]);

    return(
        <div>
            {postList?.map((post)=>(
                <Post key={post.id} post={post}/>
            ))}
        </div>
    );

};

export default Main;