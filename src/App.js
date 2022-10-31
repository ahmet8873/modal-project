import Modal from "./Modal";
import {useState} from 'react'


function App() {
const [openModal,setOpenModal]=useState(false)


  return (
    <div>
      <button className="modal-btn" onClick={()=>setOpenModal(true)}>modal</button>
      <Modal openModal={openModal} onClose={()=>setOpenModal(false)}></Modal>
    </div>
  );
}

export default App;
