import React, { Component } from 'react';
import './Navigation.css';

// let newLocations = this.props.locations;

export default class Navigation extends Component {
	// Used for rendering
	getClasses(ctx, index) {
		let classes = `material-icons ${ctx}`;
		if (ctx === 'dots') {
			if (this.isLast(index)) {
				classes += ' hidden';
			}
		} else {
			classes += this.isLast(index) ? ' small' : ' x-small';
			if (index === 0) {
				classes += ' first';
			}
		}
		return classes;
	}

	// Used for rendering
	isLast(index) {
		return index === this.props.locations.length - 1;
	}

	constructor(props) {
		super(props);
		this.state = {
			items: this.props.locations,
		};
	}

	moveDownArrayElement(from, to) {
		let el = this.state.items[from];
		let newArr = this.state.items;
		console.log(newArr.splice(from, 1));
		console.log(newArr.splice(to, 0, el));

		this.setState({
			items: newArr,
		});
	}

	moveUpArrayElement(from, to) {
		let el = this.state.items[from];
		let newArr = this.state.items;
		console.log(newArr.splice(from, 1));
		console.log(newArr.splice(to, 0, el));

		this.setState({
			items: newArr,
		});

		return;
	}

	render() {
		return (
			<div className="layout-row align-items-center justify-content-center navigation-screen">
				<div className="card layout-row flat map-card">
					<section className="card pb-16 pr-16 flex-auto layout-column justify-content-center">
						<ul className="pl-0" data-testid="location-list">
							{console.log(this.props.locations)}
							{/* Use this li for rendering each location item as it contains all the data-testid attributes required for the tests to pass*/}
							{this.state.items &&
								this.state.items.map((lc, index) => (
									<li
										key={'row' + index}
										data-testid={'location-' + index}
										className="layout-row justify-content-between align-items-center mr-8 pl-40 relative"
									>
										<div className="layout-column justify-content-start align-items-center handle">
											<i className={this.getClasses('marker', index)}>
												{this.isLast(index) ? 'room' : 'radio_button_checked'}
											</i>
											<i className={this.getClasses('dots', index)}>
												more_vert
											</i>
										</div>
										<div className="location-name">
											<p
												className="caption text-start mb-4"
												data-testid="location"
											>
												{lc}
											</p>
										</div>
										<div>
											{index === 0 ? null : (
												<button
													className="icon-only small mx-0"
													data-testid="up-button"
													onClick={() =>
														this.moveDownArrayElement(index, index - 1)
													}
												>
													<i className="material-icons">arrow_upward</i>
												</button>
											)}

											{/* {console.log(index)} */}
											{index === 4 ? null : (
												<button
													className="icon-only small mx-0"
													data-testid="down-button"
													onClick={() =>
														this.moveUpArrayElement(index, index + 1)
													}
												>
													<i className="material-icons">arrow_downward</i>
												</button>
											)}
										</div>
									</li>
								))}
						</ul>
					</section>
					<section className="flex-auto">
						<img src="images/map.svg" className="fill" alt="map" />
					</section>
				</div>
			</div>
		);
	}
}
