import React, { useState } from 'react';
import axiosInstance from '../../../../utils/axiosInstance';

export default function CreateTaskModal({ isOpen, onClose, onTaskCreated }) {
    const [formData, setFormData] = useState({
        name: '',
        value: '',
        profit: '',
        link: '',
        tie: true
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axiosInstance.post('/api/tasks', formData);
            onTaskCreated(response.data.task);
            onClose();
            setFormData({
                name: '',
                value: '',
                profit: '',
                link: '',
                tie: true
            });
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create task');
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4">Create New Task</h2>
                
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Task Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Value</label>
                            <input
                                type="number"
                                name="value"
                                value={formData.value}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Profit</label>
                            <input
                                type="number"
                                name="profit"
                                value={formData.profit}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Link</label>
                            <input
                                type="url"
                                name="link"
                                value={formData.link}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                            />
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-br from-blue-500 to-purple-600 rounded-md hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
                        >
                            {loading ? 'Creating...' : 'Create Task'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
} 