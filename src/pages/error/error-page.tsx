import { useRouteError } from "react-router-dom";

export const ErrorPage = ({}: ErrorPageProps) => {
	const error: any = useRouteError();
	console.error(error);

	return <h1>Error Page</h1>;
};

// Using for lazy loading page
export default ErrorPage;
