import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import axiosInstance from '../../utils/axiosInstance';
import Loading from '../loadingscreen/Loading';
import ErrorPage from '../errorpage/ErrorPage';

export default function EarningsTable() {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { user } = useAuth();
    const userId = user._id;

    React.useEffect(() => {
        const fetchTasks = async () => {
            try {
                const earnHistory = await axiosInstance.get(`/api/transactions/user/${userId}`);
                setHistory(earnHistory.data.transactions);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch tasks");
                setLoading(false);
            }
        };
        fetchTasks();
    }, [userId]);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            {history.length > 0 ? (
                < div className="px-4 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center">
                        <div className="sm:flex-auto">
                            <p className="mt-2 text-sm text-gray-700">
                                All of your earnings will display here.
                            </p>
                        </div>
                    </div>
                    <div className="flow-root mt-8">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <div className="overflow-hidden shadow ring-1 ring-black/5 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                    No
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Title
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Earn
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Date
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {history.map((task, i) => (
                                                <tr key={task._id}>
                                                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
                                                        {i + 1}
                                                    </td>
                                                    <td onClick={() => navigate(`/task-overview/${task.taskId?._id}`)} className="px-3 py-4 text-sm text-gray-500 underline cursor-pointer whitespace-nowrap">{task.taskId.title}</td>
                                                    <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{task.pointsEarned}</td>
                                                    <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{new Date(task.updatedAt).toLocaleDateString()}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            ) : (
                <ErrorPage errorMessage={'No data available.'} errorDesc='You do not completed any task up to now.' />
            )}
        </>
    );
}
