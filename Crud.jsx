import React from 'react'
import  { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import  "../css/crud.css";
const Crud = () => {
  const blankUser ={
    "name":"",
    "email":"",
    "role":"",
    "address":"",
 }

    const [open, setOpen] = useState(false);
    const [user, setUser] = useState(blankUser);
    const [userdata, setUserdata] = useState([]);
    const [action, setAction] = useState( 'Add');
    const [editIndex, setEditIndex] = useState(null);

    const onOpenModal = () => setOpen(true);
     
        const onCloseModal = () => {
            setOpen(false);
            setAction('Add');
          }
      

    const addUser =()=>{
        setUserdata([...userdata,user]);
         setUser(blankUser);
        onCloseModal();
    }
    const editUser = (index)=>{
        setAction('Edit');
        onOpenModal();
        const selectedUser = userdata.find((x,i)=>i ===index)
        setUser(selectedUser);
        setEditIndex(index);
        
       

    }
    // const updateUser = ()=>{
    //     const newUsers = userdata.map((x,i)=>{
    //         if(i ===editIndex){
    //             x = user;
    //         }
    //         return x;
    //     });
    //     setUserdata(newUsers);
    //     setUser(blankUser);
    //     setEditIndex(null);
    //     onCloseModal();

    // }
    const deleteUser =(index)=>{
        const newUsers = userdata.filter((x,i)=> {
            return i!=index});
        setUserdata(newUsers);

    }
     
  
  return (
    <> 
 <div className=" crud-container">
    <div className="heading">
        <h1>CRUD APP</h1>
        </div>
        <div className="toolbar" onClick={onOpenModal}>
            <button className="btn">
                ADD
            </button>
        </div>
       <hr/>
       
       <table className="table">
        <thead> 
        <tr>
            <th  >NAME</th>
            <th>E-MAIL</th>
            <th>ROLE</th>
            <th>ADDRESS</th>
            <th>ACTION</th>
        </tr>
        </thead>
        <tbody>
            {userdata.length > 0 && userdata.map((user,index)=>{
                
               
                 return(<tr>
                 <td  >{user.name}</td>
                 <td>{user.email}</td>
                 <td>{user.role}</td>
                 <td>{user.address}</td>
                 <td>
                     {/* <button className="btnEdit" onClick={()=> editUser(index)}  >
                         EDIT
                     </button>
                     <button className="btnDelete"  onClick={()=>deleteUser(index)}   >
                          DELETE
                     </button> */}
                     
                 </td>
             </tr>)
            })
            } 
        
        </tbody>
       </table>
       <Modal open={open} onClose={onCloseModal} center>
        <h2> {action} User</h2>
       
        <div className="className"> 
        <label htmlFor="name">Name</label>
        <input type="text"  value ={user.name} onChange={(e)=>setUser({...user,"name":e.target.value})}/>
        <label htmlFor="name"  >E-MAIL</label>
        <input type="text" value ={user.email} onChange={(e)=>setUser({...user,"email":e.target.value})}/>
        <label htmlFor="name">ROLE</label>
        <input type="text"  value ={user.role}  onChange={(e)=>setUser({...user,"role":e.target.value})}/>
        <label htmlFor="name">ADDRESS</label>
        <textarea name="address" cols="30" rows="4"   value ={user.address} onChange={(e)=>setUser({...user,"address":e.target.value})}></textarea>
         {action ==='Add' && <button className="btnsubmit" onClick={()=>addUser()}>SUBMIT</button>}
         {/* {action ==='Edit' && <button className="btnsubmit" onClick={()=>updateUser()}>UPDATE</button>} */}
        </div>
      </Modal>
    </div>
    <footer> 
         <div className="crud-footer">
         <div className="social-logo-w">
            <p>FOLLOW US ON : </p>
            <img src="../img/fflogo.png" className="social-logo-img"></img>
           
            <img src="../img/ilogo.png" className="social-logo-img"></img>
            <img src="../img/llogo.png" className="social-logo-img"></img>
            <img src="../img/yt.png" className="social-logo-img"></img>
         </div>
         <div className="crud-credits">
            <p> Made by @Sandip </p>
         </div>
     </div>
     </footer>
    </>
 
 
  )
}

export default Crud
