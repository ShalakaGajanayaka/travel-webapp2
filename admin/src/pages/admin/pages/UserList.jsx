import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../utils/axiosInstance';
import SettingsMenu from './Modals/SettingsMenu';
import { useNavigate } from 'react-router-dom';

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();


    const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0, user: null });

    const handleRightClick = (e, user) => {
        e.preventDefault(); // Prevent default right-click menu
        setContextMenu({
            visible: true,
            x: e.clientX,
            y: e.clientY,
            user: user,
        });
    };

    const handleCloseContextMenu = () => {
        setContextMenu({ visible: false, x: 0, y: 0, user: null });
    };

    const handleOptionClick = (option) => {
        alert(`Selected option: ${option} for user: ${contextMenu.user.userName}`);
        handleCloseContextMenu();
    };

    const fetchUsers = async () => {
        try {
            const response = await axiosInstance.get(`/api/admin/users`);
            const onlyUsers = response.data.filter(user => user.role == 'user');
            const allUsers = response.data;
            // Sort users by registration date in descending order
            onlyUsers.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

            // Set parentName for each user
            onlyUsers.forEach(user => {
                const parent = allUsers.find(u => u.employeeNo === user.referralNo);
                user.parentName = parent ? parent.userName : null;
            });

            setUsers(onlyUsers);
            setFilteredUsers(onlyUsers);
            setLoading(false);
        } catch (err) {
            setError("Failed to fetch users. Please try again later.");
            setLoading(false);
        }
    };



    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        const filtered = users.filter(user =>
            user.userName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filtered);
    }, [searchTerm, users]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (contextMenu.visible) {
                handleCloseContextMenu();
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [contextMenu.visible]);

    return (
        <>
            <div className="px-4 py-4 border-b border-gray-200 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
                <div className="flex-1 min-w-0">
                    <h1 className="font-medium text-gray-900 text-lg/6 sm:truncate">Users</h1>
                </div>
            </div>
            <div className="px-4 mt-6 sm:px-6 lg:px-8">
                <div className="px-4 sm:px-6 lg:px-8">

                    <div className="sm:flex sm:items-center mb-40">
                    </div>

                    <div className="sm:flex sm:items-center">
                        <div className="sm:flex-auto">
                            <h1 className="text-base font-semibold text-gray-900">Users</h1>
                        </div>
                        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                            <button
                                type="button"
                                onClick={() => { navigate('/admin/add-user') }}
                                className="block px-4 py-2 text-sm font-semibold text-center text-white bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-3xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                            >
                                Add user
                            </button>
                        </div>
                    </div>
                    <div className="flow-root mt-8">
                        <div className="relative mt-4 sm:mt-0">
                            <input
                                type="text"
                                placeholder="Search Users..."
                                className="px-4 py-2 text-sm bg-white/80 backdrop-blur-sm rounded-xl border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>


                        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <table className="min-w-full mt-10 overflow-scroll divide-y divide-gray-300">
                                    <thead>
                                        <tr>
                                            <th className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                                UserName
                                            </th>
                                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Balance
                                            </th>
                                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Withdrawel Status
                                            </th>
                                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Task Status
                                            </th>
                                            {/* <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                ParentId
                                            </th> */}
                                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Employee No
                                            </th>
                                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Parent Name
                                            </th>
                                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Ref
                                            </th>
                                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Phone
                                            </th>
                                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Reg. Time
                                            </th>
                                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Last Login
                                            </th>
                                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Last Login IP
                                            </th>
                                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Current Task
                                            </th>
                                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Demo
                                            </th>
                                            <th className="relative py-3.5 pr-4 pl-3 sm:pr-0">
                                                <span className="sr-only">Actions</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {filteredUsers.map((person) => (
                                            <tr key={person._id} onContextMenu={(e) => handleRightClick(e, person)}
                                                className="hover:bg-gray-100/50 transition-colors">
                                                <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-0">
                                                    {person.userName}
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{person.totalEarnings}</td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    {person?.permissions?.withdraw ? 'Yes' : 'No'}
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    {person?.permissions?.doTasks ? 'Yes' : 'No'}
                                                </td>
                                                {/* <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{person.parentUserName || 'N/A'}</td> */}
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    {person.employeeNo}
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    {person.parentName}
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    {person.referralNo}
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    {person.phone}
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{new Date(person.createdAt).toLocaleDateString("en-CA")}</td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    {person.lastLoggedInTime ? new Date(person.lastLoggedInTime).toLocaleDateString("en-CA") : "Not Logged in"}
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{person.lastLoggedInIP}</td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{person.currentTaskIndex}</td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{person.parentUserName ? 'Yes' : 'No'}</td>
                                                <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-0">
                                                    <SettingsMenu user={person} />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* context menu */}
            {contextMenu.visible && (
                <div
                    className="fixed bg-white border border-gray-300 rounded-lg shadow-lg z-50"
                    style={{ top: contextMenu.y, left: contextMenu.x }}
                >
                    <ul className="py-2">
                        <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleOptionClick("Edit")}
                        >
                            Edit
                        </li>
                        <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleOptionClick("Delete")}
                        >
                            Delete
                        </li>
                        <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleOptionClick("View Details")}
                        >
                            View Details
                        </li>
                        <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleOptionClick("Block")}
                        >
                            Block
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}