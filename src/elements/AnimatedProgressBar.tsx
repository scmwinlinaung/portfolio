import React,{FC} from 'react';
import '../css/AnimatedProgressBar.css';
interface AppProps {
	progress: number;
	color: string;
  }
  
const AnimatedProgressBar: FC<AppProps>= ({progress, color}) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" >
        <span className="percentage" style={{ width: `${progress}%`, background:color}}>{progress}%</span>
      </div>
    </div>
  );
}

export default AnimatedProgressBar;