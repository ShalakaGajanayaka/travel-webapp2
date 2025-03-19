import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";

export default function TieUser() {
    const { id: userId } = useParams(); // Get userId from URL params
    const { state } = useLocation();
    const user = state?.user || {};
    const [tasks, setTasks] = useState([]);
    const [taskIndex, setTaskIndex] = useState(""); // Input field state
    const [selectedTasks, setSelectedTasks] = useState([]); // Array of selected task IDs
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    // Fetch tasks where tie is true
    const fetchTasks = async () => {
        try {
            const response = await axiosInstance.get("/api/tasks");
            setTasks(response.data.tasks);
        } catch (err) {
            setError("Failed to fetch tasks. Please try again later.");
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    // Handle checkbox change
    const handleCheckboxChange = (taskId) => {
        setSelectedTasks((prevSelectedTasks) => {
            if (prevSelectedTasks.includes(taskId)) {
                return prevSelectedTasks.filter((id) => id !== taskId);
            } else if (prevSelectedTasks.length < 16) {
                return [...prevSelectedTasks, taskId];
            } else {
                return prevSelectedTasks;
            }
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!taskIndex || selectedTasks.length === 0) {
            setError("Please enter a Post No and select up to 16 tasks.");
            setSuccess('');
            return;
        }

        setLoading(true);
        try {
            const response = await axiosInstance.put(`/api/tasks/replace/${userId}`, {
                taskIndex: Number(taskIndex),
                newTaskIds: selectedTasks,
            });

            setSuccess(response.data.message || "Tasks updated successfully!");
            setError('');
            setTaskIndex(""); // Reset input field
            setSelectedTasks([]); // Reset selection
        } catch (err) {
            setError("Failed to update tasks. Please try again.");
            setSuccess('');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="px-4 py-4 border-b border-gray-200 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
                <div className="flex-1 min-w-0">
                    <h1 className="font-medium text-gray-900 text-lg/6 sm:truncate">Tie User</h1>
                </div>
            </div>
            <div className="px-4 mt-6 sm:px-6 lg:px-8">
                <div className="px-4 sm:px-6 lg:px-8">

                    {/* User Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                        {[
                            { label: "User Name", value: user.userName },
                            { label: "Balance", value: user.totalEarnings },
                            { label: "Employee No", value: user.employeeNo },
                            { label: "Parent", value: user.parentName },
                            { label: "Referral No", value: user.referralNo },
                            { label: "Phone", value: user.phone },
                            { label: "Current Task", value: user.currentTaskIndex },
                            { label: "Demo", value: user.parentUserName ? 'Yes' : 'No' },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-blue-500 to-purple-600 p-5 rounded-xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-3xl"
                            >
                                <label htmlFor={item.label.toLowerCase()} className="block text-sm font-medium text-white/80">
                                    {item.label}
                                </label>
                                <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                        {[
                            { label: "User Name", value: user.userName },
                            { label: "Balance", value: user.totalEarnings },
                            { label: "Employee No", value: user.employeeNo },
                            { label: "Parent", value: user.parentName },
                            { label: "Referral No", value: user.referralNo },
                            { label: "Phone", value: user.phone },
                            { label: "Current Task", value: user.currentTaskIndex },
                            { label: "Demo", value: user.parentUserName ? 'Yes' : 'No' },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-3xl"
                            >
                                <label htmlFor={item.label.toLowerCase()} className="block text-sm font-medium text-gray-700">
                                    {item.label}
                                </label>
                                <p className="mt-2 text-lg font-semibold text-gray-900">{item.value}</p>
                            </div>
                        ))}
                    </div> */}

                    {error && <p className="mb-2 text-sm text-red-500">{error}</p>}
                    {success && <p className="mb-2 text-sm text-green-500">{success}</p>}

                    {/* Post No Input */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex-1">
                            <label htmlFor="post-no" className="block text-sm font-medium text-gray-700">
                                Post No
                            </label>
                            <input
                                id="post-no"
                                type="number"
                                value={taskIndex}
                                onChange={(e) => setTaskIndex(e.target.value)}
                                className="w-full px-4 py-3 mt-1 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter Post No"
                            />
                        </div>
                        <div className="mt-6">
                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-3xl focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-2xl"
                            >
                                {loading ? "Submitting..." : "Tie"}
                            </button>
                        </div>
                    </div>

                    {/* Tasks Table */}
                    <div className="overflow-hidden border border-gray-300 rounded-xl shadow-2xl backdrop-blur-sm bg-white/80">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-white/80">
                                <tr>
                                    <th className="px-6 py-4 text-sm font-semibold text-left text-gray-700">Name</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-left text-gray-700">Value</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-left text-gray-700">Profit</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-left text-gray-700">Select</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-300">
                                {tasks.map((task) => (
                                    <tr key={task._id} className="hover:bg-gray-100/50 transition-colors">
                                        <td className="px-6 py-4 text-sm text-gray-900">{task.name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{task.value}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{task.profit}</td>
                                        <td className="px-6 py-4 text-sm">
                                            <input
                                                type="checkbox"
                                                name="task"
                                                value={task._id}
                                                checked={selectedTasks.includes(task._id)}
                                                onChange={() => handleCheckboxChange(task._id)}
                                                className="w-4 h-4 text-purple-500 bg-white border-gray-300 rounded focus:ring-purple-500"
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    );
}
