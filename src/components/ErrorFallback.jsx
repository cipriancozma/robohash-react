import "../App.scss";

const ErrorFallback = ({error}) => {
    return (
      <div role="alert" className="title">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
      </div>
    )
  }

  export default ErrorFallback;