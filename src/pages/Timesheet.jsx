import React from 'react';
// import { Stack } from 'react-bootstrap';
import { Stack } from "@mui/material";
const Comment = () => {
    return (
        <div style={{backgroundColor:'#211f1f',height:'500px',borderRadius: '10px' ,border: '2px solid red'}}>
            <form>
                <Stack direction="row">
                <Stack direction="column">
                <label style={{
                    marginLeft: '100px',
                    marginTop: '100px',
                    color: 'yellow',
                    width: '200px',
                    height: '50px',
                    backgroundColor: 'black',
                    textAlign: 'center',
                    borderRadius: '10px',
                    display: 'flex',            /* Center both horizontally and vertically */
                    alignItems: 'center',       /* Vertical alignment (center) */
                    justifyContent: 'center',   /* Horizontal alignment (center) */
                }}>
                    Project No
                </label>
                <input type="text" name="name" style={{
                    marginLeft: '100px',
                    marginTop: '10px',
                    height: '60px',
                    borderRadius: '10px'
                }} />
                </Stack>

                <Stack direction="column">
                <label  style={{marginLeft:'60px',marginTop:'100px',color:'yellow',width:'100px',height:'50px',
            backgroundColor:'black',textAlign:'center',
             borderRadius: '10px', display: 'flex',        
            alignItems: 'center',       
            justifyContent: 'center',}}>
                Start Time
                </label>
                <input type="text" name="name"style={{marginLeft:'60px',marginTop:'10px',width:'100px',
            height:'60px',
            borderRadius: '10px'}} />
                </Stack>
                <Stack direction="column">
                <label  style={{marginLeft:'60px',marginTop:'100px',color:'yellow',width:'100px',height:'50px',
            backgroundColor:'black',textAlign:'center',
            borderRadius: '10px', display: 'flex',           
            alignItems: 'center',    
            justifyContent: 'center'}}>
                End Time
                </label>
                <input type="text" name="name"style={{marginLeft:'60px',marginTop:'10px',width:'100px',
            height:'60px',
            borderRadius: '10px'}} />
                </Stack>
                <Stack direction="column">
                <label  style={{marginLeft:'60px',marginTop:'100px',color:'yellow',width:'200px',height:'50px',
            backgroundColor:'black',textAlign:'center',
             display: 'flex',        
            alignItems: 'center',       
            justifyContent: 'center',
            borderRadius: '10px'}}>
                Activity
                </label>
                <input type="text" name="name"style={{marginLeft:'60px',marginTop:'10px',width:'200px',
            height:'60px',
            borderRadius: '10px'}} />
                </Stack>
                <Stack direction="column">
                <label  style={{marginLeft:'60px',marginTop:'100px',color:'yellow',width:'200px',height:'50px',
            backgroundColor:'black',textAlign:'center',
            display: 'flex',          
            alignItems: 'center',       
            justifyContent: 'center',
            borderRadius: '10px'}}>
                Remarks
                </label>
                <input type="text" name="name"style={{marginLeft:'60px',marginTop:'10px',width:'200px',
            height:'60px',
            borderRadius: '10px'}} />
                </Stack>
                
                </Stack>
            <Stack direction="row">
            <input style={{marginLeft:'200px',marginTop:'200px',width:'200px',height:'60px',backgroundColor:'yellow',fontSize: '20px',borderRadius: '10px'}} type="submit" value="Add Row" />
            <input  style={{marginLeft:'100px',marginTop:'200px',width:'200px',height:'60px',backgroundColor:'yellow',fontSize: '20px',borderRadius: '10px'}} type="submit" value="Submit" />
            </Stack>
            
            </form>
        </div>
    );
};

export default Comment;