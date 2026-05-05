export default function Footer(){
    return(
        <footer className="p-4 pb-8">
          <div className="w-full max-w-5xl mx-auto">
              <div className="flex gap-4 justify-between items-center">
                  <small>Copyright © {new Date().getFullYear()} •  All right reserved by <a href="https://tumit.co" className="text-green-700">Tumit</a></small>
                  <div className="flex items-center gap-4">
                      <a href="#"><i className="bi bi-twitter-x"></i></a>
                      <a href="#"><i className="bi bi-github"></i></a>
                      <a href="#"><i className="bi bi-slack"></i></a>
                  </div>
              </div>
          </div>
        </footer>
    )
}