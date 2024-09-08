import React, { useState } from 'react';

function Feedback() {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Feedback submitted:', feedback);
        // Add your form submission logic here
        setFeedback(''); // Clear the textarea after submission
    };

    return (
        <div className="max-w-full  mx-auto p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-center">Feedback Form</h2>
            <form onSubmit={handleSubmit} className="flex items-center space-x-4">
                <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows="1"
                    className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="If the app doesn't recognize any particular object, please notify us about it..."
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Feedback;
