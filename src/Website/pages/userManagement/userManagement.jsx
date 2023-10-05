import React from 'react'
import BodyComponent from '../../components/bodyComponent'
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import profileImg from '../../../assets/images/guy.png'
import { BsFillCameraVideoFill, BsFillChatDotsFill, BsTelephoneFill } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';


export const UserManagement = () => {

    const [currentPage, setCurrentPage] = useState(0); // Current page state
    const perPage = 6; // Number of items per page
    // const data = Array.from({ length: 30 }, (_, index) => `Item ${index + 1}`); // Sample data array
    const [data, setData] = useState([
        { id: 1, username: "Agent Name 1" },
        { id: 2, username: "Agent Name 2" },
        { id: 3, username: "Agent Name 3" },
        { id: 4, username: "Agent Name 4" },
        { id: 5, username: "Agent Name 5" },
        { id: 6, username: "Agent Name 6" },
        { id: 7, username: "Agent Name 7" },
        { id: 8, username: "Agent Name 8" },
        { id: 9, username: "Agent Name 9" },
        { id: 10, username: "Agent Name 10" },
        { id: 11, username: "Agent Name 11" },
        { id: 12, username: "Agent Name 12" },

    ])



    // Function to handle page change
    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    // Calculate the starting and ending indices for the current page
    const startIndex = currentPage * perPage;
    const endIndex = startIndex + perPage;

    // Slice the data array to display only the items for the current page
    const displayedItems = data.slice(startIndex, endIndex);

    const [isEditArray, setIsEditArray] = useState(new Array(data.length).fill(false));
    const toggleIsEdit = (index) => {
        const newIsEditArray = [...isEditArray];
        newIsEditArray[index] = !newIsEditArray[index];
        setIsEditArray(newIsEditArray);
    };

    const handleDelete = (id) => {
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
    };


    return (
        <React.Fragment>
            <BodyComponent>
                <div className="row g-3">
                    <div className="col-12">
                    <h2 className='cardMainHeading'>User Management</h2>
                        <div className="communicationTable privacyTable">
                            <div className="table-responsive privacyPagination">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Agents</th>
                                            <th>Date Created</th>
                                            <th>Role</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            displayedItems.map((item, keyId) => (
                                                <tr key={keyId}>
                                                    <td>
                                                        <div className="privacyAgentCol">
                                                            <p>
                                                                {keyId}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="privacyAgentCol">
                                                            <img src={profileImg} alt="" />
                                                            <p>
                                                                {item.username}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className='privacyStatusCol'>
                                                            <p>1-21-2023</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className='privacyStatusCol'>
                                                            <p>Customer</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className='privacyStatusCol'>
                                                            <p>Online</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className='actionButtons'>
                                                            <button className='green' >
                                                                Edit
                                                            </button>
                                                            <button className='delete' onClick={() => { handleDelete(item.id) }}>
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>

                                </table>
                                <ReactPaginate
                                    previousLabel={'Previous'}
                                    nextLabel={'Next'}
                                    breakLabel={'...'}
                                    pageCount={Math.ceil(data.length / perPage)}
                                    marginPagesDisplayed={1}
                                    pageRangeDisplayed={3}
                                    onPageChange={handlePageChange}
                                    containerClassName={'pagination'}
                                    activeClassName={'active'}
                                />

                            </div>
                        </div>

                    </div>
                </div>
            </BodyComponent>
        </React.Fragment>
    )
}
