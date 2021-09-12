import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import ImageGallery from "./ImageGallery";
import VideoGallery from "./VideoGallery";

const Gallery = () => {
  const match = useRouteMatch();
  return (
    <div>
      Welcome to gallery
      <Router>
        <ul>
          <li>
            <Link to={`${match.url}/image`}> Image gallery </Link>
          </li>
          <li>
            <Link to={`${match.url}/video`}>Video gallery</Link>
          </li>
        </ul>
        <Switch>
          <Route path={`${match.path}/image`} exact>
            <ImageGallery />
          </Route>
          <Route path={`${match.path}/video`} exact>
            <VideoGallery />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Gallery;
