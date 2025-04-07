import React, { useState, useEffect } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import axiosInstance from '../../../../utils/axiosInstance';

export default function EditWallet({ open, setOpen, user }) {
    const [formData, setFormData] = useState({
        walletBalance: user?.walletBalance || 0,
        walletAddress: '',
        network: 'TRC20',
        cryptoType: 'USDT'
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchWallet = async () => {
            try {
                const response = await axiosInstance.get(`/api/users/get-wallet/${user._id}`);
                if (response.data) {
                    setFormData(prevData => ({
                        ...prevData,
                        walletAddress: response.data.walletAddress || '',
                        network: response.data.network || 'TRC20',
                        cryptoType: response.data.cryptoType || 'USDT'
                    }));
                }
            } catch (err) {
                console.error("Error fetching wallet:", err);
            }
        };

        if (open) {
            fetchWallet();
        }
    }, [open, user._id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        try {
            // Update user's wallet balance
            const userResponse = await axiosInstance.put(`/api/users/${user._id}`, {
                walletBalance: parseFloat(formData.walletBalance)
            });

            // Update or create wallet information
            const walletData = {
                userId: user._id,
                firstName: user.userName,
                phone: user.phone || '',
                walletAddress: formData.walletAddress,
                network: formData.network,
                cryptoType: formData.cryptoType
            };

            try {
                // Try to update existing wallet
                await axiosInstance.put(`/api/users/update-wallet/${user._id}`, walletData);
            } catch (walletErr) {
                // If wallet doesn't exist, create a new one
                if (walletErr.response && walletErr.response.status === 404) {
                    await axiosInstance.post('/api/users/create-wallet', walletData);
                } else {
                    throw walletErr;
                }
            }

            if (userResponse.status === 200) {
                setSuccess('Wallet information updated successfully!');
                setTimeout(() => {
                    setOpen(false); // Close modal after success
                }, 1500);
                window.location.reload();
            } else {
                throw new Error(userResponse.data.error || 'Something went wrong');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
            <DialogBackdrop className="fixed inset-0 transition-opacity bg-gray-500/75" />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <DialogPanel className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="mb-4 text-2xl font-bold">Edit Wallet</h2>
                    <h4 className="mb-4">User: {user.userName}</h4>
                    {error && <p className="mb-2 text-sm text-red-500">{error}</p>}
                    {success && <p className="mb-2 text-sm text-green-500">{success}</p>}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="walletAddress" className="block text-sm font-medium text-gray-700">
                                Wallet Address
                            </label>
                            <input
                                type="text"
                                name="walletAddress"
                                value={formData.walletAddress}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="network" className="block text-sm font-medium text-gray-700">
                                Network
                            </label>
                            <select
                                name="network"
                                value={formData.network}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            >
                                <option value="TRC20">TRC20</option>
                                <option value="ERC20">ERC20</option>
                                <option value="BTC">BTC</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="cryptoType" className="block text-sm font-medium text-gray-700">
                                Crypto Type
                            </label>
                            <select
                                name="cryptoType"
                                value={formData.cryptoType}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            >
                                <option value="USDT">USDT</option>
                                <option value="USDC">USDC</option>
                                <option value="ETH">ETH</option>
                                <option value="BTC">BTC</option>
                            </select>
                        </div>
                        <div className="flex justify-center mt-4 space-x-3">
                            <button
                                type="submit"
                                className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 disabled:opacity-50"
                                disabled={loading}
                            >
                                {loading ? 'Updating...' : 'Update'}
                            </button>
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-500"
                            >
                                Close
                            </button>
                        </div>
                    </form>
                </DialogPanel>
            </div>
        </Dialog>
    );
} 