import { useState } from "react";

const ShowURL = () => {
    let myArray = [] 
    for(var i=0; i<localStorage.length;i++)
        myArray.push(JSON.parse(localStorage.getItem(i)));
                    
    return (
        <div>
            <table border="0" className="table table-bordered">  
            <thead>
            <tr>  
                <th>URL</th>  
                <th>Username</th>  
                <th>Password</th>  
            </tr>  
            </thead>
            <tbody>
            {myArray.map((data, index) => (  
              <tr data-index={index}>  
                <td>{data.url}</td>  
                <td>{data.username}</td>  
                <td>{data.password}</td>  
              </tr>  
            ))}  
            </tbody>
        </table>  
        </div>
    )
}

export default ShowURL;