
import './Main.css'
import Title from "./view/Title.js";
import Add from './view/Add.js';
import Tabs from './view/Tabs.js';

const main = () => {
    return (
    <div className="main bg_grey">
        <Title />
        <Add />

        <Tabs>
        <div label="Gator">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Croc">
          After 'while, <em>Crocodile</em>!
        </div>
        <div label="Sarcosuchus">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>
      
    </div>
    )
}

export default main;