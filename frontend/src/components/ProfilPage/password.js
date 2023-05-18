import React, { useState, useEffect } from "react";
import { updatePassword } from "../../services/userServices";


function PasswordPage() {

    //State
        //Student INFO
    const student = JSON.parse(sessionStorage.getItem("student"));

        // Password State
    const [currentPassword, setcurrentPassword] = useState(student.password);

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
    const [error, setError] = useState("");


        // Open Modal
    const [editModal, setEditModal] = useState(false);

        //Notification
    const [showNotification, setShowNotification] = useState(false);


        
    //Comportement
    
          //Modal edition
    
    const handleClickModal = () => {
        setEditModal(!editModal);
        setError("");
    }


    //Modal submit
    const handleSubmitModal = (e) => {
        e.preventDefault();
    
        setOldPassword(oldPassword);
        setNewPassword(newPassword);
        setNewPasswordConfirm(newPasswordConfirm)

        if (oldPassword != currentPassword) {
            setError("Please check the old password");
        }
        else if (newPassword != newPasswordConfirm){
            setError("The two passwords must be identical");
        }
        else {
            //La fonction update Password n'est pas encore défini
            //updatePassword(newPassword);
            setEditModal();
            setError("");
            handleShowNotification();

        }
      }

    //Notification effect
      useEffect(() => {
        if (showNotification) {
          const timer = setTimeout(() => {
            setShowNotification(false);
          }, 5000);
    
          return () => {
            clearTimeout(timer);
          };
        }
      }, [showNotification]);

      const handleShowNotification = () => {
        setShowNotification(true);
      };

    
    return (
        //Affichage
    <div>



        <div className="">
            <button className="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none mr-1 " onClick={handleClickModal}>
                    Change Password
            </button>

            <div >
            {showNotification && (
                    <p className="text-green-500">The password has been successfully changed</p>
                )}
            </div>

            {/* // Model definition */}
            {editModal  && 

            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-gray-100 w-64 p-4 rounded shadow border-4 ">
                <h2 className="text-lg font-bold mb-4">Password Change</h2>

                <form onSubmit={handleSubmitModal}>
                    
                
                <div className="mb-4">
                        <label htmlFor="oldPassword" className="block mb-1">
                            Old Password
                        </label>
                        <input
                        type="password"
                        id="oldPassword"
                        
                        onChange={(e) => setOldPassword(e.target.value)}
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                        required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="newPassword" className="block mb-1">
                            New password
                        </label>
                        <input
                        type="password"
                        id="newPassword"
                        
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                        required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block mb-1">
                            Comfirm possword
                        </label>
                        <input
                        type="password"
                        id="confirmPassword"
                        
                        onChange={(e) => setNewPasswordConfirm(e.target.value)}
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                        required
                        />
                    </div>
                    {error && <p className="text-red-700 mb-4">{error}</p>}

                    <button
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mt-4"
                    type="submit"
                    >
                    Validate
                    </button>


                <button
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-4"
                    onClick={handleClickModal}
                >
                    Cancel
                </button>
                </form>
                </div>
                
            </div>
            
        
            }

        </div>

       
    </div>
    );
}

export default PasswordPage;
