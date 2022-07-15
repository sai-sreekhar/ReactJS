import React from "react";

export const Greet = ({name,post,children}) => {
    return (
        <div>
            <h1>Hello {name} post is {post}</h1>
            {children}
        </div>  
    )
}
