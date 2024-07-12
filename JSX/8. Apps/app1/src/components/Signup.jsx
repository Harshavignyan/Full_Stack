// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Courses.css';

function Signup(){
    return <div>
            <form action="/register" method="post">
                <input type="string" name="username" placeholder="username" />
                <br />
                <input type="string" name="email" placeholder="email" />
                <br />
                <input type="password" name="password" placeholder="password" />
                <br />
                <button>signup</button>
            </form>
    </div>
}

export default Signup;