import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Interactive background effect
    useEffect(() => {
        const canvas = document.getElementById('matrix-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+";
        const font_size = 14;
        const columns = canvas.width / font_size;
        const drops = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        function draw() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#0095ff";
            ctx.font = font_size + "px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = characters[Math.floor(Math.random() * characters.length)];
                ctx.fillText(text, i * font_size, drops[i] * font_size);

                if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        }

        const interval = setInterval(draw, 35);
        
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result);
                setLoading(false);

                if (result.data.message === "Success") {
                    console.log("Login Success");
                    alert('Login successful!');
                    
                    // Redirect based on the backend response
                    window.location.href = result.data.redirectTo;
                } else {
                    alert(result.data.message); // Display error message from backend
                }
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
                alert('Error logging in! Please try again.');
            });
    };

    return (
        <div className="login-page position-relative vh-100 d-flex justify-content-center align-items-center text-center overflow-hidden">
            {/* Matrix-like canvas background */}
            <canvas id="matrix-canvas" className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}></canvas>
            
            {/* Gradient overlay */}
            <div className="position-absolute top-0 start-0 w-100 h-100" 
                 style={{ 
                     background: "linear-gradient(135deg, rgba(0,213,255,0.8), rgba(0,149,255,0.8), rgba(93,0,255,0.8))",
                     zIndex: 1 
                 }}>
            </div>
            
            {/* Floating elements */}
            <div className="position-absolute" style={{ 
                width: "150px", 
                height: "150px", 
                borderRadius: "50%", 
                background: "rgba(255,255,255,0.1)",
                top: "15%",
                left: "20%",
                animation: "float 8s ease-in-out infinite",
                zIndex: 2
            }}></div>
            
            <div className="position-absolute" style={{ 
                width: "100px", 
                height: "100px", 
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%", 
                background: "rgba(255,255,255,0.1)",
                bottom: "20%",
                right: "15%",
                animation: "float 10s ease-in-out infinite 1s",
                zIndex: 2
            }}></div>
            
            {/* Login card */}
            <div className="card border-0 position-relative" style={{ 
                width: "400px",
                maxWidth: "90%",
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                zIndex: 10
            }}>
                {/* Card top design element */}
                <div style={{
                    position: "absolute",
                    top: "-50px",
                    right: "-50px",
                    width: "100px",
                    height: "100px",
                    background: "#0095ff",
                    borderRadius: "50%",
                    zIndex: 0
                }}></div>
                
                <div className="card-body p-4 p-md-5 position-relative">
                    <div className="text-center mb-4">
                        <div className="d-inline-block mb-3 position-relative">
                            <div className="position-absolute" style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "50%",
                                background: "rgba(0,149,255,0.2)",
                                top: "-10px",
                                left: "-15px",
                                zIndex: 0
                            }}></div>
                            <i className="bi bi-shield-lock-fill position-relative" style={{ 
                                fontSize: "3rem", 
                                color: "#0095ff",
                                zIndex: 1
                            }}></i>
                        </div>
                        <h2 className="fw-bold" style={{ color: "#0095ff" }}>Welcome Back</h2>
                        <p className="text-muted">Sign in to your account</p>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-4">
                            <input
                                type="email"
                                className="form-control border-0 bg-light"
                                id="email"
                                placeholder="name@example.com"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{ 
                                    borderRadius: "10px", 
                                    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)" 
                                }}
                            />
                            <label htmlFor="email" className="text-muted">Email address</label>
                        </div>
                        
                        <div className="form-floating mb-4">
                            <input
                                type="password"
                                className="form-control border-0 bg-light"
                                id="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={{ 
                                    borderRadius: "10px", 
                                    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)" 
                                }}
                            />
                            <label htmlFor="password" className="text-muted">Password</label>
                        </div>
                        
                        <div className="d-flex justify-content-between mb-4 small">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="remember-me" />
                                <label className="form-check-label text-muted" htmlFor="remember-me">
                                    Remember me
                                </label>
                            </div>
                            <a href="#" className="text-decoration-none" style={{ color: "#0095ff" }}>Forgot password?</a>
                        </div>
                        
                        <button 
                            type="submit" 
                            className="btn w-100 py-3 text-white position-relative overflow-hidden" 
                            disabled={loading}
                            style={{ 
                                background: "linear-gradient(to right, #00d5ff, #0095ff, #5d00ff)",
                                borderRadius: "10px",
                                border: "none"
                            }}
                        >
                            <span className="position-relative">
                                {loading ? (
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                ) : null}
                                Sign In
                            </span>
                        </button>
                    </form>
                    
                    <div className="text-center mt-4">
                        <p className="mb-0">Don't have an account?</p>
                        <Link 
                            to="/register" 
                            className="text-decoration-none fw-bold"
                            style={{ color: "#0095ff" }}
                        >
                            Create Account
                        </Link>
                    </div>
                    
                    <div className="mt-4 text-center">
                        <p className="text-muted small mb-0">Or sign in with</p>
                        <div className="d-flex justify-content-center gap-3 mt-2">
                            <button className="btn btn-outline-light text-primary p-2 rounded-circle" style={{width: "40px", height: "40px"}}>
                                <i className="bi bi-google"></i>
                            </button>
                            <button className="btn btn-outline-light text-primary p-2 rounded-circle" style={{width: "40px", height: "40px"}}>
                                <i className="bi bi-facebook"></i>
                            </button>
                            <button className="btn btn-outline-light text-primary p-2 rounded-circle" style={{width: "40px", height: "40px"}}>
                                <i className="bi bi-twitter"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* CSS for animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(5deg);
                    }
                }
                
                .form-control:focus {
                    border-color: #0095ff;
                    box-shadow: 0 0 0 0.25rem rgba(0, 149, 255, 0.25);
                }
                
                .btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 20px rgba(0, 149, 255, 0.3);
                    transition: all 0.3s ease;
                }
                
                .form-check-input:checked {
                    background-color: #0095ff;
                    border-color: #0095ff;
                }
            `}</style>
        </div>
    );
};

export default Login;