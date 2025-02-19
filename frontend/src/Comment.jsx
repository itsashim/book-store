import { useState } from "react";

function Comment() {
    const [comment, setComment] = useState("")
    const [commentData,setCommentData] = useState([]);

    function onSubmit(e){
        e.preventDefault();
        setComment("")
        setCommentData([...commentData,{comment:comment}])
        console.log(commentData);   
    }

    return (
        <section>
            <form onSubmit={onSubmit} className="flex" action="">
                <textarea value={comment} onChange={(e)=> setComment(e.target.value)} className="border-2 border-amber-300" placeholder="Comment..." name="" id="" required></textarea>
                <button className="btn-primary">Submit</button>
            </form>
            {/* Comments Start */}
            <div className="">
                {commentData && commentData.map((data,index) => 
                <div className="flex items-center gap-3" key={index}>
                <figure className="w-14 h-14 rounded-full bg-amber-300"></figure>
                 <h4 >
                    {data.comment}
                </h4>
                </div>
                )}
            </div>
            {/* Comments End */}
        </section>
    )
}

export default Comment
