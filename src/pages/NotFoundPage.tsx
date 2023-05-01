import { Link } from "react-router-dom";
import { PageLayout } from "../components/page-layout";
import { HOME_ROUTE } from "../config/routes";

export const NotFoundPage = () => {
  return (
    <PageLayout>
      <h2 className="text-2xl font-bold text-center">404</h2>
      <div className="text-center">
        The page you are looking for could not be found. Return to{" "}
        <Link className="text-blue-500 underline" to={HOME_ROUTE}>
          home
        </Link>
        ?
      </div>
    </PageLayout>
  );
};
