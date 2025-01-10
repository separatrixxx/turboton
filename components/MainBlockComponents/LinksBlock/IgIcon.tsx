const IgIcon = () => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 49">
        <defs>
            <linearGradient id="gradient_ig" gradientUnits="userSpaceOnUse" x1="25" y1="50" x2="25" y2="1" gradientTransform="matrix(1 0 0 -1 0 50)">
                <stop offset="0" style={{ stopColor: "#584FCE" }} />
                <stop offset="0.505" style={{ stopColor: "#DF327D" }} />
                <stop offset="1" style={{ stopColor: "#FCCB69" }} />
            </linearGradient>
        </defs>
        <circle fill="url(#gradient_ig)" cx="25" cy="24.5" r="24.5" />
        <path fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" d="M30.5,12.8h-11c-3.7,0-6.7,3-6.7,6.7v11c0,3.7,3,6.7,6.7,6.7h11c3.7,0,6.7-3,6.7-6.7v-11C37.2,15.8,34.2,12.8,30.5,12.8z M35.3,30.5c0,2.7-2.2,4.8-4.8,4.8h-11c-2.7,0-4.8-2.2-4.8-4.8v-11c0-2.7,2.2-4.8,4.8-4.8h11c2.7,0,4.8,2.2,4.8,4.8V30.5z" />
        <path fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" d="M25,18.2c-3.8,0-6.8,3.1-6.8,6.8c0,3.8,3.1,6.8,6.8,6.8c3.8,0,6.8-3.1,6.8-6.8C31.8,21.2,28.8,18.2,25,18.2z M25,29.9c-2.7,0-4.9-2.2-4.9-4.9c0-2.7,2.2-4.9,4.9-4.9c2.7,0,4.9,2.2,4.9,4.9C29.9,27.7,27.7,29.9,25,29.9z M31.7,15.9c-1.2,0-2.2,1-2.2,2.2c0,1.2,1,2.2,2.2,2.2c1.2,0,2.2-1,2.2-2.2C33.9,16.8,32.9,15.9,31.7,15.9z M31.7,18.3c-0.2,0-0.3-0.1-0.3-0.3s0.1-0.3,0.3-0.3c0.2,0,0.3,0.1,0.3,0.3C32,18.2,31.9,18.3,31.7,18.3z" />
    </svg>
);

export default IgIcon;
