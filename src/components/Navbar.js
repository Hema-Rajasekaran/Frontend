import React from "react";
import {useSelector} from 'react-redux';

const Navbar = () => {

  const {tasksList,error} = useSelector((state) => state.tasks)

  return (
    <>
      <h1 className="text-center my-3 text-primary">GD Project Management</h1>
      <p className="text-center lead">{`Currently ${tasksList.length} task's Pending`}</p>
      {
        (error !== '') ? <h5 className="text-center text-danger">{error}</h5> : null
      }
    </>
  );
};

export default Navbar;
