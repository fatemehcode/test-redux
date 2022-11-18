
import { getDocs,addDoc, collection, where,query, deleteDoc, doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../config/firebase';
import { Post as IPost} from '../Main';

interface Props{post:IPost;};
interface Like{userId:string;LikeId:string;};
const Post = (props:Props) => {
    const [user]=useAuthState(auth);
    //const navigate=useNavigate();
    const {post}=props;    
   
    
    const[likeList,setLikeList]=useState<Like[]|null>(null);
    const hasUserLiked=likeList?.find((like)=>like.userId ===user?.uid);
    const likesRef=collection(db,"likes");   
    const likesDoc=query(likesRef,where("postId","==",post.id));
    
    const getLikes=async()=>{
        const data=await getDocs(likesDoc);
        setLikeList(data.docs.map((doc)=>({...doc.data().userId,LikeId:doc.id})));
    }
    
    const addLike=async()=>{
        try {
            const newDoc=await addDoc(likesRef,{userId:user?.uid,postId:post.id});
            if(user){setLikeList((prev)=>prev ? [...prev,{userId:user.uid,LikeId:newDoc.id}]:[{userId:user.uid,LikeId:newDoc.id}]);}

        } catch (err) {console.log(err);}        
    };
    const removeLike=async()=>{  
              
        try {            
            const likeToDeleteQuery=query(
                    likesRef,
                    where("postId","==",post.id),
                    where("userId","==",user?.uid)
                );
            const likeToDeleteData=await getDocs(likeToDeleteQuery);
            const likedId=likeToDeleteData.docs[0].id;
            if(user){setLikeList((prev)=>prev && prev.filter((like)=>like.LikeId!==likedId));}
            const likeToDelete=doc(db,"likes",likedId);
        } catch (err) {console.log(err);}        
    };
    
    useEffect(()=>{getLikes();},[])
    
    return (
        <div className='postbox'>
            <div className='title'><h4>{post.title}</h4></div>
            <div className='description'><p>{post.description}</p></div>
            <div className='postFooter'>
                <p>@{post.username}</p>
                <button onClick={hasUserLiked?removeLike:addLike}>
                    {""}
                    {hasUserLiked?<>&#128078;</>:<>&#128077;</>}
                </button>
                {likeList?.length!==0 &&<p>liked:{likeList?.length}</p>}
                
            </div>    
            
        </div>
    );
};

export default Post;