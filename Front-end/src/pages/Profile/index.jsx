import './style.scss'
import Account from '../../components/Account';
import { useDispatch, useSelector } from 'react-redux';
import {addUserInformation, changeUsername } from '../../redux';
import { useEffect, useRef, useState } from 'react';

function Profile() {

    const [modal, setModal] = useState(false);
    const toggleModal = () => {setModal(!modal);};
    const form = useRef()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    useEffect(() => {
      const fetchData = async () => {
        try {
          const r = await fetch('http://localhost:3001/api/v1/user/profile',  {
          method: "POST",
          headers: {"Accept": "application/json", "Authorization": `Bearer ${user.token}` },   
          })
          const data = await r.json() 
          dispatch(addUserInformation(data.body))
      }catch(err) {
        console.log(err)
      }
      }
        fetchData()
      })

      const handleSubmit = async (e) => {
        e.preventDefault();
        toggleModal()
        try{
        const r = await fetch('http://localhost:3001/api/v1/user/profile',  {
          method: "PUT",
          headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${user.token}` },
          body: JSON.stringify({ userName: form.current[0].value})    
          })
          const data = await r.json() 
          dispatch(changeUsername(data.body))
        }
        catch(error) {
          console.log(error)
        }
    }

    return (
      <div className="background-color">
        <div className='Profile__Welcome'>
            <h1 className='Profile__Title-1'>Welcome back </h1>
            <h1 className='Profile__Title-2'>{user.userName}!</h1>
            <button className='Profile__Button' onClick={toggleModal} >Edit Name</button>
        </div>
        <div>
          <Account
              title="Argent Bank Checking (x8349)"
              amount="$2,082.79"
              type="Available Balance" />
          <Account
              title="Argent Bank Savings (x6712)"
              amount="$10,928.42"
              type="Available Balance" />
          <Account
              title="Argent Bank Credit Card (x8349)"
              amount="$184.30"
              type="Current Balance" />
        </div>
        {modal? (
        <div className="modal">
          <div className="modal-content">
            <form ref={form} onSubmit={handleSubmit}>
              <label className='label'>Username:
                <input  className='input' type="text" name='username' defaultValue={user.userName}/>
              </label>
              <label className='label'>Firstname:
                <input  className='input' type="text" name='firstname' defaultValue={user.firstName} disabled />
              </label>
              <label className='label'>Lastname:
                <input  className='input' type="text" name='lastname' defaultValue={user.lastName} disabled />
              </label>
              <input className='button-submit' type="submit" value="Validate" />
            </form>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>) : null}
      </div> 
    )
  }
  export default Profile;