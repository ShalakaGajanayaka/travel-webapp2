import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import Sidebar from "../components/Sidebar";
import { useAuth } from "../context/AuthContext";
import { checkAuth } from "../utils/auth";
import { theme } from "../theme/theme"; // Import the shared theme

const MainLayout = () => {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const checkUserAuth = async () => {
            const authenticatedUser = await checkAuth();
            if (!authenticatedUser) {
                navigate("/login");
            } else {
                setUser(authenticatedUser);
            }
        };
        checkUserAuth();
    }, [navigate, setUser]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {user && (
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    minHeight: '100vh',
                    bgcolor: 'background.default'
                }}>
                    <Sidebar />
                    <Box sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        flex: 1, 
                        lg: { pl: '256px' } // Adjust based on sidebar width
                    }}>
                           <div className="flex flex-col flex-1 lg:pl-64">    
                        <Outlet />    </div>
                    </Box>
                </Box>
            )}
        </ThemeProvider>
    );
};

export default MainLayout;