import React, { useState } from 'react';
import axiosInstance from '../../../../utils/axiosInstance';

const PREDEFINED_LINKS = [
    { name: "Paris", image: "https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_1280.jpg" },
    { name: "New York", image: "https://cdn.pixabay.com/photo/2019/07/21/07/12/new-york-4352072_1280.jpg" },
    { name: "Tokyo", image: "https://cdn.pixabay.com/photo/2013/11/25/09/47/buildings-217878_1280.jpg" },
    { name: "London", image: "https://cdn.pixabay.com/photo/2017/05/18/21/54/london-bridge-2324875_1280.jpg" },
    { name: "Sydney", image: "https://cdn.pixabay.com/photo/2014/06/06/09/36/sydney-opera-house-363244_1280.jpg" },
    { name: "Rome", image: "https://cdn.pixabay.com/photo/2020/05/17/12/56/rome-5181486_1280.jpg" },
    { name: "Berlin", image: "https://cdn.pixabay.com/photo/2019/11/30/16/13/berlin-4663539_1280.jpg" },
    { name: "Dubai", image: "https://cdn.pixabay.com/photo/2020/03/19/18/29/camel-4948299_1280.jpg" },
    { name: "Barcelona", image: "https://cdn.pixabay.com/photo/2013/04/22/14/20/spain-106463_1280.jpg" },
    { name: "Istanbul", image: "https://cdn.pixabay.com/photo/2015/08/31/07/30/istanbul-915076_1280.jpg" },
    { name: "Bangkok", image: "https://cdn.pixabay.com/photo/2020/02/20/13/25/city-4864747_1280.jpg" },
    { name: "Los Angeles", image: "https://cdn.pixabay.com/photo/2014/10/22/17/34/los-angeles-498285_1280.jpg" },
    { name: "Singapore", image: "https://cdn.pixabay.com/photo/2016/01/10/19/49/singapore-1132358_1280.jpg" },
    { name: "Amsterdam", image: "https://cdn.pixabay.com/photo/2021/11/08/11/19/buildings-6778915_1280.jpg" },
    { name: "Madrid", image: "https://cdn.pixabay.com/photo/2017/09/03/00/19/spain-2708993_1280.jpg" },
    { name: "Cape Town", image: "https://cdn.pixabay.com/photo/2017/04/28/09/02/south-africa-2267795_1280.jpg" },
    { name: "Hong Kong", image: "https://cdn.pixabay.com/photo/2019/07/29/10/35/hong-kong-4370342_1280.jpg" },
    { name: "Seoul", image: "https://cdn.pixabay.com/photo/2022/10/15/16/44/night-view-7523474_1280.jpg" },
    { name: "Moscow", image: "https://cdn.pixabay.com/photo/2018/12/26/05/13/moscow-3895333_1280.jpg" },
    { name: "Rio de Janeiro", image: "https://cdn.pixabay.com/photo/2021/06/22/15/20/rio-de-janeiro-6356462_1280.jpg" },
    { name: "San Francisco", image: "https://cdn.pixabay.com/photo/2019/12/05/05/50/san-francisco-4674351_1280.jpg" },
    { name: "Cairo", image: "https://cdn.pixabay.com/photo/2018/08/24/11/28/mosque-3627765_1280.jpg" },
    { name: "Venice", image: "https://cdn.pixabay.com/photo/2019/12/18/16/34/venice-4704342_1280.jpg" },
    { name: "Florence", image: "https://cdn.pixabay.com/photo/2019/06/06/13/36/italy-4256018_1280.jpg" },
    { name: "Prague", image: "https://cdn.pixabay.com/photo/2021/01/20/21/32/prague-5935651_1280.jpg" },
    { name: "Vienna", image: "https://cdn.pixabay.com/photo/2017/01/23/21/05/castle-2003867_1280.jpg" }
];

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
    const [selectedLink, setSelectedLink] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleLinkSelect = (link) => {
        setSelectedLink(link);
        setFormData(prev => ({
            ...prev,
            link: link.image
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedLink) {
            setError('Please select a destination');
            return;
        }
        if (!formData.name.trim()) {
            setError('Please enter a task name');
            return;
        }
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
            setSelectedLink(null);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create task');
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-2xl">
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
                                placeholder="Enter task name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Select Destination</label>
                            <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-h-60 overflow-y-auto">
                                {PREDEFINED_LINKS.map((link) => (
                                    <div
                                        key={link.name}
                                        onClick={() => handleLinkSelect(link)}
                                        className={`relative cursor-pointer rounded-lg border-2 p-2 transition-all ${
                                            selectedLink?.name === link.name
                                                ? 'border-purple-500 bg-purple-50'
                                                : 'border-gray-200 hover:border-purple-300'
                                        }`}
                                    >
                                        <img
                                            src={link.image}
                                            alt={link.name}
                                            className="w-full h-24 object-cover rounded-md"
                                        />
                                        <p className="mt-1 text-sm font-medium text-gray-900 text-center">
                                            {link.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
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
                            disabled={loading || !selectedLink}
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