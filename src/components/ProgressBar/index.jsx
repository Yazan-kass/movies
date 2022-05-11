import { StyledBar } from './style.js';
function ProgressBar({Ratio}) {
  return (
    <StyledBar>
        <div style={{ width:`${Ratio}%`}}></div>
    </StyledBar>
  );
}

export default ProgressBar;