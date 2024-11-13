import React, { useState } from 'react'
import logo from '../../assets/Images/logo-svg.svg'
import admin from '../../assets/Images/admin-svg.svg'
import chef from '../../assets/Images/Chef-svg.svg'
import billing from '../../assets/Images/cashier-svg.svg'
import staff from '../../assets/Images/staff-svg.svg'
import captain from '../../assets/Images/captain-svg.svg'
import UserSelectModal from '../Modal/userSelectModal'
import { useNavigate } from 'react-router-dom'
const UserSelect = () => {

    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const [selectedUser, setselectedUser] = useState();
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);
    const onSubmit = (data) => {
        console.log(data);
        closeModal();
        navigate(selectedUser?.path)

    }

    return (
        <>
            <div className='h-screen flex items-center justify-center'>
                <div className="grid grid-cols-1 grid-rows-2 gap-1">
                    <span className="items-center flex justify-center mb-12">
                        <img className='w-auto h-auto inline' src={logo} alt="food-fusion" />
                        <span className='food-fusion text-5xl text-[#cd3f14] ms-1'>FOOD FUSION</span>
                    </span>
                    <div className="text-center items-center flex justify-center">
                        <span onClick={() => { setselectedUser({ name: 'bg-[#d80b19]', image: 'admin',path:'/admin/dashboard' }); openModal() }} className='mx-5 cursor-default text-[#d80b19] text-2xl'><img className='bg-[#d80b19] w-28 m-auto rounded-full p-3' src={admin} alt="Loading" />
                            ADMIN
                        </span>
                        <span onClick={() => { setselectedUser({ name: 'bg-[#6b3109]', image: 'cashier',path:'/home' }); openModal() }} className='mx-5 cursor-default text-[#6b3109] text-2xl'><img className='bg-[#6b3109] w-28 m-auto rounded-full p-3 ' src={billing} alt="Loading" />
                            CASHIER
                        </span>
                        <span onClick={() => { setselectedUser({ name: 'bg-[#f1471d]', image: 'staff',path:'/home' }); openModal() }} className='mx-5 cursor-default text-[#f1471d] text-2xl'><img className='bg-[#f1471d] w-28 m-auto rounded-full p-3 ' src={staff} alt="Loading" />
                            STAFF
                        </span>
                        <span onClick={() => { setselectedUser({ name: 'bg-[#80cc28]', image: 'captain',path:'/home' }); openModal() }} className='mx-5 cursor-default text-[#80cc28] text-2xl'><img className='bg-[#80cc28] w-28 m-auto rounded-full p-3 ' src={captain} alt="Loading" />
                            CAPTAIN
                        </span>
                        <span onClick={() => { setselectedUser({ name: 'bg-[#0cc0df]', image: 'chef',path:'/home' }); openModal() }} className='mx-5 cursor-default text-[#0cc0df] text-2xl'><img className='bg-[#0cc0df] w-28 m-auto rounded-full p-3 ' src={chef} alt="Loading" />
                            CHEF
                        </span>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <UserSelectModal
                isOpen={isOpen}
                closeModal={closeModal}
                selectedUser={selectedUser}
                onSubmit={onSubmit}
            />
        </>
    )
}

export default UserSelect