import React from 'react'
import Comment from './Comment'


const commentData = [
    {
        name: "Chetan",
        text: "lorerm10 ipso msbb kgkslj dhhf  lxvl do",
        replies: []
    },
    {
        name: "yash",
        text: "lorerm10 ipso msbb kgkslj dhhf  lxvl do",
        replies: [
            {
                name: "Chetan",
                text: "lorerm10 ipso msbb kgkslj dhhf  lxvl do",
                replies: [
                    {
                        name: "Chetan",
                        text: "lorerm10 ipso msbb kgkslj dhhf  lxvl do",
                        replies: [
                            {
                                name: "Chetan",
                                text: "lorerm10 ipso msbb kgkslj dhhf  lxvl do",
                                replies: [
                                    {
                                        name: "Chetan",
                                        text: "lorerm10 ipso msbb kgkslj dhhf  lxvl do",
                                        replies: []
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        name: "Chetan",
        text: "lorerm10 ipso msbb kgkslj dhhf  lxvl do",
        replies: [
            {
                name: "Chetan",
                text: "lorerm10 ipso msbb kgkslj dhhf  lxvl do",
                replies: []
            },
            {
                name: "Chetan",
                text: "lorerm10 ipso msbb kgkslj dhhf  lxvl do",
                replies: [
                    {
                        name: "Chetan",
                        text: "lorerm10 ipso msbb kgkslj dhhf  lxvl do",
                        replies: []
                    },
                ]
            },
        ]
    },
    {
        name: "Chetan",
        text: "lorerm10 ipso msbb kgkslj dhhf  lxvl do",
        replies: []
    },


]

const demoData = {
    name: "Chetan",
    text: "lorerm10 ipso msbb kgkslj dhhf  lxvl do",
    replies: []
}


const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index} >
            <Comment data={comment} />
            <div className='pl-5 border border-l-black ml-5'>

                    <CommentList comments={comment.replies} />
                    
            </div>
        </div>
        ))
}


const CommentsContainer = () => {
    return (
        <div className='m-5 p-2'>

            <h1 className='text-2xl font-bold'>comments:</h1>
            <CommentList comments={commentData} />

        </div>
    )
}

export default CommentsContainer

