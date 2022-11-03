import 'lib/Menu.css';
import { style } from "Global"

//` called is backtick, alt+96
const Container = style.Container();

function SideMenu() {
    return (

        <div className="body">
            <nav className="side-bar">
                <ul >
                    <li>
                        <a href="#">
                            <i className="fa fa-desktop" aria-hidden="true"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                            <span>Message</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-comment-o" aria-hidden="true"></i>
                            <span>Comment</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-info-circle" aria-hidden="true"></i>
                            <span>About</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-cog" aria-hidden="true"></i>
                            <span>Setting</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-power-off" aria-hidden="true"></i>
                            <span>Logout</span>
                        </a>
                    </li>
                </ul>
            </nav>
            {/* <section class="section-1">
			<h1>WELCOME</h1>
			<p>#CodingWithElias</p>
		</section> */}
        </div>

    )
}
export default SideMenu;