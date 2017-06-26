import React from 'react';

var Mount = (props) => {
	var events = props.events.slice(0, 5);
	return (
		<div id="mount-container">
			<div className="mount-list">
				{events.map((event)=> (
					<div className="mount-entry" key={event.id}>
						<h4 className="mountTitle">{event.title}</h4> 
						<h5 className="mountDate">{event.start_time}</h5>
						<h5 className="mountCity">{event.city_name}</h5>
						<h5 className="mountDescripton">{event.description}</h5>
					</div>
				))}
			</div>
		</div>
	)
}

export default Mount;

//path to image url: event.image.thumb.url
//tried: <img className="mountPic" src={event.image.thumb.url}/> <-- doesn't work 