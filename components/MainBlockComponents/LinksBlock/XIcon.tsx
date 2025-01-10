const XIcon = () => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 49">
        <defs>
            <linearGradient id="gradient_x" gradientUnits="userSpaceOnUse" x1="24.5" y1="50" x2="24.5" y2="1" gradientTransform="matrix(1 0 0 -1 0 50)">
                <stop offset="0" style={{ stopColor: "#232323" }} />
                <stop offset="1" style={{ stopColor: "#000000" }} />
            </linearGradient>
        </defs>
        <circle fill="url(#gradient_x)" cx="24.5" cy="24.5" r="24.5" />
        <path fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" d="M26.1,21.4l-5.9-8.6c0-0.1-0.1-0.1-0.2-0.1h-7c-0.1,0-0.2,0.1-0.2,0.1c0,0.1,0,0.2,0,0.3l9.1,13.2l-9,10.5c-0.1,0.1-0.1,0.2,0,0.3c0,0.1,0.1,0.1,0.2,0.1h2.1c0.1,0,0.1,0,0.2-0.1l7.8-9.1l6.2,9.1c0,0.1,0.1,0.1,0.2,0.1h7c0.1,0,0.2-0.1,0.2-0.1c0-0.1,0-0.2,0-0.3l-9.4-13.7l8.6-10c0.1-0.1,0.1-0.2,0-0.3c0-0.1-0.1-0.1-0.2-0.1h-2.1c-0.1,0-0.1,0-0.2,0.1L26.1,21.4z M24.3,26.3L24.3,26.3L23.4,25v0l-7.1-10.2h2.6l5.9,8.4l0.9,1.3l7.5,10.7h-2.6L24.3,26.3z" />
    </svg>
);

export default XIcon;
