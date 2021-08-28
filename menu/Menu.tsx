import Pong from '../game/Pong';

export default function Menu() {
	function startGame() {
		let menu = document.querySelector('div.menu') as HTMLDivElement;
		menu.hidden = true;
		Pong()
	}
	
	return (
		<div className='menu'>
			<ul>
				<li id='1' onClick={startGame}>Start</li>
				<li id='2'>Settings</li>
				<li id='3'>Exit</li>
			</ul>
		</div>	
	)
}