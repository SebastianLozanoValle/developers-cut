export default function Loading() {
    return <span className="page-loader">
        
      <div className="loader">
          <div className="panel panel-top">
            <div className="hexagon"></div>
          </div>
          <div className="panel panel-bottom-left">
            <div className="hexagon"></div>
          </div>
          <div className="panel panel-bottom-right">
            <div className="hexagon"></div>
          </div>
        </div>
    </span>;
}