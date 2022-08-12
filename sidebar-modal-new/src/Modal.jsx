import React from 'react'
import {useState, useRef, useContext} from 'react'

const ModalContext = useContext()

const Modal = (props) => {
    const [isShowModal, setIsShowModal] = useState(false)
    // const [isCloseModal, setCloseModal] = useState(false)
    // const modalConRef = useRef(null)

    const showModal = () => {
        // const modalCon = modalConRef.current
        setIsShowModal(true)
    }

    const closeModal = () => {
        setIsShowModal(false)
    }

    return (
        <ModalContext.provider value={{showModal, closeModal}}>
         <ModalButton />
         {isShowModal && <ModalSection/>}
        </ModalContext.provider>   
    )
}

const ModalButton = () => {
    const {showModal} = useContext(ModalContext)
    return (
        <div className='h-screen w-screen flex items-center justify-center'>
            <button className='w-32 h-10 text-white bg-black rounded' onClick={showModal} >SHOW MODAL</button>
        </div>
    )
}

const ModalSection = () => {
    const {closeModal} = useContext(ModalContext)
    return (
        <section className='w-full px-7 h-2/6 scale-110 absolute z-10'>
            <div className=' flex items-center justify-center bg-white h-full w-full rounded'>
                <h1 className='text-xl font-medium'>Modal Content</h1>
                <button className='text-3xl font-bold text-iconCloseColor absolute top-4 right-10' onClick={closeModal} >
                    X
                </button>
            </div>
      </section>
    )
}

export default Modal
