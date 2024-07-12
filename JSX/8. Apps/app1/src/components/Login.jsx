// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Courses.css';

function Login(){
    return <div>
            <form action="/" method="post">
                <input type="text" name="username" placeholder="username" />
                <br />
                <input type="password" name="password" placeholder="password" />
                <br />
                <button>login</button>
        </form>
        <p>no account? <a href="/signup">signup</a></p>
    </div>
}

export default Login;