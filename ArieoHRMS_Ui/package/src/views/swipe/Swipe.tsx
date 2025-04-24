import { useState, useEffect } from 'react';

type SwipeData = {
    name: string;
    date: string;
    swipeIn: string;
    swipeOut: string;
    totalHours: string;
};

const employeeSwipeData: SwipeData[] = [
    {
        name: 'John Doe',
        date: '2025-04-21',
        swipeIn: '09:05 AM',
        swipeOut: '06:15 PM',
        totalHours: '9.1',
    },
    {
        name: 'Jane Smith',
        date: '2025-04-21',
        swipeIn: '08:55 AM',
        swipeOut: '05:50 PM',
        totalHours: '8.9',
    },
    {
        name: 'Alice Brown',
        date: new Date().toISOString().split('T')[0], // today's date
        swipeIn: '09:10 AM',
        swipeOut: '06:10 PM',
        totalHours: '9.0',
    },
];

const SwipeDetails: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Detect dark mode by checking if any element in the DOM has class "dark"
    useEffect(() => {
        const checkDark = () => {
            const darkModeEnabled = document.querySelector('.dark') !== null;
            setIsDarkMode(darkModeEnabled);
        };

        checkDark(); // Initial check

        const observer = new MutationObserver(() => {
            checkDark();
        });

        observer.observe(document.documentElement, {
            attributes: true,
            subtree: true,
            attributeFilter: ['class'],
        });

        return () => observer.disconnect();
    }, []);

    const filteredData = employeeSwipeData.filter((emp) =>
        emp.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const isToday = (date: string) =>
        new Date(date).toDateString() === new Date().toDateString();

    const lightModeStyles: React.CSSProperties = {
        padding: '30px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        color: '#333',
    };

    const lightModeHeadingStyles: React.CSSProperties = {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
        fontSize:'20px'
    };

    const lightModeInputStyles: React.CSSProperties = {
        padding: '10px',
        marginBottom: '20px',
        width: '100%',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    };

    const darkModeStyles: React.CSSProperties = {
        padding: '30px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: 'var(--color-dark)',
        color: '#fff',
    };

    const darkModeHeadingStyles: React.CSSProperties = {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#fff',
        fontSize:'20px'
    };

    const darkModeInputStyles: React.CSSProperties = {
        padding: '10px',
        marginBottom: '20px',
        width: '100%',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #555',
        backgroundColor: '#444',
        color: '#fff',
    };

    const styles = isDarkMode ? darkModeStyles : lightModeStyles;
    const headingStyles = isDarkMode ? darkModeHeadingStyles : lightModeHeadingStyles;
    const inputStyles = isDarkMode ? darkModeInputStyles : lightModeInputStyles;

    return (
        <div style={styles}>
            <h2 style={headingStyles}>Employee Swipe Details</h2>

            <input
                type="text"
                placeholder="Search by employee name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={inputStyles}
            />

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th
                                style={{
                                    border: '1px solid #ddd',
                                    padding: '10px',
                                    textAlign: 'center',
                                    backgroundColor: '#4CAF50',
                                    color: 'white',
                                }}
                            >
                                Employee Name
                            </th>
                            <th
                                style={{
                                    border: '1px solid #ddd',
                                    padding: '10px',
                                    textAlign: 'center',
                                    backgroundColor: '#4CAF50',
                                    color: 'white',
                                }}
                            >
                                Date
                            </th>
                            <th
                                style={{
                                    border: '1px solid #ddd',
                                    padding: '10px',
                                    textAlign: 'center',
                                    backgroundColor: '#4CAF50',
                                    color: 'white',
                                }}
                            >
                                Swipe In
                            </th>
                            <th
                                style={{
                                    border: '1px solid #ddd',
                                    padding: '10px',
                                    textAlign: 'center',
                                    backgroundColor: '#4CAF50',
                                    color: 'white',
                                }}
                            >
                                Swipe Out
                            </th>
                            <th
                                style={{
                                    border: '1px solid #ddd',
                                    padding: '10px',
                                    textAlign: 'center',
                                    backgroundColor: '#4CAF50',
                                    color: 'white',
                                }}
                            >
                                Total Hours
                            </th>
                            <th
                                style={{
                                    border: '1px solid #ddd',
                                    padding: '10px',
                                    textAlign: 'center',
                                    backgroundColor: '#4CAF50',
                                    color: 'white',
                                }}
                            >
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((emp, index) => (
                            <tr
                                key={index}
                                style={{
                                    backgroundColor: isDarkMode ? '#444' : '#f2f2f2', // A consistent color for both modes
                                    color: isDarkMode ? '#fff' : '#333', // Adjust text color based on mode
                                }}
                            >
                                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
                                    {emp.name}
                                </td>
                                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
                                    {emp.date}
                                </td>
                                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
                                    {emp.swipeIn}
                                </td>
                                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
                                    {emp.swipeOut}
                                </td>
                                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
                                    {emp.totalHours}h
                                </td>
                                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
                                    {parseFloat(emp.totalHours) >= 8 ? '✅ Present' : '⚠️ Incomplete'}
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default SwipeDetails;
