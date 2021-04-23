import axios from 'axios';
import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Repos from './Repos';

class App extends Component {
	state = {
		items: [],
		itemsCount: 0,
		page: 1,
	};
	componentDidMount = async () => {
		let promise = axios.get(
			'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=1',
		);
		const response = await promise;
		this.setState({
			items: [...response.data.items],
			itemsCount: response.data.total_count,
		});
		console.log(this.state.items);
	};
	loadMoreData = async (page) => {
		let promise = axios.get(
			`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`,
		);
		const response = await promise;
		this.setState({
			items: [...response.data.items],
			itemsCount: response.data.total_count,
			page: page,
		});
		console.log(this.state.items);
	};
	render() {
		let { items, itemsCount, page } = this.state;

		return (
			<InfiniteScroll
				dataLength={itemsCount} //This is important field to render the next data
				next={() => this.loadMoreData(page + 1)}
				hasMore={true}
				loader={<h4>Fetching .....</h4>}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						<b>Yay! You have seen it all</b>
					</p>
				}
			>
				<Repos items={items} />
			</InfiniteScroll>
		);
	}
}

export default App;
