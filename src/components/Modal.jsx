import { useState } from "react"

const Modal = ({ closeModal, onSubmit }) => {

    const [formState, setFormState ] = useState({
        name: "",
        email: "",
        role: "",
    })


 

    const handleChange = (e) =>{
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const validateForm = ()=>{
        if(formState.name && formState.email && formState.role){
            return true
        }else{
            return false
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
      
        if (!validateForm()) return;
      
        onSubmit(formState);
        closeModal();
    };
      

  return (
    <div className="modal_container" onClick={(e) => {
        if(e.target.className==="modal_container")
            closeModal()
        }}>
        <div className="modal">
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" value={formState.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" value={formState.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="role">Role</label>
                    <input type="text" value={formState.role} onChange={handleChange} />
                </div>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    </div>
  )
}
export default Modal