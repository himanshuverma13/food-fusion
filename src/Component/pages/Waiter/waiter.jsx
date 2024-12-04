import React from 'react'
import Navbar from '../../Common/Navbar/navbar'
import { connect } from 'react-redux';
import StatusFooter from '../../Common/Footer/statusFooter';

const Waiter = ({ chef }) => {
  
  // console.log('chef: ', chef);

  const serveringFood = chef?.foodOrders?.filter((food) => food.status == "done")
  // console.log('serveringFood: ', serveringFood);

  return (
    <>
      <Navbar />

      <h2>waiter</h2>

      <div className="container mx-auto px-4 py-5">
 
        <div className="grid grid-cols-4 gap-4">
          {serveringFood?.map((item) => (
            <div className="chef-card border-solid border-slate-800 rounded-lg p-6 bg-lime-100 shadow-xl">
              <div className="flex justify-between ">
                <span className='font-semibold'>
                  Server to 
                </span>
               <span className='text-center border rounded-full border-indigo-600 py-2 bg-slate-700 text-white w-24'> Table No. {item?.tableNo}</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <div className="text-left font-semibold text-xl uppercase">
                  {item?.food}
                </div>
                <div>{item?.quantity}</div>
                
              </div>
              <div>{item?.category}</div>
            </div>
          ))}
        </div>
      </div>

      <StatusFooter/>
    </>
  )
}

const mapStateToProps = (state) => ({
  chef: state.chef,
});

export default connect(mapStateToProps, {})(Waiter);
