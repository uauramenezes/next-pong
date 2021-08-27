import Pong from '../game/Pong';

export default function Menu() {
	function selectOption() {
		// let li = document.getElementById(`${id}`) as HTMLElement;
		// li.style.borderColor = '#ffffff';
		let menu = document.querySelector('.menu') as HTMLElement;
		menu.hidden = true;
		Pong()
	}
	
	return (
		<div className='menu'>
			<ul>
				<li id='1' onClick={selectOption}>Start</li>
				<li id='2'>Settings</li>
				<li id='3'>Exit</li>
			</ul>
		</div>	
	)
}