import { Switch, Route, Link, Redirect } from "react-router-dom";
import ArticleDetail from "./components/ArticleDetail";

import Home from "./components/Home";
import "./components/Home/index.css";
import NotFound from "./components/NotFound";
import NewsVideos from "./components/NewsVideos";

const App = () => {
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="bg-container">
      <p className="bg-date">
        {currentDate} {currentTime}
      </p>
      <div className="container news-container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid justify-content-between">
            <Link className="navbar-brand" to="/">
              <h1 className="nav-heading">TheBharat News</h1>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav w-100 ml-auto">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/NewsVideos">
                  News Videos
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div></div>

        <div className="d-flex content-container">
          <div className="sidebar-container">
            <h1 className="popular-heading">Popular News</h1>
            <div className="popular-container">
              <div className="card p-2 my-2 bg-transparent card-content">
                <a href="https://timesofindia.indiatimes.com/gadgets-news/new-york-city-sues-facebook-tiktok-youtube-over-youth-mental-health-crisis/articleshow/107727789.cms">
                  <div className="d-flex">
                    <p>
                      New York City is suing Facebook, TikTok, YouTube, here's
                      why
                    </p>
                    <img src="https://static.toiimg.com/thumb/msid-107727789,imgsize-928880,width-100,resizemode-4/107727789.jpg" />
                  </div>
                </a>
              </div>
              <div className="card p-2 my-2 bg-transparent card-content">
                <a href="https://timesofindia.indiatimes.com/sports/cricket/england-in-india/my-wrong-call-ravindra-jadeja-admits-to-run-out-blunder-involving-debutant-sarfaraz-khan/articleshow/107730088.cms">
                  <div className="d-flex">
                    <p>
                      'My wrong call': Jadeja admits to run-out blunder
                      involving...
                    </p>
                    <img src="https://static.toiimg.com/thumb/msid-107730093,imgsize-112804,width-100,resizemode-4/107730093.jpg" />
                  </div>
                </a>
              </div>
              <div className="card p-2 my-2 bg-transparent card-content">
                <a href="https://timesofindia.indiatimes.com/india/why-sc-struck-down-electoral-bonds-and-how-the-parties-reacted/articleshow/107726891.cms">
                  <div className="d-flex">
                    <p>
                      Why SC struck down Electoral Bonds and how parties reacted
                    </p>
                    <img src="https://static.toiimg.com/thumb/msid-107727893,imgsize-71500,width-100,resizemode-4/107727893.jpg" />
                  </div>
                </a>
              </div>
              <div className="card p-2 my-2 bg-transparent card-content">
                <a href="https://timesofindia.indiatimes.com/world/china/lying-flat-why-some-chinese-youth-are-quitting-jobs-for-me-time/articleshow/107716662.cms">
                  <div className="d-flex">
                    <p>
                      'Lying flat': Why some Chinese youth are quitting jobs for
                      'me...
                    </p>
                    <img src="https://static.toiimg.com/thumb/msid-107717184,imgsize-852958,width-100,resizemode-4/107717184.jpg" />
                  </div>
                </a>
              </div>
              <div className="card p-2 my-2 bg-transparent card-content">
                <a href="https://timesofindia.indiatimes.com/india/supreme-court-revives-democracy-by-declaring-electoral-bond-scheme-unconstitutional/articleshow/107730807.cms">
                  <div className="d-flex text-secondary">
                    <p>
                      Electoral Bonds were bribery couched in sophisticated
                      language
                    </p>
                    <img src="https://static.toiimg.com/thumb/width-100,imgsize-59400,msid-107730795/107730795.jpg" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/article/:id" component={ArticleDetail} />
            <Route exact path="/NewsVideos" component={NewsVideos} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
