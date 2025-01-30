import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Clear the error when the user starts typing
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (!value.trim()) {
            setErrors({
                ...errors,
                [name]: 'This field is required.'
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate all fields before submission
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'This field is required.';
        if (!formData.email.trim()) newErrors.email = 'This field is required.';
        if (!formData.message.trim()) newErrors.message = 'This field is required.';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Form submitted successfully!');
    };

    return (
        <div>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />
                    {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />
                    {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
