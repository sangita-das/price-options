import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h2>OOPS!!</h2>
            <p> {error.statusText || error.message} </p>

            error.status === 404 && <div className="">
            <p>Page not found</p>
            <Link to ='/'><button>Go Back</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;