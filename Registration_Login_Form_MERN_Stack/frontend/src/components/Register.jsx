import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result => {
            console.log(result);
            if(result.data === "Already registered"){
                alert("E-mail already registered! Please Login to proceed.");
                navigate('/login');
            }
            else{
                alert("Registered successfully! Please Login to proceed.")
                navigate('/login');
            }
        })
        .catch(err => console.log(err));
    }
    
    return (
        <div className="d-flex justify-content-center align-items-center vh-100" 
             style={{
                 background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                 minHeight: '100vh'
             }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                            <div className="row g-0">
                                {/* Left side image */}
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="h-100 d-flex align-items-center justify-content-center p-4" 
                                         style={{
                                             background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
                                         }}>
                                        <div className="text-center text-white p-3">
                                            <h2 className="fw-bold mb-4">Welcome!</h2>
                                            <div className="mb-4">
                                                <i className="bi bi-person-plus-fill" style={{fontSize: '5rem'}}></i>
                                            </div>
                                            <p className="lead mb-4">Join our community today and enjoy all the benefits</p>
                                            <p className="mb-0">Already have an account?</p>
                                            <Link to="/login" className="btn btn-outline-light mt-3 px-4 rounded-pill fw-semibold">
                                                Sign In
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Right side form */}
                                <div className="col-lg-7">
                                    <div className="card-body p-4 p-lg-5">
                                        <div className="text-center mb-4">
                                            <h3 className="fw-bold text-primary mb-1">Create Account</h3>
                                            <p className="text-muted">Please fill in the form to register</p>
                                        </div>
                                        
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-4">
                                                <div className="input-group">
                                                    <span className="input-group-text bg-light border-0 text-primary">
                                                        <i className="bi bi-person-fill"></i>
                                                    </span>
                                                    <input 
                                                        type="text" 
                                                        className="form-control bg-light border-0 py-3" 
                                                        placeholder="Your Name"
                                                        onChange={(event) => setName(event.target.value)}
                                                        required 
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div className="mb-4">
                                                <div className="input-group">
                                                    <span className="input-group-text bg-light border-0 text-primary">
                                                        <i className="bi bi-envelope-fill"></i>
                                                    </span>
                                                    <input 
                                                        type="email" 
                                                        className="form-control bg-light border-0 py-3" 
                                                        placeholder="Email Address"
                                                        onChange={(event) => setEmail(event.target.value)}
                                                        required 
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div className="mb-4">
                                                <div className="input-group">
                                                    <span className="input-group-text bg-light border-0 text-primary">
                                                        <i className="bi bi-lock-fill"></i>
                                                    </span>
                                                    <input 
                                                        type="password" 
                                                        className="form-control bg-light border-0 py-3" 
                                                        placeholder="Password"
                                                        onChange={(event) => setPassword(event.target.value)}
                                                        required 
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div className="mb-4 form-check">
                                                <input type="checkbox" className="form-check-input" id="terms" required />
                                                <label className="form-check-label" htmlFor="terms">
                                                    I agree to the <a href="#" className="text-primary">Terms of Service</a> and <a href="#" className="text-primary">Privacy Policy</a>
                                                </label>
                                            </div>
                                            
                                            <button type="submit" className="btn btn-primary w-100 py-3 rounded-pill mb-4">
                                                <i className="bi bi-box-arrow-in-right me-2"></i>Register Now
                                            </button>
                                            
                                            <div className="text-center d-lg-none">
                                                <p className="mb-0">Already have an account? <Link to="/login" className="text-primary fw-semibold">Login</Link></p>
                                            </div>
                                        </form>
                                        
                                        <div className="mt-4 text-center">
                                            <p className="text-muted mb-0">Or register with</p>
                                            <div className="d-flex justify-content-center gap-3 mt-3">
                                                <a href="#" className="btn btn-outline-secondary rounded-circle">
                                                    <i className="bi bi-google"></i>
                                                </a>
                                                <a href="#" className="btn btn-outline-secondary rounded-circle">
                                                    <i className="bi bi-facebook"></i>
                                                </a>
                                                <a href="#" className="btn btn-outline-secondary rounded-circle">
                                                    <i className="bi bi-apple"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Register;